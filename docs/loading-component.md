---
id: loading-component
title: Loading
sidebar_label: Loading
section: atoms
---

The loading component, prefixed by `gds-loading`, is used to indicate asynchronous loading of content. To show the indicator on a transparent overlay, add the `gds-loading--bg` class to the parent element containing `gds-loading`.

For a white variation, add the `gds-loading__dot--white` modifier class to `gds-loading__dot`.

<div class="gds-loading" style="position: relative; top: auto; left: 13px; margin-top: 0.8em">
    <div class="gds-loading__dot" style="position: relative; top: 0; left: 0"></div>
</div>

```html
<div class="gds-loading">
    <div class="gds-loading__dot"></div>
</div>
```

__Optional classes:__

- `gds-loading__dot--white`
- `gds-loading__dot--lg`
