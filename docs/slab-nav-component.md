---
id: slab-nav-component
title: Slab Nav
sidebar_label: Slab Nav
section: molecules
---

The slab nav component, prefixed by `gds-slab-nav` is used when you need an especially bold signposting on your sub-page navigation. It can be displayed both horizontally and vertically, in light and dark modes, and both in standard and justified layouts. The navigation also supports the full set of sizes.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-slab-nav" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-card">
    <div class="gds-slab-nav">
        <ul class="gds-slab-nav__items">
            <li class="gds-slab-nav__item gds-slab-nav__item--active">
                <i class="gds-slab-nav__item-icon fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h4 class="gds-slab-nav__item-label">Nav Label</h4>
            </li>
            <li class="gds-slab-nav__item gds-slab-nav__item--secondary">
                <i class="gds-slab-nav__item-icon fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h4 class="gds-slab-nav__item-label">Nav Label</h4>
                <div class="gds-slab-nav__item-indicator">
                    <span class="gds-slab-nav__item-badge">23</span>
                </div>
            </li>
            <li class="gds-slab-nav__item gds-slab-nav__item--tertiary">
                <i class="gds-slab-nav__item-icon fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h4 class="gds-slab-nav__item-label">Nav Label</h4>
            </li>
            <li class="gds-slab-nav__item gds-slab-nav__item--quaternary">
                <i class="gds-slab-nav__item-icon fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h4 class="gds-slab-nav__item-label">Nav Label</h4>
                <div class="gds-slab-nav__item-indicator">
                    <i class="gds-slab-nav__item-warning fa fa-fw fa-exclamation-circle"></i>
                </div>
            </li>
        </ul>
    </div>
    <div class="gds-card__block -p-v-6 gds-flex gds-flex--justify-center gds-flex--align-center">
        <span class="gds-text--header-md">Content goes here</span>
    </div>
</div>
```

__Optional classes:__

- `gds-slab-nav--vertical`
- `gds-slab-nav--dark`
- `gds-slab-nav__items--vertical`
- `gds-slab-nav__items--justify`
- `gds-slab-nav__item--justify`
- `gds-slab-nav__item--xs`
- `gds-slab-nav__item--sm`
- `gds-slab-nav__item--lg`
- `gds-slab-nav__item--xl`
- `gds-slab-nav__item--vertical`
- `gds-slab-nav__item--active`
- `gds-slab-nav__item--secondary`
- `gds-slab-nav__item--tertiary`
- `gds-slab-nav__item--quaternary`
- `gds-slab-nav__item-icon--xs`
- `gds-slab-nav__item-icon--sm`
- `gds-slab-nav__item-icon--lg`
- `gds-slab-nav__item-icon--xl`
- `gds-slab-nav__item-label--xs`
- `gds-slab-nav__item-label--sm`
- `gds-slab-nav__item-label--lg`
- `gds-slab-nav__item-label--xl`
