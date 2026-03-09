# Rules

- Do not add unnecessary text or styling unless it is explicitly requested.
- Default to on device features and libraries and packages that give access to on device features.
- Componentize anything used in more than 3 places, particular basic UI components like buttons and inputs, but not simple layouts.
- Do not switch to a different library or package unless it is explicitly requested.
- Do not add styles to existing elements or components unless explicity requested.
- When refactoring or moving code between files, preserve the exact original behavior including animation values, timing, and spring configurations. Do not "improve" or change values.
- Keep reusable components simple and animation-free. Apply animations at the usage site, not inside the component itself. This allows the same component to be used with different animations in different contexts.
- Do not add positioning styles (margin, padding, absolute/relative positioning) to reusable components. These should always be set where the component is used, since positioning requirements vary by context.
- When creating Astro components that need to receive a `class` or styles from a parent, always accept `class` and spread `...rest` onto the root element: `const { class: className, ...rest } = Astro.props` then `class:list={[className]} {...rest}`. This lets the parent apply scoped styles without needing `:global()`.
- Use existing components and patterns when possible, rather than creating new ones. For example use the `Image` component from Astro for images, rather than an `<img>` tag.
- Never duplicate an animated property's initial/final state outside the animation. Use `animation-fill-mode` instead:
  - **Infinite loops**: The keyframes control the value at all times. Do not set a base value for the animated property anywhere (not inline, not in CSS).
  - **Entrance (play once, start hidden)**: Use `animation-fill-mode: backwards` — this applies the 0% keyframe before the animation starts, so the element is hidden without needing a separate `opacity: 0`.
  - **Exit (play once, end hidden)**: Use `animation-fill-mode: forwards` — this holds the 100% keyframe after the animation ends.
  - **Both**: Use `animation-fill-mode: both` when you need backwards + forwards behavior.
  - The shorthand `animation` accepts fill-mode as the last value, e.g. `animation: fade-in 0.3s ease-out backwards`.

# Tools

- Astro
- Animations: AnimXYZ
- Icons: Astro Icon
- Styling: SCSS
- Fonts: Figtree
- ClassNames: Astro's class:list syntax

# Skills

- `.claude/skills/frontend-design/` — Skill for building distinctive, production-grade frontend interfaces. Use for layout, visual design, and creative direction.
- `.claude/skills/astro/` and `.claude/skills/astro-framework/`— Skillsfor working with the Astro framework (the site's build tool).
- `.claude/skills/motion/` — Skill for the Motion animation library. Use `import { animate, stagger, inView } from 'motion'` for vanilla JS animations (not React).
