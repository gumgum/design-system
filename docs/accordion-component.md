---
id: accordion-component
title: Accordion
sidebar_label: Accordion
---

The accordion component, prefixed by `gds-accordion`, is a collapsible container for holding related elements. Add `gds-accordion__item--active` to the `gds-accordion__item` to open the drawer.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-accordion" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-accordion" data-gds-accordion>
    <ul class="gds-accordion-list">
        <li class="gds-accordion__item gds-accordion__item--active" data-gds-accordion-item>
            <h4 class="gds-accordion__item-title" data-gds-accordion-title>Lists
                <div class="gds-badge">32</div>
            </h4>
            <i class="gds-accordion__item-icon"></i>
            <ul class="gds-accordion__child-items">
                <li class="gds-accordion__child-item">
                    <h4 class="gds-accordion__child-item-title">Ricardo Vega
                        <div class="gds-badge gds-badge--dark">32</div>
                    </h4>
                </li>
                <li class="gds-accordion__child-item gds-accordion__item" data-gds-accordion-item>
                    <h4 class="gds-accordion__child-item-title gds-accordion__item-title" data-gds-accordion-title>David Valdez
                        <div class="gds-badge gds-badge--dark">32</div>
                    </h4>
                    <i class="gds-accordion__child-item-icon gds-accordion__item-icon"></i>
                    <ul class="gds-accordion__child-items">
                        <li class="gds-accordion__child-item">
                            <h4 class="gds-accordion__child-item-title">Ricardo Vega
                                <div class="gds-badge gds-badge--dark">32</div>
                            </h4>
                        </li>
                        <li class="gds-accordion__child-item gds-accordion__item" data-gds-accordion-item>
                            <h4 class="gds-accordion__child-item-title gds-accordion__item-title" data-gds-accordion-title>David Valdez
                                <div class="gds-badge gds-badge--dark">32</div>
                            </h4>
                            <i class="gds-accordion__child-item-icon gds-accordion__item-icon"></i>
                            <ul class="gds-accordion__child-items">
                                <li class="gds-accordion__child-item">
                                    <h4 class="gds-accordion__child-item-title">Ricardo Vega
                                        <div class="gds-badge gds-badge--dark">32</div>
                                    </h4>
                                </li>
                                <li class="gds-accordion__child-item">
                                    <h4 class="gds-accordion__child-item-title">David Valdez
                                        <div class="gds-badge gds-badge--dark">32</div>
                                    </h4>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="gds-accordion__child-item">
                    <h4 class="gds-accordion__child-item-title">Christopher Clarke
                        <div class="gds-badge gds-badge--dark">32</div>
                    </h4>
                </li>
                <li class="gds-accordion__child-item">
                    <h4 class="gds-accordion__child-item-title">Ricardo Vega
                        <div class="gds-badge gds-badge--dark">32</div>
                    </h4>
                </li>
                <li class="gds-accordion__child-item">
                    <h4 class="gds-accordion__child-item-title">David Valdez
                        <div class="gds-badge gds-badge--dark">32</div>
                    </h4>
                </li>
            </ul>
        </li>
        <li class="gds-accordion__item" data-gds-accordion-item>
            <h4 class="gds-accordion__item-title" data-gds-accordion-title>Controls</h4>
            <i class="gds-accordion__item-icon"></i>
        </li>
        <li class="gds-accordion__item" data-gds-accordion-item>
            <h4 class="gds-accordion__item-title" data-gds-accordion-title>Tables</h4>
            <i class="gds-accordion__item-icon"></i>
        </li>
    </ul>
</div>
```

__Optional classes:__

- `gds-accordion__item-title--sm`
- `gds-accordion__child-item-title--sm`
- `gds-accordion__item-icon--sm`
- `gds-accordion--white`
- `gds-accordion__item-title--primary`
- `gds-accordion--dark`
- `gds-accordion__item--dark`
- `gds-accordion__child-item--dark`
- `gds-accordion__child-items--dark`
- `gds-accordion__item--primary`
- `gds-accordion__item--secondary`
- `gds-accordion__item--tertiary`
- `gds-accordion__item--quaternary`
- `gds-accordion__item-title--primary`
- `gds-accordion__item-title--secondary`
- `gds-accordion__item-title--tertiary`
- `gds-accordion__item-title--quaternary`
