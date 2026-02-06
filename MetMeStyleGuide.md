# MetMe Style Guide

A visual style reference for recreating the MetMe look on the web. This focuses on visual outcomes, not specific libraries.

---

## Color Palette

MetMe uses Tailwind's **amber** and **stone** palettes. Here are the exact hex values used throughout the app.

### Amber (Primary / Accent)

| Token     | Hex       | Usage                                       |
| --------- | --------- | ------------------------------------------- |
| amber-50  | `#FFFBEB` | Screen background (light, top of gradient)  |
| amber-100 | `#FEF3C7` | Button gradient start (primary, light)      |
| amber-200 | `#FDE68A` | Border gradient accents                     |
| amber-300 | `#FCD34D` | Button gradient mid (primary, light)        |
| amber-400 | `#FBBF24` | Dark mode primary gradient start            |
| amber-500 | `#F59E0B` | Button gradient end (primary, light), glows |
| amber-600 | `#D97706` | Dark mode primary gradient end              |
| amber-700 | `#B45309` | ShineText base color (light)                |
| amber-800 | `#92400E` | Primary button icon color (light)           |
| amber-900 | `#78350F` | Primary button text (light)                 |

### Stone (Neutral)

| Token     | Hex       | Usage                                              |
| --------- | --------- | -------------------------------------------------- |
| stone-50  | `#FAFAF9` | Screen background (light, bottom of gradient)      |
| stone-100 | `#F5F5F4` | Card/modal backgrounds (light), container gradient |
| stone-200 | `#E7E5E4` | Input borders (light)                              |
| stone-300 | `#D6D3D1` | Dark mode text (secondary), border accents         |
| stone-400 | `#A8A29E` | Placeholder text, secondary icons                  |
| stone-500 | `#78716C` | Secondary text (light)                             |
| stone-600 | `#57534E` | Body text (light)                                  |
| stone-700 | `#44403C` | Dark mode card gradient, input borders (dark)      |
| stone-800 | `#292524` | Dark mode input backgrounds, card gradient         |
| stone-900 | `#1C1917` | Screen background (dark, top), modal bg (dark)     |
| stone-950 | `#0C0A09` | Screen background (dark, bottom)                   |

### Semantic Colors

| Role           | Light                 | Dark                      |
| -------------- | --------------------- | ------------------------- |
| Danger         | `#EF4444` (red-500)   | `#F87171` (red-400)       |
| Danger bg      | `#FEE2E2` (red-100)   | `#7F1D1D80` (red-900 50%) |
| Success        | `#16A34A` (green-600) | `#16A34A`                 |
| Avatar initial | `#D97706` (amber-600) | `#FBBF24` (amber-400)     |

---

## Typography

**Font family:** Nunito Sans (from Google Fonts)

| Weight | Name     | Usage                           |
| ------ | -------- | ------------------------------- |
| 400    | Regular  | Body text, inputs, placeholders |
| 500    | Medium   | Medium emphasis text            |
| 600    | SemiBold | Buttons, labels, primary text   |
| 700    | Bold     | Headlines, section headers      |

**Sizes used in the app** (Tailwind defaults):

| Name      | Size | Usage                           |
| --------- | ---- | ------------------------------- |
| text-xs   | 12px | Small labels                    |
| text-sm   | 14px | Secondary labels, small buttons |
| text-base | 16px | Standard body text              |
| text-lg   | 18px | Inputs, default button text     |
| text-xl   | 20px | Section titles, large values    |
| text-2xl  | 24px | Page headers                    |

**Text colors:**

| Context            | Light               | Dark                |
| ------------------ | ------------------- | ------------------- |
| Primary text       | stone-900 `#1C1917` | stone-100 `#F5F5F4` |
| Secondary text     | stone-600 `#57534E` | stone-400 `#A8A29E` |
| Section headers    | stone-600 `#57534E` | stone-400 `#A8A29E` |
| Placeholder        | stone-400 `#A8A29E` | stone-400 `#A8A29E` |
| Primary btn text   | amber-900 `#78350F` | white               |
| Secondary btn text | stone-800 `#292524` | stone-200 `#E7E5E4` |
| Danger text        | red-500 `#EF4444`   | red-400 `#F87171`   |

---

## Screen Background

The entire app background is a vertical linear gradient that fills the screen.

```css
/* Light mode */
background: linear-gradient(180deg, #fffbeb 25%, #fafaf9 80%);

/* Dark mode */
background: linear-gradient(180deg, #1c1917 25%, #0c0a09 80%);
```

The gradient starts at 25% and ends at 80%, meaning the top quarter is the warm amber/dark tone and it fades to the neutral bottom.

---

## Buttons

