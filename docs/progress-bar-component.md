---
id: progress-bar-component
title: Progress Bar
sidebar_label: Progress Bar
---

The progress bar component, prefixed by `gds-progress-bar`, is a single element component. It accepts a `data-value` attribute with an integer value between `0` and `100`, which is used to style the component and indicate elapsed progress of an event.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-progress-bar" target="_blank">Prototypes Page</a>
</p>

<div class="gds-progress-bar -m-b-2" data-value="35"></div>
<div class="gds-progress-bar -m-b-2 gds-progress-bar--sm" data-value="42"></div>
<div class="gds-progress-bar -m-b-2 gds-progress-bar--lg" data-value="53"></div>
<div class="gds-progress-bar gds-progress-bar--striped-primary gds-progress-bar--animated" data-value="55"></div>

```html
<div class="gds-progress-bar -m-b-2" data-value="35"></div>
<div class="gds-progress-bar -m-b-2 gds-progress-bar--sm" data-value="42"></div>
<div class="gds-progress-bar -m-b-2 gds-progress-bar--lg" data-value="53"></div>
<div class="gds-progress-bar gds-progress-bar--striped-primary gds-progress-bar--animated" data-value="55"></div>
```

__Optional classes:__

- `gds-progress-bar--lg`
- `gds-progress-bar--sm`
- `gds-progress-bar--xs`
- `gds-progress-bar--striped-primary`
- `gds-progress-bar--secondary`
- `gds-progress-bar--striped-secondary`
- `gds-progress-bar--animated`
- `gds-progress-bar--value-colors`
