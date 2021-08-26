---
id: ranker-component
title: Ranker
sidebar_label: Ranker
section: organisms
---

The ranker component is used to display a set of objects in a ranker order. The value of the rank, the type object, and the number of rankings, are all customizable. At smaller sizes, the module switches from a horizontal orientation to a vertical one.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-ranker" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-ranker">
    <ul class="gds-ranker__list">
        <li class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                <img class="gds-ranker__image" src="https://c.gumgum.com/ads/com/gumgum/vi/images/no_image.png" />
            </div>
            <div class="gds-ranker__item-number">1</div>
        </li><!--
        --><li class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                <img class="gds-ranker__image" src="https://c.gumgum.com/ads/com/gumgum/vi/images/no_image.png" />
            </div>
            <div class="gds-ranker__item-number">2</div>
        </li><!--
        --><li class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                <img class="gds-ranker__image" src="https://c.gumgum.com/ads/com/gumgum/vi/images/no_image.png" />
            </div>
            <div class="gds-ranker__item-number">3</div>
        </li><!--
        --><li class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                <img class="gds-ranker__image" src="https://c.gumgum.com/ads/com/gumgum/vi/images/no_image.png" />
            </div>
            <div class="gds-ranker__item-number">4</div>
        </li><!--
        --><li class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                <img class="gds-ranker__image" src="https://c.gumgum.com/ads/com/gumgum/vi/images/no_image.png" />
            </div>
            <div class="gds-ranker__item-number">5</div>
        </li>
    </ul>
    <div class="gds-ranker__connector"></div>
</div>
```

__Optional classes:__

- `gds-ranker--no-line`
- `gds-ranker--vertical`
- `gds-ranker--lg`
- `gds-ranker--xl`
- `gds-ranker__image--secondary`
- `gds-ranker__image--tertiary`
- `gds-ranker__image--lg`
- `gds-ranker__image--xl`
- `gds-ranker__item-number--secondary`
- `gds-ranker__item-number--tertiary`
- `gds-ranker__list--vertical`
- `gds-ranker__list--vertical-inverted`
- `gds-ranker__connector--inverted`
- `gds-ranker__connector--lg`
- `gds-ranker__connector--xl`
- `gds-ranker__connector--vertical`
- `gds-ranker__connector--vertical-lg`
- `gds-ranker__connector--vertical-xl`
- `gds-ranker__connector--vertical-inverted`
- `gds-ranker__item-label--secondary`
- `gds-ranker__item-label--tertiary`
- `gds-ranker__item-label--lg`
- `gds-ranker__item-label--xl`
- `gds-ranker__item-label--inverted`
- `gds-ranker__item-label--vertical`
- `gds-ranker__item-label--vertical-inverted`
- `gds-ranker__item--lg`
- `gds-ranker__item--xl`
- `gds-ranker__item--inverted`
- `gds-ranker__item--vertical`
- `gds-ranker__item--vertical-lg`
- `gds-ranker__item--vertical-xl`
- `gds-ranker__item--vertical-inverted`
- `gds-ranker__item-icon--lg`
- `gds-ranker__item-icon--xl`
- `gds-ranker__item-icon--vertical-lg`
- `gds-ranker__item-icon--vertical-xl`
- `gds-ranker__item-number--lg`
- `gds-ranker__item-number--xl`
- `gds-ranker__item-number--vertical`
- `gds-ranker__item-number--vertical-lg`
- `gds-ranker__item-number--vertical-xl`