All gradient-style buttons use a **135-degree angled linear gradient** for both their border and background fill. Buttons have a 1px gradient border rendered as a separate layer.

### Primary Button

```css
/* Light mode */
.btn-primary {
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 56px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #78350f;
}
.btn-primary::before {
  /* border layer */
  background: linear-gradient(135deg, #fde68a55, #f59e0bff, #d9770622);
  border-radius: 12px;
}
.btn-primary .fill {
  background: linear-gradient(135deg, #fef3c7, #fcd34d, #f59e0b);
  border-radius: 11px; /* 1px less than outer for inset */
}

/* Dark mode */
.btn-primary {
  color: white;
}
.btn-primary::before {
  background: linear-gradient(
    135deg,
    #fde68add,
    #fcd34d99,
    #fbbf2444,
    #f59e0b33
  );
}
.btn-primary .fill {
  background: linear-gradient(135deg, #fbbf24cc, #d9770622);
}
```

### Secondary Button

```css
/* Light mode */
.btn-secondary {
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 56px;
  font-weight: 600;
  font-size: 18px;
  color: #292524;
}
.btn-secondary::before {
  background: linear-gradient(
    135deg,
    #fffbeb bb,
    #fef3c7bb,
    #a8a29e40,
    #f5f5f4bb
  );
}
.btn-secondary .fill {
  background: linear-gradient(
    135deg,
    #ffffffdd,
    #fafaf9dd,
    #f5f5f4bb,
    #f5f5f4bb,
    #d6d3d13d
  );
}

/* Dark mode */
.btn-secondary {
  color: #e7e5e4;
}
.btn-secondary::before {
  background: linear-gradient(
    135deg,
    #fde68a66,
    #a8a29e66,
    #a8a29e44,
    #29252422
  );
}
.btn-secondary .fill {
  background: linear-gradient(135deg, #44403cbb, #29252444);
}
```

### Danger Button

```css
/* Light mode */
.btn-danger {
  color: #ef4444;
}
.btn-danger::before {
  background: linear-gradient(135deg, #fee2e222, #f87171ff, #dc262630);
}
.btn-danger .fill {
  background: linear-gradient(135deg, #fee2e240, #fecacadd);
}

/* Dark mode */
.btn-danger {
  color: #f87171;
}
.btn-danger::before {
  background: linear-gradient(135deg, #ef4444ff, #7f1d1d11);
}
.btn-danger .fill {
  background: linear-gradient(135deg, #7f1d1daa, #450a0a44);
}
```

### Text Button (no gradient)

```css
.btn-text {
  background: transparent;
  border: none;
  font-weight: 600;
  color: #57534e; /* light */
  color: #d6d3d1; /* dark */
}
```

### Icon-Only Buttons

Same gradient treatment, but circular:

```css
.btn-icon {
  border-radius: 9999px; /* fully round */
  /* Sizes: */
  /* sm: 40x40px,  icon 16px */
  /* md: 56x56px,  icon 20px */
  /* lg: 64x64px,  icon 24px */
  /* xl: 80x80px,  icon 32px */
}
```

### Button Press Animation

On press, buttons scale up to `1.1` with a spring animation (damping: 15, stiffness: 400). On release, they spring back to `1.0`.

```css
.btn:active {
  transform: scale(1.1);
  transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
}
```

---

## Cards / Styled Containers

Cards use a glassmorphism effect: a gradient border, a backdrop blur, and a translucent gradient fill.

### Light Mode

```css
.card {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  /* Backdrop blur */
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}
.card::before {
  /* gradient border */
  background: linear-gradient(135deg, #f5f5f4, #a8a29e40, #f5f5f4bb);
  /* render as 1px border using mask or pseudo-element technique */
}
.card .fill {
  background: linear-gradient(
    135deg,
    #ffffffdd,
    #f5f5f480,
    #f5f5f480,
    #f5f5f420
  );
}
```

### Dark Mode

```css
.card {
  border-radius: 12px;
  backdrop-filter: blur(50px);
}
.card::before {
  background: linear-gradient(
    135deg,
    #fde68a55,
    #a8a29e44,
    #44403c44,
    #d6d3d133
  );
}
.card .fill {
  background: linear-gradient(135deg, #292524cc, #292524cc, #44403c22);
}
```

### Implementing the Gradient Border on Web

Since the app uses a masked gradient to create a 1px border effect, here is one way to achieve it on web:

```css
.card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(50px);
}

/* Gradient border via padding + background-clip */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px; /* border thickness */
  background: linear-gradient(135deg, #f5f5f4, #a8a29e40, #f5f5f4bb);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Inner fill gradient */
.card::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 11px;
  background: linear-gradient(
    135deg,
    #ffffffdd,
    #f5f5f480,
    #f5f5f480,
    #f5f5f420
  );
  pointer-events: none;
  z-index: -1;
}
```

