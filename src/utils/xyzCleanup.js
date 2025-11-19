;(function () {
	function toMs(v) {
		const s = String(v || '').trim()
		if (!s) return 0
		if (s.endsWith('ms')) return parseFloat(s) || 0
		return (parseFloat(s) || 0) * 1000
	}

	function getAnimMeta(el) {
		try {
			const cs = getComputedStyle(el)
			const names = cs.animationName.split(',').map((s) => s.trim())
			const durations = cs.animationDuration.split(',').map(toMs)
			const delays = cs.animationDelay.split(',').map(toMs)
			// Filter out animations with zero duration
			const active = names
				.map((n, i) => ({ name: n, duration: durations[i] || 0, delay: delays[i] || 0 }))
				.filter((a) => a.name && a.name !== 'none' && a.duration > 0)
			const expectedCount = active.length
			const maxMs = active.reduce((acc, a) => Math.max(acc, a.duration + a.delay), 0)
			return { expectedCount, maxMs }
		} catch (_) {
			return { expectedCount: 0, maxMs: 0 }
		}
	}

	function bindCleanup(parent) {
		if (!(parent instanceof Element)) return
		if (!parent.classList.contains('xyz-in')) return
		if (parent.dataset.xyzCleanupBound === '1') return

		// Mark bound to avoid multiple listeners per parent
		parent.dataset.xyzCleanupBound = '1'

		const describe = (el) => {
			const t = el.tagName ? el.tagName.toLowerCase() : 'node'
			const id = el.id ? `#${el.id}` : ''
			const cls = el.classList && el.classList.length ? `.${[...el.classList].join('.')}` : ''
			return `${t}${id}${cls}`
		}

		// Include parent plus any nested children participating in the animation
		const nested = parent.querySelectorAll('.xyz-nested')
		const waitEls = [parent, ...nested]

		let remaining = 0
		const timers = new Map()
		const perElMeta = new Map()
		let expectedOverallMs = 0
		const startTime = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now()

		const removeParentClass = () => {
			const now = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now()
			const actual = Math.max(0, Math.round(now - startTime))

			// if (typeof console !== 'undefined' && console.log) {
			// 	console.log(
			// 		`[xyzCleanup] done -> ${describe(parent)} after ${actual}ms (expected ~${Math.round(expectedOverallMs)}ms)`
			// 	)
			// }

			parent.classList.remove('xyz-in')
		}

		function markDone(el) {
			if (!timers.has(el)) return
			clearTimeout(timers.get(el))
			timers.delete(el)
			remaining--
			if (remaining <= 0) removeParentClass()
		}

		waitEls.forEach((el) => {
			const { expectedCount, maxMs } = getAnimMeta(el)
			// If no active animations, consider this element done immediately
			if (expectedCount === 0 || maxMs === 0) return

			remaining++
			perElMeta.set(el, { expectedCount, maxMs })
			expectedOverallMs = Math.max(expectedOverallMs, maxMs)

			let ended = 0
			const onEnd = () => {
				ended++
				if (ended >= expectedCount) markDone(el)
			}

			// Listen for animationend on each element
			el.addEventListener('animationend', onEnd)

			// Fallback timer to ensure cleanup even if events don’t fire
			const t = setTimeout(() => markDone(el), maxMs + 50)
			timers.set(el, t)
		})

		// Logging for this parent: predicted wait time and per-target breakdown
		// if (typeof console !== 'undefined' && console.log) {
		// 	const breakdown = []
		// 	perElMeta.forEach((meta, el) => breakdown.push(`${describe(el)} ~${Math.round(meta.maxMs)}ms`))

		// 	console.log(
		// 		`[xyzCleanup] waiting ~${Math.round(expectedOverallMs)}ms for ${describe(parent)}; targets: ${
		// 			perElMeta.size
		// 		} -> ${breakdown.join(', ')}`
		// 	)
		// }

		// If nothing to wait for (no animations detected), remove immediately
		if (remaining === 0) removeParentClass()
	}

	function xyzCleanup(root) {
		const scope = root && root.querySelectorAll ? root : document
		const nodes = scope.querySelectorAll('.xyz-in')
		nodes.forEach(bindCleanup)
	}

	// Expose globally for on-demand usage (e.g., after dynamic HTML injection)
	try {
		;(window.MI || (window.MI = {})).xyzCleanup = xyzCleanup
	} catch (_) {
		// ignore in non-browser contexts
	}

	// Run on page load for any pre-rendered `.xyz-in` elements
	if (typeof document !== 'undefined') {
		let hasRunInitialCleanup = false

		const runCleanup = () => {
			xyzCleanup(document)
			hasRunInitialCleanup = true
		}

		document.addEventListener('astro:page-load', runCleanup)

		if (document.readyState === 'loading') {
			document.addEventListener(
				'DOMContentLoaded',
				() => {
					if (!hasRunInitialCleanup) runCleanup()
				},
				{ once: true }
			)
		} else {
			runCleanup()
		}
	}
})()
