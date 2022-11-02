---
id: alert-component
title: Alert
sidebar_label: Alert
section: organisms
---

The alert component, prefixed by `gds-alert`, is a standard pop-up element for displaying user feedback.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-alert" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-alert__overlay gds-alert--shown" data-gds-alert-overlay>
    <div className="gds-alert">
        <div className="gds-alert__header gds-alert__header--danger">
            <i className="gds-alert__icon fa fa-times-circle"></i>
            <h2 className="gds-alert__title">This is an alert</h2>
        </div>
        <div className="gds-alert__body">
            <p>Something has gone horribly wrong</p>
        </div>
        <div className="gds-alert__footer">
            <button className="gds-button gds-button--danger -p-h-4 -m-b-0">OK</button>
        </div>
    </div>
</div>
```

**Optional classes:**

-   `gds-alert--shown`
-   `gds-alert__header--primary`
-   `gds-alert__header--secondary`
-   `gds-alert__header--success`
-   `gds-alert__header--info`
-   `gds-alert__header--warning`
-   `gds-alert__header--danger`
