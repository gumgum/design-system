---
id: snackbar-component
title: Snackbar
sidebar_label: Snackbar
section: atoms
---

The snackbar component, prefixed by `gds-snackbar`, is used to quickly display user feedback, warnings and errors.

To hide a notification, add `gds-snackbar__notification--hidden` to it.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-snackbar" target="_blank">Prototypes Page</a>
</p>

```html
<ul class="gds-snackbar">
    <li class="gds-snackbar__notification">
        <p class="gds-snackbar__notification-text">Some text goes here.</p>
        <button class="gds-snackbar__notification-button"></button>
    </li>
    <li class="gds-snackbar__notification">
        <p class="gds-snackbar__notification-text">Some text goes here.</p>
        <button class="gds-snackbar__notification-button"></button>
    </li>
</ul>
```

__Optional classes:__

- `gds-snackbar__notification--success`
- `gds-snackbar__notification--info`
- `gds-snackbar__notification--warning`
- `gds-snackbar__notification--danger`
- `gds-snackbar__notification--hidden`
- `gds-snackbar__notification-button--dark`
- `gds-snackbar__notification-button--success`
- `gds-snackbar__notification-button--info`
- `gds-snackbar__notification-button--warning`
- `gds-snackbar__notification-button--danger`
