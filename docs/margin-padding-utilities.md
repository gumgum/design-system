---
id: margin-padding-utilities
title: Margin & Padding Utilities
sidebar_label: Margin & Padding
section: utilities
---

Assign margin or padding to any element with shorthand utility classes. Includes support for individual properties, all properties, and vertical and horizontal properties. The classes are named using the format: `{property}-{sides}-{size}`. `{property}` can be `-m` (margin), or `-p` (padding). `{sides}` can be `-t` (top), `-r` (right), `-b` (bottom), `-l` (left), `-v` (vertical, top & bottom sides), `-h` (horizontal, left & right sides), or `-a` (all sides). `{size}` can be `0`, `1`, `2`, `3`, `4`, `5` or `6` indicating multiples of the global default value, the `$unit` variable.

For the spacing to take effect at a certain breakpoint only, use the format `{property}-{sides}-{size}-{breakpoint}`, where `{breakpoint}` can be `xs`, `sm`, `md`, `lg` or `xl`.

Finally, you can use `-m-h-c` to horizontally center a block element with an assigned width. Margin-centering can also leverage the breakpoint syntax to work exclusively at certain browser sizes.

```html
<div className="-color-bg-pri-lt-4 -overflow-hidden -m-b-2">
    <div className="-m-a-1 -color-bg-pri">Margin all 1</div>
</div>
<div className="-color-bg-pri-lt-4 -overflow-hidden -m-b-2">
    <div className="-m-l-6 -color-bg-pri">Margin left 6</div>
</div>
<div className="-color-bg-pri-lt-4 -overflow-hidden -m-b-2">
    <div className="-p-v-3 -color-bg-pri">Padding vertical 3</div>
</div>
<div className="-color-bg-pri-lt-4 -overflow-hidden -m-b-2">
    <div className="-p-h-2 -color-bg-pri">Padding horizontal 2</div>
</div>
```

**Optional classes:**

-   `-m-t-*`
-   `-m-r-*`
-   `-m-b-*`
-   `-m-l-*`
-   `-m-v-*`
-   `-m-h-*`
-   `-m-h-c`
-   `-m-a-*`
-   `-m-t-*-xs`
-   `-m-r-*-xs`
-   `-m-b-*-xs`
-   `-m-l-*-xs`
-   `-m-v-*-xs`
-   `-m-h-*-xs`
-   `-m-h-c-xs`
-   `-m-a-*-xs`
-   `-m-t-*-sm`
-   `-m-r-*-sm`
-   `-m-b-*-sm`
-   `-m-l-*-sm`
-   `-m-v-*-sm`
-   `-m-h-*-sm`
-   `-m-h-c-sm`
-   `-m-a-*-sm`
-   `-m-t-*-md`
-   `-m-r-*-md`
-   `-m-b-*-md`
-   `-m-l-*-md`
-   `-m-v-*-md`
-   `-m-h-*-md`
-   `-m-h-c-md`
-   `-m-a-*-md`
-   `-m-t-*-lg`
-   `-m-r-*-lg`
-   `-m-b-*-lg`
-   `-m-l-*-lg`
-   `-m-v-*-lg`
-   `-m-h-*-lg`
-   `-m-h-c-lg`
-   `-m-a-*-lg`
-   `-m-t-*-xl`
-   `-m-r-*-xl`
-   `-m-b-*-xl`
-   `-m-l-*-xl`
-   `-m-v-*-xl`
-   `-m-h-*-xl`
-   `-m-h-c-xl`
-   `-m-a-*-xl`
-   `-p-t-*`
-   `-p-r-*`
-   `-p-b-*`
-   `-p-l-*`
-   `-p-v-*`
-   `-p-h-*`
-   `-p-a-*`
-   `-p-t-*-xs`
-   `-p-r-*-xs`
-   `-p-b-*-xs`
-   `-p-l-*-xs`
-   `-p-v-*-xs`
-   `-p-h-*-xs`
-   `-p-a-*-xs`
-   `-p-t-*-sm`
-   `-p-r-*-sm`
-   `-p-b-*-sm`
-   `-p-l-*-sm`
-   `-p-v-*-sm`
-   `-p-h-*-sm`
-   `-p-a-*-sm`
-   `-p-t-*-pd`
-   `-p-r-*-pd`
-   `-p-b-*-pd`
-   `-p-l-*-pd`
-   `-p-v-*-pd`
-   `-p-h-*-pd`
-   `-p-a-*-pd`
-   `-p-t-*-lg`
-   `-p-r-*-lg`
-   `-p-b-*-lg`
-   `-p-l-*-lg`
-   `-p-v-*-lg`
-   `-p-h-*-lg`
-   `-p-a-*-lg`
-   `-p-t-*-xl`
-   `-p-r-*-xl`
-   `-p-b-*-xl`
-   `-p-l-*-xl`
-   `-p-v-*-xl`
-   `-p-h-*-xl`
-   `-p-a-*-xl`
