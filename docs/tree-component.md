---
id: tree-component
title: Tree
sidebar_label: Tree
section: molecules
---

The tree component, prefixed by `gds-tree`, is used to display hierarchical information.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-tree" target="_blank">Prototypes Page</a>
</p>

```html
<ul>
    <li>
        <span class="gds-tree__link gds-tree__link--active gds-tree__link--secondary">
            Golden State Warriors<i class="gds-tree__status-icon fa fa-fw fa-caret-left"></i>
        </span>
        <ul class="gds-tree__sub-nav">
            <li class="gds-tree__sub-item">
                <span class="gds-tree__link gds-tree__link--active gds-tree__link--tertiary gds-tree__link--btn-options">
                    Nike<i class="gds-tree__status-icon fa fa-fw fa-caret-left"></i>
                    <button class="gds-tree__link-option">
                        <i class="fa fa-fw fa-trash"></i>
                    </button>
                </span>
                <ul class="gds-tree__sub-nav">
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--active gds-tree__link--primary">
                            Scoreboard LED<i class="gds-tree__status-icon fa fa-fw fa-caret-left"></i>
                            <button class="gds-tree__link-option">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
                        </span>
                    </li>
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--primary">
                            Basket Stanchion<i class="gds-tree__status-icon fa fa-fw fa-check -m-l-1"></i>
                            <button class="gds-tree__link-option">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
                        </span>
                    </li>
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--primary">
                            Arena LED<i class="gds-tree__status-icon fa fa-fw fa-check -m-l-1"></i>
                            <button class="gds-tree__link-option">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
                        </span>
                    </li>
                </ul>
            </li>
            <li class="gds-tree__sub-item">
                <span class="gds-tree__link gds-tree__link--tertiary">
                    Kia<i class="gds-tree__status-icon fa fa-check -m-l-1"></i>
                </span>
                <ul class="gds-tree__sub-nav">
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--primary">
                            Scoreboard LED<i class="gds-tree__status-icon fa fa-check -m-l-1"></i>
                        </span>
                    </li>
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--primary">
                            Basket Stanchion<i class="gds-tree__status-icon fa fa-check -m-l-1"></i>
                        </span>
                    </li>
                    <li class="gds-tree__sub-item">
                        <span class="gds-tree__link gds-tree__link--primary">
                            Arena LED<i class="gds-tree__status-icon fa fa-check -m-l-1"></i>
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```

__Optional classes:__

- `gds-tree--dark`
- `gds-tree__link--active`
- `gds-tree__link--primary`
- `gds-tree__link--secondary`
- `gds-tree__link--tertiary`
- `gds-tree__link--quaternary`
