# Rules

- Do not add unnecessary text or styling unless it is explicitly requested.
- Default to on device features and libraries and packages that give access to on device features.
- Componentize anything used in more than 3 places, particular basic UI components like buttons and inputs, but not simple layouts.
- Do not switch to a different library or package unless it is explicitly requested.
- Do not add styles to existing elements or components unless explicity requested.
- When refactoring or moving code between files, preserve the exact original behavior including animation values, timing, and spring configurations. Do not "improve" or change values.
- Keep reusable components simple and animation-free. Apply animations at the usage site, not inside the component itself. This allows the same component to be used with different animations in different contexts.
- Do not add positioning styles (margin, padding, absolute/relative positioning) to reusable components. These should always be set where the component is used, since positioning requirements vary by context.

# Tools

- Astro
- Animations: AnimXYZ
- Icons: Astro Icon
- Styling: SCSS
- Fonts: Figtree
- ClassNames: Astro's class:list syntax
