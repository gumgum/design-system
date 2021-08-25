---
id: legend-component
title: Legend
sidebar_label: Legend
---

The `gds-legend` component is used to display the name, color, and potentially the value of data sets. It is generally meant to be paired with a chart or graph although other use cases may arise. Color values for each data set should be assigned via data attributes that correspond to predefined DS colors - including 4 levels of tint and shade for each color Other modifiers change the positioning and orientation of items, sizing, and the shape of color swatches.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-legend" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-legend">
    <ul class="gds-legend__items">
        <li class="gds-legend__item">
            <span class="gds-legend__swatch" data-gds-color="red"></span>
            <span class="gds-legend__label">Label</span>
        </li>
        <li class="gds-legend__item">
            <span class="gds-legend__swatch" data-gds-color="green"></span>
            <span class="gds-legend__label">Label</span>
        </li>
        <li class="gds-legend__item">
            <span class="gds-legend__swatch" data-gds-color="blue"></span>
            <span class="gds-legend__label">Label</span>
        </li>
        <li class="gds-legend__item">
            <span class="gds-legend__swatch" data-gds-color="gold"></span>
            <span class="gds-legend__label">Label</span>
        </li>
    </ul>
</div>
```

__Optional classes:__

- `gds-legend--overlay`
- `gds-legend--overlay-center`
- `gds-legend__items--stacked`
- `gds-legend__item--stacked`
- `gds-legend__value--md`
- `gds-legend__value--xs`
- `gds-legend__value--sm`
- `gds-legend__value--lg`
- `gds-legend__value--xl`
- `gds-legend__swatch--tip`
- `gds-legend__swatch--square`
- `data-gds-color=red`
- `data-gds-color=red-dk-1`
- `data-gds-color=red-dk-2`
- `data-gds-color=red-dk-3`
- `data-gds-color=red-dk-4`
- `data-gds-color=red-lt-1`
- `data-gds-color=red-lt-2`
- `data-gds-color=red-lt-3`
- `data-gds-color=red-lt-4`
- `data-gds-color=green`
- `data-gds-color=green-dk-1`
- `data-gds-color=green-dk-2`
- `data-gds-color=green-dk-3`
- `data-gds-color=green-dk-4`
- `data-gds-color=green-lt-1`
- `data-gds-color=green-lt-2`
- `data-gds-color=green-lt-3`
- `data-gds-color=green-lt-4`
- `data-gds-color=blue`
- `data-gds-color=blue-dk-1`
- `data-gds-color=blue-dk-2`
- `data-gds-color=blue-dk-3`
- `data-gds-color=blue-dk-4`
- `data-gds-color=blue-lt-1`
- `data-gds-color=blue-lt-2`
- `data-gds-color=blue-lt-3`
- `data-gds-color=blue-lt-4`
- `data-gds-color=gold`
- `data-gds-color=gold-dk-1`
- `data-gds-color=gold-dk-2`
- `data-gds-color=gold-dk-3`
- `data-gds-color=gold-dk-4`
- `data-gds-color=gold-lt-1`
- `data-gds-color=gold-lt-2`
- `data-gds-color=gold-lt-3`
- `data-gds-color=gold-lt-4`
- `data-gds-color=purple`
- `data-gds-color=purple-dk-1`
- `data-gds-color=purple-dk-2`
- `data-gds-color=purple-dk-3`
- `data-gds-color=purple-dk-4`
- `data-gds-color=purple-lt-1`
- `data-gds-color=purple-lt-2`
- `data-gds-color=purple-lt-3`
- `data-gds-color=purple-lt-4`
- `data-gds-color=dkgreen`
- `data-gds-color=dkgreen-dk-1`
- `data-gds-color=dkgreen-dk-2`
- `data-gds-color=dkgreen-dk-3`
- `data-gds-color=dkgreen-dk-4`
- `data-gds-color=dkgreen-lt-1`
- `data-gds-color=dkgreen-lt-2`
- `data-gds-color=dkgreen-lt-3`
- `data-gds-color=dkgreen-lt-4`
- `data-gds-color=orange`
- `data-gds-color=orange-dk-1`
- `data-gds-color=orange-dk-2`
- `data-gds-color=orange-dk-3`
- `data-gds-color=orange-dk-4`
- `data-gds-color=orange-lt-1`
- `data-gds-color=orange-lt-2`
- `data-gds-color=orange-lt-3`
- `data-gds-color=orange-lt-4`
