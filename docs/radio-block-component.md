---
id: radio-block-component
title: Radio Block
sidebar_label: Radio Block
---

The radio block component, prefixed by `gds-radio-block`, is a group of buttons. The user can only select one button at a time. The current theme's primary color is used for the active button state by default.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-radio-block" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-radio-block">
    <button class="gds-radio-block__button">
        <span class="gds-radio-block__button-text">Background</span>
    </button>
    <button class="gds-radio-block__button gds-radio-block__button--active">
        <span class="gds-radio-block__button-text">Foreground</span>
    </button>
</div>
```

__Optional classes:__

- `gds-radio-block--dark`
- `gds-radio-block__button--secondary`
- `gds-radio-block__button--tertiary`
- `gds-radio-block__button--quaternary`
- `gds-radio-block__button--sm`
- `gds-radio-block__button--lg`
- `gds-radio-block__button--active`
- `gds-radio-block__button--no-pad`
