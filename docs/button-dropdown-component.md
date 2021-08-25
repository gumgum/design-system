---
id: button-dropdown-component
title: Button Dropdown
sidebar_label: Button Dropdown
---

The button-dropdown component, prefixed by `gds-button-dropdown`, is used for dropdown menus. To expand the dropdown menu, add the `gds-button-dropdown--active` class to `gds-button-dropdown`. Use the modifier `gds-button-dropdown--sm` for a smaller dropdown menu.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-button-dropdown" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-button-dropdown" data-gds-dropdown>
    <button type="button" class="gds-button-dropdown__button gds-button--primary" data-gds-dropdown-button>Dropdown Menu</button>
    <ul class="gds-button-dropdown__menu">
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
        <li class="gds-button-dropdown__divider"></li>
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
        <li class="gds-button-dropdown__menu-item"><a class="gds-button-dropdown__menu-link">Link</a></li>
    </ul>
</div>
```

__Optional classes:__

- `gds-button-dropdown--secondary`
- `gds-button-dropdown--tertiary`
- `gds-button-dropdown--xs`
- `gds-button-dropdown--sm`
- `gds-button-dropdown--lg`
- `gds-button-dropdown__button--dark`
- `gds-button-dropdown__button--dark-primary`
- `gds-button-dropdown__button--dark-secondary`
- `gds-button-dropdown__button--dark-tertiary`
- `gds-button-dropdown__menu--dark`
- `gds-button-dropdown__button--no-rotate`
