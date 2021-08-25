---
id: text-align-utilities
title: Text Align Utilities
sidebar_label: Text Align
section: utilities
---

Adjust text alignment with the following utility classes. Text is aligned left by default.

To adjust text alignment at a specified breakpoint, use the format `-text-{direction}-{breakpoint}`, where `{direction}` can be `left`, `center`, or `right`, and `{breakpoint}` can be `xs`, `sm`, `md`, `lg` or `xl`. Breakpoint-specific classes cascade downwards.

<p class="-text-left" style="margin-bottom: 0.8em">Left-aligned text</p>
<p class="-text-center">Centered text</p>
<p class="-text-right">Right-aligned text</p>

```html
<p class="-text-left">Left-aligned text</p>
<p class="-text-center">Centered text</p>
<p class="-text-right">Right-aligned text</p>
```

__Optional classes:__

- `-text-left`
- `-text-center`
- `-text-right`
- `-text-left--*`
- `-text-center--*`
- `-text-right--*`
