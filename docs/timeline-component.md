---
id: timeline-component
title: Timeline
sidebar_label: Timeline
---

The timeline component, prefixed by `gds-timeline`, is used to indicate the number of completed steps in a given procedure. Add the modifier class `gds-timeline__item--active` to `gds-timeline__item` to show the current step the user is on.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-timeline" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-timeline" data-gds-timeline>
    <ul class="gds-timeline__items">
        <li class="gds-timeline__item gds-timeline__item--completed" data-gds-timeline-item="completed">
            <div class="gds-timeline__item-label">Step 1</div>
            <div class="gds-timeline__item-icon"></div>
        </li>
        <li class="gds-timeline__item gds-timeline__item--active" data-gds-timeline-item="active">
            <div class="gds-timeline__item-label">Step 2</div>
            <div class="gds-timeline__item-icon"></div>
        </li>
        <li class="gds-timeline__item" data-gds-timeline-item="inactive">
            <div class="gds-timeline__item-label">Step 3</div>
            <div class="gds-timeline__item-icon"></div>
        </li>
        <li class="gds-timeline__item" data-gds-timeline-item="inactive">
            <div class="gds-timeline__item-label">Step 4</div>
            <div class="gds-timeline__item-icon"></div>
        </li>
        <div class="gds-timeline__progress-wrapper">
            <div class="gds-timeline__progress-indicator"></div>
        </div>
    </ul>
</div>
```
