---
id: filters-component
title: Filters
sidebar_label: Filters
---

The filter component is an extension of the bubble menu component intended to house controls to filter content. The contents of this component can be customized based on the developer's requirements. Breakpoints for the housing are predefined, but internal inputs should be wrapped by columns to ensure they fill the space properly across all sizes. It can persist between sections of a single page app or be exclusive to a single page of a multi-page app. It uses the same data attributes as a standard bubble menu.

As with the [avatar](avatar-component.md) menu and [bubble](bubble-component.md) components, the button that invokes the filter menu should contain a `gds-bubble-button` attribute with a value that points at some form of selector for the menu it corresponds to.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-filters" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-filters" gds-bubble>
    <span class="gds-tooltip--bottom" data-tooltip="Filters">
        <div class="gds-filters__button" data-gds-bubble-button="#filters_menu" data-gds-active-class="gds-filters__button--active">
            <a class="gds-filters__button-link" href="#"><i class="btl bt-wrench -m-r-2"></i>Filters<span class="-m-l-2 gds-text--danger">5</span></a>
        </div>
    </span>
    <div class="gds-filters__menu" id="filters_menu" data-gds-bubble-menu="filters">
        <div class='gds-layout__row'>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4">Sentiment</label>
                    <select class="gds-form-group__select-input gds-form-group__select-input--sm">
                        <option>Positive</option>
                        <option>Neutral</option>
                        <option>Negative</option>
                    </select>
                </div>
            </div>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4">Keywords</label>
                    <div class="gds-form-group__input-group">
                        <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="Enter a keyword" />
                        <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-12 -m-b-1">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4">Location</label>
                    <div class="gds-form-group__input-group">
                        <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="Enter a location" />
                        <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4">Start Date</label>
                    <div class="gds-form-group__input-group">
                        <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="12/01/15" />
                        <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-calendar" ></i></button>
                    </div>
                </div>
            </div>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4">End Date</label>
                    <div class="gds-form-group__input-group">
                        <input class="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge" type="text" placeholder="12/01/16" />
                        <button class="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"><i class="fa fa-calendar" ></i></button>
                    </div>
                </div>
            </div>
            <div class="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-12 -m-b-2">
                <div class="gds-form-group">
                    <label class="gds-form-group__label -color-tx-lt-4 -none--md"></label>
                    <button class="gds-button gds-button--sm gds-button--secondary gds-button--block">Clear Filters</button>
                </div>
            </div>
            <div class="gds-divider gds-divider--collapsible -p-h-2 -m-b-2" data-gds-divider="0">
                <span class="gds-divider__label gds-form-group__label -color-tx-lt-4">Active Filters</span>
                <span class="gds-divider__line"></span>
                <span class="gds-divider__arrow" data-gds-arrow></span>
            </div>
            <div class="gds-segment -p-h-2" data-gds-segment="0">
                <div class="gds-tag gds-tag--green gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag">
                    <span class="gds-form-group__label -color-tx-white -m-b-0">Location:</span> Los Angeles<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary"></button>
                </div>
                <div class="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag">
                    <span class="gds-form-group__label -color-tx-white -m-b-0">Start Date:</span> 12/01/15<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary" ></button>
                </div>
                <div class="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag">
                    <span class="gds-form-group__label -color-tx-white -m-b-0">End Date:</span> 12/01/16<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary" ></button>
                </div>
                <div class="gds-tag gds-tag--blue gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag">
                    <span class="gds-form-group__label -color-tx-white -m-b-0">Keyword:</span> #cocacola<button class="gds-tag__button gds-tag__button--sm gds-tag__button--primary" ></button>
                </div>
            </div>
        </div>
    </div>
</div>
```

__Optional classes:__

- `gds-bubble__menu--menu-open`
