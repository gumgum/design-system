---
id: well-component
title: Well
sidebar_label: Well
section: atoms
---

The well component, prefixed by `gds-well`, can be used for alert messages or other user notifications.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-well" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-well -m-b-2">
    <p className="gds-well__text">Default well</p>
    <button className="gds-well__button"></button>
</div>
<div className="gds-well gds-well--success">
    <p className="gds-well__text">Success well</p>
    <button className="gds-well__button gds-well__button--success"></button>
</div>
```

**Optional classes:**

-   `gds-well--success`
-   `gds-well__button--success`
-   `gds-well--info`
-   `gds-well__button--info`
-   `gds-well--warning`
-   `gds-well__button--warning`
-   `gds-well--danger`
-   `gds-well__button--danger`
-   `gds-well--dark`
