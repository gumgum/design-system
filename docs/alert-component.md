---
id: alert-component
title: Alert
sidebar_label: Alert
---

The alert component, prefixed by `gds-alert`, is a standard pop-up element for displaying user feedback.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-alert" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-alert__overlay gds-alert--shown" data-gds-alert-overlay>
    <div class="gds-alert">
        <div class="gds-alert__header gds-alert__header--danger">
            <i class="gds-alert__icon fa fa-times-circle"></i>
            <h2 class="gds-alert__title">This is an alert</h2>
        </div>
        <div class="gds-alert__body">
            <p>Something has gone horribly wrong</p>
        </div>
        <div class="gds-alert__footer">
            <button class="gds-button gds-button--danger -p-h-4 -m-b-0">OK</button>
        </div>
    </div>
</div>
```

__Optional classes:__

- `gds-alert--shown`
- `gds-alert__header--primary`
- `gds-alert__header--secondary`
- `gds-alert__header--success`
- `gds-alert__header--info`
- `gds-alert__header--warning`
- `gds-alert__header--danger`
