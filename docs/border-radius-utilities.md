---
id: border-radius-utilities
title: Border Radius Utilities
sidebar_label: Border Radius
---

Adjust any element's border-radius to the default value or set it to zero. Includes support for all corners, individual corners, and individual sides.

The classes are named using the format: `-bor-rad-{sides}-{size}`. `{sides}` can be `-a` (all), `-tl` (top left), `-tr` (top right), `-bl` (bottom left), `-br` (bottom right), `-t` (top left & top right), `-r` (top right & bottom right), `-b` (bottom left & bottom right), or `-l` (top left & bottom left). `{size}` can be `0` or `1`, indicating either zero or the global default value, the `$border-radius` variable (2px by default).

```html
<div class="gds-container -bor-rad-a-0">
    <p>Container with border-radius: 0</p>
</div>
```

__Optional classes:__

- `-bor-rad-a-0`
- `-bor-rad-a-1`
- `-bor-rad-tl-0`
- `-bor-rad-tl-1`
- `-bor-rad-tr-0`
- `-bor-rad-tr-1`
- `-bor-rad-bl-0`
- `-bor-rad-bl-1`
- `-bor-rad-br-0`
- `-bor-rad-br-1`
- `-bor-rad-t-0`
- `-bor-rad-t-1`
- `-bor-rad-r-0`
- `-bor-rad-r-1`
- `-bor-rad-b-0`
- `-bor-rad-b-1`
- `-bor-rad-l-0`
- `-bor-rad-l-1`
