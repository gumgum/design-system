---
id: balloon-component
title: Balloon
sidebar_label: Balloon
---

The `gds-balloon` component is meant to be used to display contextual information when rolling over or clicking some other element. It is, in essence, a more robust and flexible version of a tooltip complete with formatting for titles and descriptions instead of just a simple string of text. While it has built in elements for title and description, it can contain any formatted HTML.

Use the position modifiers `gds-balloon--left`, `gds-balloon--right`, `gds-balloon--top`, & `gds-balloon--bottom` to make the arrow position correctly with respect to the balloon and the corresponding element being highlighted.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-balloon" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-balloon gds-balloon--right">
    <div class="gds-balloon__group gds-balloon__group--divide-bottom">
        <span class="gds-balloon__label gds-form-group__label">Balloon Title</span>
    </div>
    <div class="gds-balloon__group">
        <span class="gds-balloon__description">A short description goes here</span>
    </div>
</div>
```

__Optional classes:__

- `gds-balloon--right`
- `gds-balloon--left`
- `gds-balloon--top`
- `gds-balloon--bottom`
- `gds-balloon--primary`
- `gds-balloon--secondary`
- `gds-balloon--tertiary`
- `gds-balloon--success`
- `gds-balloon--warning`
- `gds-balloon--danger`
- `gds-balloon--dark`
- `gds-balloon__label--dark`
- `gds-balloon__label--primary`
- `gds-balloon__label--secondary`
- `gds-balloon__label--tertiary`
- `gds-balloon__label--success`
- `gds-balloon__label--warning`
- `gds-balloon__label--danger`
- `gds-balloon__group--primary`
- `gds-balloon__group--secondary`
- `gds-balloon__group--tertiary`
- `gds-balloon__group--success`
- `gds-balloon__group--warning`
- `gds-balloon__group--danger`
- `gds-balloon__group--divide-bottom`
- `gds-balloon__group--divide-top`
