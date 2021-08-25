---
id: checklist-component
title: Checklist
sidebar_label: Checklist
---

The checklist component, prefixed by `gds-checklist`, denotes a list of tasks along with each task's current state of completion or incompletion.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-checklist" target="_blank">Prototypes Page</a>
</p>

```html
<ul class="gds-checklist">
    <li class="gds-checklist__item gds-checklist__item--sm gds-checklist__item--completed">
        <span class="gds-checklist__item-text">Milk</span>
    </li>
    <li class="gds-checklist__item gds-checklist__item--sm gds-checklist__item--completed">
        <span class="gds-checklist__item-text">Bread</span>
    </li>
    <li class="gds-checklist__item gds-checklist__item--sm gds-checklist__item--active">
        <span class="gds-checklist__item-text">Eggs</span>
    </li>
    <li class="gds-checklist__item gds-checklist__item--sm">
        <span class="gds-checklist__item-text">Waffles</span>
    </li>
</ul>
```

__Optional classes:__

- `gds-checklist__item--sm`
- `gds-checklist__item--lg`
- `gds-checklist__item--inverse`
- `gds-checklist__item--active`
- `gds-checklist__item--completed`
