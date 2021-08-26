---
id: ribbon-component
title: Ribbon
sidebar_label: Ribbon
section: organisms
---

The `gds-ribbon` component is used for displaying and choosing from a set of icon-based tools. Its most common use case is for web based visual IDEs where a user would be expected to manipulate elements in a workspace using a common set of tools. Tools on the ribbon can be nested within expandable menus or simply toggled on/off directly.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-ribbon" target="_blank">Prototypes Page</a>
</p>

```html
<ul class="gds-ribbon -m-t-6" data-gds-ribbon="">
    <li class="gds-ribbon__item gds-ribbon__item--expandable" data-gds-ribbon-item="">
        <button class="gds-ribbon__button gds-ribbon__button--expandable gds-ribbon__button--active" data-gds-ribbon-expander-button="1" data-gds-base-class="gds-ribbon__button-icon fa fa-fw fa-thumb-tack" data-tooltip="Pinning (P)">
            <i class="gds-ribbon__button-icon fa fa-fw fa-thumb-tack fa-rotate-90" aria-hidden="true"></i>
        </button>
        <div class="gds-ribbon__bubble-menu gds-ribbon__bubble-menu--open" data-gds-ribbon-bubble-menu="1">
            <ul class="gds-ribbon__bubble-menu-list">
                <li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <button class="gds-ribbon__button gds-ribbon__button--active" data-gds-ribbon-button="toggle" data-gds-callback-class="fa-rotate-90" data-tooltip="Pin Left">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-thumb-tack fa-rotate-90" aria-hidden="true"></i>
                    </button>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <button class="gds-ribbon__button" data-gds-ribbon-button="toggle" data-gds-callback-class="" data-tooltip="Pin Center">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-thumb-tack" aria-hidden="true"></i>
                    </button>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <button class="gds-ribbon__button" data-gds-ribbon-button="toggle" data-gds-callback-class="fa-rotate-270" data-tooltip="Pin Right">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-thumb-tack fa-rotate-270" aria-hidden="true"></i>
                    </button>
                </li>
            </ul>
        </div>
    </li>
    <li class="gds-ribbon__item gds-ribbon__item--expandable" data-gds-ribbon-item="">
        <button class="gds-ribbon__button gds-ribbon__button--expandable" data-gds-ribbon-expander-button="3" data-tooltip="Movement (M)">
            <i data-gds-ribbon-button-icon="" class="gds-ribbon__button-icon fa fa-fw fa-arrows" aria-hidden="true"></i>
        </button>
        <div class="gds-ribbon__bubble-menu" data-gds-ribbon-bubble-menu="3">
            <ul class="gds-ribbon__bubble-menu-list">
                <li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__icon-wrapper">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-arrows-h" aria-hidden="true"></i>
                    </div>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__form-group">
                        <input class="gds-ribbon__text-input" data-gds-ribbon-input maxlength="4" type="text" placeholder="" value="32">
                    </div>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__form-group">
                        <select class="gds-ribbon__select-input">
                            <option>px</option>
                            <option>%</option>
                        </select>
                    </div>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__icon-wrapper">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-arrows-v" aria-hidden="true"></i>
                    </div>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__form-group">
                        <input class="gds-ribbon__text-input" maxlength="4" type="text" placeholder="" value="32">
                    </div>
                </li>
            </ul>
        </div>
    </li>
    <li class="gds-ribbon__item gds-ribbon__item--expandable" data-gds-ribbon-item="">
        <button class="gds-ribbon__button gds-ribbon__button--expandable" data-gds-ribbon-expander-button="4" data-tooltip="Layers (L)">
            <i data-gds-ribbon-button-icon="" class="gds-ribbon__button-icon fa fa-fw fa-sort" aria-hidden="true"></i>
        </button>
        <div class="gds-ribbon__bubble-menu" data-gds-ribbon-bubble-menu="4">
            <ul class="gds-ribbon__bubble-menu-list">
                <li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <button class="gds-ribbon__button" data-gds-ribbon-button="" data-gds-ribbon-button-no-active="">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-caret-down" aria-hidden="true"></i>
                    </button>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <div class="gds-ribbon__form-group">
                        <input class="gds-ribbon__text-input" maxlength="4" type="text" placeholder="" value="1">
                    </div>
                </li><li class="gds-ribbon__bubble-menu-item" data-gds-ribbon-bubble-menu-item="">
                    <button class="gds-ribbon__button" data-gds-ribbon-button="" data-gds-ribbon-button-no-active="">
                        <i class="gds-ribbon__button-icon fa fa-fw fa-caret-up" aria-hidden="true"></i>
                    </button>
                </li>
            </ul>
        </div>
    </li>
</ul>
```

__Optional classes:__

- `gds-ribbon--vertical-left`
- `gds-ribbon--vertical-right`
- `gds-ribbon--white`