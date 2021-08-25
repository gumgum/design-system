---
id: refinery-component
title: Refinery
sidebar_label: Refinery
section: organisms
---

The refinery component is intended to house controls to filter content. The contents of this component can be customized based on the developer's requirements. Breakpoints for the housing are predefined, but internal inputs should be wrapped by columns to ensure they fill the space properly across all sizes. It can persist between sections of a single page app or be exclusive to a single page of a multi-page app.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-refinery" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-refinery" data-gds-refinery>
    <div class="gds-refinery__container">
        <div class="gds-refinery__menu">
            <h1 class="gds-text--header-xs -m-t-1 -float-left -color-tx-dk-5">Global Filters</h1>
            <div class="gds-form-group -m-t-1 -float-right" data-gds-form-group="0">
                <div class="gds-form-group__toggleswitch">
                    <span class="gds-form-group__label">Disable All</span>
                    <label class="gds-form-group__toggleswitch-label">
                        <input class="gds-form-group__toggleswitch-input" type="checkbox" value="" data-gds-toggle-filters>
                        <span class="gds-form-group__toggleswitch-indicator"></span>
                    </label>
                </div>
            </div>
            <div class="gds-divider -m-b-0">
                <span class="gds-divider__line"></span>
            </div>
            <div class="gds-layout__row">
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">Brands</label>
                        <div class="gds-search-select" data-gds-search-select="multi" data-gds-search-select-size="sm">
                            <div class="gds-search-select__control" data-gds-search-select-control="">
                                <input id="searcchselect-input-0" type="text" placeholder="Choose a State..." class="gds-search-select__input gds-search-select__input--sm" data-gds-search-select-input="" autocomplete="off">
                                <button class="gds-search-select__toggle-button" data-gds-search-select-toggle=""></button>
                            </div>
                            <div class="gds-search-select__tag-holder gds-search-select__tag-holder--bubble gds-search-select__tag-holder--bubble-sm" data-gds-search-select-tag-holder=""></div>
                            <div class="gds-search-select__menu" data-gds-search-select-menu="">
                                <ul class="gds-search-select__menu-items" data-gds-search-select-list="">
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="0">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Alaska
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="1">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Arizona
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="2">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Arkansas
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="3">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>California
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="4">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Connecticut
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="5">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Deleware
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="6">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>DC
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="7">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Florida
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="8">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Georgia
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="9">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Hawaii
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="10">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Idaho
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="11">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Illinois
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="12">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Indiana
                                    </li>
                                    <li class="gds-search-select__menu-item" data-gds-search-select-item="13">
                                        <label class="gds-search-select__checkbox">
                                            <input class="gds-search-select__checkbox-input" type="checkbox" value="">
                                            <span class="gds-search-select__checkbox-indicator"></span>
                                        </label>Iowa
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">Account Type</label>
                        <div class="gds-multi-select gds-multi-select--sm" data-gds-dropdown="">
                            <div class="gds-multi-select__button gds-multi-select__button--sm" data-gds-dropdown-button="">Multi-select</div>
                            <ul class="gds-multi-select__menu">
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Check All
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 1
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 2
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 3
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 4
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">Network</label>
                        <div class="gds-multi-select gds-multi-select--sm" data-gds-dropdown="">
                            <div class="gds-multi-select__button gds-multi-select__button--sm" data-gds-dropdown-button="">Multi-select</div>
                            <ul class="gds-multi-select__menu">
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Check All
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 1
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 2
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 3
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 4
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">Event</label>
                        <div class="gds-multi-select gds-multi-select--sm" data-gds-dropdown="">
                            <div class="gds-multi-select__button gds-multi-select__button--sm" data-gds-dropdown-button="">Multi-select</div>
                            <ul class="gds-multi-select__menu">
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Check All
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 1
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 2
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 3
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gds-multi-select__menu-item">
                                    <div class="gds-multi-select__menu-link">
                                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group="">
                                            <div class="gds-form-group__checkbox">
                                                <label class="gds-form-group__checkbox-label" data-gds-label="">
                                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input="">
                                                    <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option 4
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2-sm -m-b-2">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">Start Date</label>
                        <div class="gds-form-group__input-group">
                            <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="12/01/15">
                            <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-calendar"></i></button>
                        </div>
                    </div>
                </div>
                <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-3-sm -m-b-2">
                    <div class="gds-form-group">
                        <label class="gds-form-group__label">End Date</label>
                        <div class="gds-form-group__input-group">
                            <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="12/01/16">
                            <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-calendar"></i></button>
                        </div>
                    </div>
                </div>
                <div class="gds-divider gds-divider--collapsible -p-h-2 -m-b-2" data-gds-divider="10">
                    <span class="gds-divider__label gds-form-group__label">Active Filters</span>
                    <span class="gds-divider__line"></span>
                    <span class="gds-divider__arrow" data-gds-arrow=""></span>
                </div>
                <div class="gds-segment -p-h-2" data-gds-segment="10">
                    <div class="gds-tag gds-tag--green gds-tag--with-button-sm gds-tag--sm gds-button--block-sm">
                        <span class="gds-form-group__label -color-tx-white -m-b-0">Location:</span> Los Angeles<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary"></button>
                    </div>
                    <div class="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm">
                        <span class="gds-form-group__label -color-tx-white -m-b-0">Start Date:</span> 12/01/15<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary"></button>
                        </div>
                    <div class="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm">
                        <span class="gds-form-group__label -color-tx-white -m-b-0">End Date:</span> 12/01/16<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary"></button>
                    </div>
                    <div class="gds-tag gds-tag--blue gds-tag--with-button-sm gds-tag--sm gds-button--block-sm">
                        <span class="gds-form-group__label -color-tx-white -m-b-0">Keyword:</span> #cocacola<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary"></button>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" data-gds-refinery-tab class="gds-refinery__button gds-button gds-button--primary">
            <i class="gds-refinery__open-icon fa fa-angle-double-up -m-r-1"></i>
            <i class="gds-refinery__close-icon fa fa-angle-double-down -m-r-2"></i>Filters
            <span class="gds-badge gds-badge--danger-inverse">1</span>
        </button>
    </div>
</div>
```

__Optional classes:__

- `gds-refinery--menu-open`
- `gds-refinery--menu-disabled`
