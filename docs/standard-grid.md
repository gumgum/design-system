---
id: standard-grid
title: Standard Grid
sidebar_label: Standard Grid
section: subatomic
---

The layout component, prefixed with `gds-layout`, is used for centering containers and for responsive grid columns. The grid system works exactly like Twitter Bootstrap's, with columns automatically stacking at mobile widths.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-layout" target="_blank">Prototypes Page</a>
</p>

<div className="gds-layout__container">
    <div className="gds-layout__row">
        <div className="gds-layout__column--md-4">
            <p>Left column</p>
        </div>
        <div className="gds-layout__column--md-4">
            <p>Center column</p>
        </div>
        <div className="gds-layout__column--md-4">
            <p>Right column</p>
        </div>
    </div>
</div>

```html
<div className="gds-layout__container">
    <div className="gds-layout__row">
        <div className="gds-layout__column--md-4">
            <p>Left column</p>
        </div>
        <div className="gds-layout__column--md-4">
            <p>Center column</p>
        </div>
        <div className="gds-layout__column--md-4">
            <p>Right column</p>
        </div>
    </div>
</div>
```
