---
id: corner-content-component
title: Corner Content
sidebar_label: Corner Content
section: organisms
---

The corner-content component, prefixed by `gds-corner-content`, is meant for secondary navigation that does not work in the context of a standard `gds-modal` component. To show the component, add the `gds-corner-content--shown` class to `gds-corner-content`. This component can be aligned to the right or left side of the user's window by toggling the `gds-corner-content--right` and `gds-corner-content--left` classes.

```html
<div class="gds-corner-content gds-corner-content--right gds-corner-content--shown">
    <div class="gds-corner-content__header" data-gds-corner-content>
        <h4 class="gds-corner-content__title">Corner content title</h4>
        <div class="gds-corner-content__controls">
            <button class="gds-corner-content__button"><i class="fa fa-arrows-v"></i></button>
        </div>
    </div>
    <div class="gds-corner-content__block">
        ...
    </div>
</div>
```

__Optional classes:__

- `gds-corner-content--shown`
- `gds-corner-content--top`
- `gds-corner-content--left`
- `gds-corner-content--right`
