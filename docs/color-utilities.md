---
id: color-utilities
title: Color Utilities
sidebar_label: Color
section: utilities
---

Manually override the color, border-color, or background-color of any element.

The basic formula is `-color-{p}-{c}` where `{p}` is the property being overridden and `{c}` is the color. Values for `{p}` are: `bg` (background), `bd` (border), and `tx` (text color). Values for `{c}` are: `pri` (current theme's primary color), `sec` (current theme's secondary color), `ter` (current theme's tertiary color), `suc` (success color), `war` (warning color), `dan` (danger color) & `inf` (info color).

For each color, there are 4 light variations and 4 dark variations, which can be specified using `-lt-1`, `-lt-2`, `-lt-3`, `-lt-4`, `-dk-1`, `-dk-2`, `-dk-3` or `-dk-4`. You can also use the `-dark-mode` modifier on the `<body>` tag to switch the entire app to dark mode.

## Theme Colors

```html
<div class="-color-bg-pri">Primary background color</div>
<div class="-color-bd-suc">Success color border</div>
<div class="-color-tx-dan">Danger color text</div>
```

__Optional classes:__

- `-dark-mode`
- `-color-bg-pri`
- `-color-bg-pri-lt-*`
- `-color-bg-pri-dk-*`
- `-color-bg-sec`
- `-color-bg-sec-lt-*`
- `-color-bg-sec-dk-*`
- `-color-bg-ter`
- `-color-bg-ter-lt-*`
- `-color-bg-ter-dk-*`
- `-color-bg-suc`
- `-color-bg-suc-lt-*`
- `-color-bg-suc-dk-*`
- `-color-bg-war`
- `-color-bg-war-lt-*`
- `-color-bg-war-dk-*`
- `-color-bg-dan`
- `-color-bg-dan-lt-*`
- `-color-bg-dan-dk-*`
- `-color-bg-inf`
- `-color-bg-inf-lt-*`
- `-color-bg-inf-dk-*`
- `-color-bd-pri`
- `-color-bd-pri-lt-*`
- `-color-bd-pri-dk-*`
- `-color-bd-sec`
- `-color-bd-sec-lt-*`
- `-color-bd-sec-dk-*`
- `-color-bd-ter`
- `-color-bd-ter-lt-*`
- `-color-bd-ter-dk-*`
- `-color-bd-suc`
- `-color-bd-suc-lt-*`
- `-color-bd-suc-dk-*`
- `-color-bd-war`
- `-color-bd-war-lt-*`
- `-color-bd-war-dk-*`
- `-color-bd-dan`
- `-color-bd-dan-lt-*`
- `-color-bd-dan-dk-*`
- `-color-bd-inf`
- `-color-bd-inf-lt-*`
- `-color-bd-inf-dk-*`
- `-color-tx-pri`
- `-color-tx-pri-lt-*`
- `-color-tx-pri-dk-*`
- `-color-tx-sec`
- `-color-tx-sec-lt-*`
- `-color-tx-sec-dk-*`
- `-color-tx-ter`
- `-color-tx-ter-lt-*`
- `-color-tx-ter-dk-*`
- `-color-tx-suc`
- `-color-tx-suc-lt-*`
- `-color-tx-suc-dk-*`
- `-color-tx-war`
- `-color-tx-war-lt-*`
- `-color-tx-war-dk-*`
- `-color-tx-dan`
- `-color-tx-dan-lt-*`
- `-color-tx-dan-dk-*`
- `-color-tx-inf`
- `-color-tx-inf-lt-*`
- `-color-tx-inf-dk-*`
- `-color-bg-gold`
- `-color-bg-gold-lt-*`
- `-color-bg-gold-dk-*`
- `-color-bd-gold`
- `-color-bd-gold-lt-*`
- `-color-bd-gold-dk-*`
- `-color-tx-gold`
- `-color-tx-gold-lt-*`
- `-color-tx-gold-dk-*`
- `-color-bg-blue`
- `-color-bg-blue-lt-*`
- `-color-bg-blue-dk-*`
- `-color-bd-blue`
- `-color-bd-blue-lt-*`
- `-color-bd-blue-dk-*`
- `-color-tx-blue`
- `-color-tx-blue-lt-*`
- `-color-tx-blue-dk-*`
- `-color-bg-red`
- `-color-bg-red-lt-*`
- `-color-bg-red-dk-*`
- `-color-bd-red`
- `-color-bd-red-lt-*`
- `-color-bd-red-dk-*`
- `-color-tx-red`
- `-color-tx-red-lt-*`
- `-color-tx-red-dk-*`
- `-color-bg-green`
- `-color-bg-green-lt-*`
- `-color-bg-green-dk-*`
- `-color-bd-green`
- `-color-bd-green-lt-*`
- `-color-bd-green-dk-*`
- `-color-tx-green`
- `-color-tx-green-lt-*`
- `-color-tx-green-dk-*`
- `-color-bg-purple`
- `-color-bg-purple-lt-*`
- `-color-bg-purple-dk-*`
- `-color-bd-purple`
- `-color-bd-purple-lt-*`
- `-color-bd-purple-dk-*`
- `-color-tx-purple`
- `-color-tx-purple-lt-*`
- `-color-tx-purple-dk-*`
- `-color-bg-orange`
- `-color-bg-orange-lt-*`
- `-color-bg-orange-dk-*`
- `-color-bd-orange`
- `-color-bd-orange-lt-*`
- `-color-bd-orange-dk-*`
- `-color-tx-orange`
- `-color-tx-orange-lt-*`
- `-color-tx-orange-dk-*`
- `-color-bg-dkblue`
- `-color-bg-dkblue-lt-*`
- `-color-bg-dkblue-dk-*`
- `-color-bd-dkblue`
- `-color-bd-dkblue-lt-*`
- `-color-bd-dkblue-dk-*`
- `-color-tx-dkblue`
- `-color-tx-dkblue-lt-*`
- `-color-tx-dkblue-dk-*`
- `-color-bg-dkred`
- `-color-bg-dkred-lt-*`
- `-color-bg-dkred-dk-*`
- `-color-bd-dkred`
- `-color-bd-dkred-lt-*`
- `-color-bd-dkred-dk-*`
- `-color-tx-dkred`
- `-color-tx-dkred-lt-*`
- `-color-tx-dkred-dk-*`
- `-color-bg-dkgreen`
- `-color-bg-dkgreen-lt-*`
- `-color-bg-dkgreen-dk-*`
- `-color-bd-dkgreen`
- `-color-bd-dkgreen-lt-*`
- `-color-bd-dkgreen-dk-*`
- `-color-tx-dkgreen`
- `-color-tx-dkgreen-lt-*`
- `-color-tx-dkgreen-dk-*`
- `-color-bg-dkgold`
- `-color-bg-dkgold-lt-*`
- `-color-bg-dkgold-dk-*`
- `-color-bd-dkgold`
- `-color-bd-dkgold-lt-*`
- `-color-bd-dkgold-dk-*`
- `-color-tx-dkgold`
- `-color-tx-dkgold-lt-*`
- `-color-tx-dkgold-dk-*`
- `-color-bg-magenta`
- `-color-bg-magenta-lt-*`
- `-color-bg-magenta-dk-*`
- `-color-bd-magenta`
- `-color-bd-magenta-lt-*`
- `-color-bd-magenta-dk-*`
- `-color-tx-magenta`
- `-color-tx-magenta-lt-*`
- `-color-tx-magenta-dk-*`

## Grayscale Colors

Manually override the color, border-color, or background-color of any element. The basic formula is `-color-{p}-{c}` where `{p}` is the property being overridden and `{c}` is the color. Values for `{p}` are: `bg` (background), `bd` (border), and `tx` (text color). Values for `{c}` are: `lt` (light shades of gray), & `dk` (dark shades of gray).

There are 5 variations of light gray, and 5 variations of dark gray.

```html
<div class="-color-bg-lt-1">Lightest gray background color</div>
<div class="-color-bd-dk-1">Darkest gray border color</div>
```

__Optional classes:__

- `-color-bg-lt-1`
- `-color-bg-lt-2`
- `-color-bg-lt-3`
- `-color-bg-lt-4`
- `-color-bg-lt-5`
- `-color-bd-lt-1`
- `-color-bd-lt-2`
- `-color-bd-lt-3`
- `-color-bd-lt-4`
- `-color-bd-lt-5`
- `-color-tx-lt-1`
- `-color-tx-lt-2`
- `-color-tx-lt-3`
- `-color-tx-lt-4`
- `-color-tx-lt-5`
- `-color-bg-dk-1`
- `-color-bg-dk-2`
- `-color-bg-dk-3`
- `-color-bg-dk-4`
- `-color-bg-dk-5`
- `-color-bd-dk-1`
- `-color-bd-dk-2`
- `-color-bd-dk-3`
- `-color-bd-dk-4`
- `-color-bd-dk-5`
- `-color-tx-dk-1`
- `-color-tx-dk-2`
- `-color-tx-dk-3`
- `-color-tx-dk-4`
- `-color-tx-dk-5`
- `-color-bg-white`
- `-color-bd-white`
- `-color-tx-white`