---

## Text Inputs

```css
/* Standard input */
.input {
  min-height: 48px;
  background: white; /* dark: #292524 */
  border: 1px solid #e7e5e4; /* dark: #44403C */
  border-radius: 12px;
  padding: 16px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  line-height: 20px;
  color: #1c1917; /* dark: #F5F5F4 */
}
.input::placeholder {
  color: #a8a29e;
}
```

---

## Avatars

Circular container with initial letter fallback:

```css
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid #e7e5e4; /* dark: #292524 */
  background: white; /* dark: #1C1917 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-initial {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #d97706; /* dark: #FBBF24 */
  text-transform: uppercase;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## Modals / Bottom Sheets

Modals slide up from the bottom of the screen with a translucent overlay.

```css
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.5); /* dark: rgba(12, 10, 9, 0.5) */
}

/* Modal content */
.modal-content {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f5f5f4; /* dark: #1C1917 */
  transform: translateY(100%);
  transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
}
.modal-content.open {
  transform: translateY(0);
}

/* Top edge fade gradient (extends above the modal) */
.modal-content::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  height: 72px;
  background: linear-gradient(180deg, transparent, #fffbeb);
  /* dark: linear-gradient(180deg, transparent, #1C1917) */
  pointer-events: none;
}

/* Inner background gradient */
.modal-content::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #fffbeb 75%, transparent);
  /* dark: linear-gradient(180deg, #1C1917, #0C0A09) */
  pointer-events: none;
  z-index: -1;
}
```

**Animation timings:**

- Present: content 300ms ease-out, overlay 200ms
- Dismiss: content 250ms ease-in, overlay 150ms
- Swipe-to-dismiss threshold: 150px or velocity > 500px/s

---

## Dashed Lines / Dividers

Used as separators and decorative borders:

```css
.divider {
  border: none;
  border-top: 1px dashed #1c191766; /* dark: #F5F5F44D */
  /* Dash pattern: 4px dash, 4px gap */
}

/* Solid subtle separator */
.separator {
  height: 1px;
  background: rgba(28, 25, 23, 0.1); /* dark: rgba(250, 250, 249, 0.05) */
}
```

---

## Shine Text Effect

An animated gradient that sweeps across text, used for loading/active states:

```css
.shine-text {
  background: linear-gradient(
    135deg,
    transparent,
    #fbbf24,
    /* amber-400 (light) / #FDE68A amber-200 (dark) */ transparent
  );
  background-size: 120px 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: #b45309; /* amber-700 (light) / #F59E0B amber-500 (dark) */
  animation: shine 1.2s ease-in-out infinite;
}

@keyframes shine {
  0% {
    background-position: -120px center;
  }
  100% {
    background-position: calc(100% + 120px) center;
  }
}
```

---

## Spacing Conventions

| Context                     | Value                          |
| --------------------------- | ------------------------------ |
| Screen padding (horizontal) | 16px (sometimes 24px)          |
| Element gap (small)         | 8px                            |
| Element gap (medium)        | 12px                           |
| Element gap (large)         | 32px                           |
| Section vertical padding    | 8px                            |
| Input internal padding      | 16px                           |
| Button padding (md)         | 12px vertical, 16px horizontal |

---

## Border Radius

| Element      | Radius          |
| ------------ | --------------- |
| Buttons      | 12px            |
| Icon buttons | 9999px (circle) |
| Cards        | 12px            |
| Inputs       | 12px            |
| Avatars      | 9999px (circle) |
| Images/maps  | 8px             |
| Pills/badges | 9999px          |

---

## Design Principles Summary

1. **Warm neutral palette** - Amber accents on a stone/warm-gray base. Never cool grays or blues.
2. **Gradient borders** - Buttons and cards have 1px borders rendered as angled (135deg) gradients, not solid colors.
3. **Glassmorphism** - Cards use backdrop blur with translucent gradient fills for a frosted-glass look.
4. **Subtle depth** - Instead of drop shadows, depth comes from gradient borders, blur layers, and translucent backgrounds.
5. **Spring animations** - Interactive elements scale with spring physics on press (scale to 1.1, damping 15, stiffness 400).
6. **Dark mode parity** - Every element has a dark mode variant. Dark mode shifts amber accents lighter and uses stone-900/950 backgrounds.
7. **Nunito Sans everywhere** - Single font family, differentiated by weight (400, 500, 600, 700).
8. **Consistent radii** - 12px for rectangular containers, full-round for circular elements. No in-between values.
