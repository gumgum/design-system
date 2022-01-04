---
id: filters-component
title: Filters
sidebar_label: Filters
section: organisms
---

The filter component is an extension of the bubble menu component intended to house controls to filter content. The contents of this component can be customized based on the developer's requirements. Breakpoints for the housing are predefined, but internal inputs should be wrapped by columns to ensure they fill the space properly across all sizes. It can persist between sections of a single page app or be exclusive to a single page of a multi-page app. It uses the same data attributes as a standard bubble menu.

As with the [avatar](avatar-component.md) menu and [bubble](bubble-component.md) components, the button that invokes the filter menu should contain a `gds-bubble-button` attribute with a value that points at some form of selector for the menu it corresponds to.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-filters" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-filters" gds-bubble>
  <span className="gds-tooltip--bottom" data-tooltip="Filters">
    <div
      className="gds-filters__button"
      data-gds-bubble-button="#filters_menu"
      data-gds-active-className="gds-filters__button--active"
    >
      <a className="gds-filters__button-link" href="#"
        ><i className="btl bt-wrench -m-r-2"></i>Filters<span
          className="-m-l-2 gds-text--danger"
          >5</span
        ></a
      >
    </div>
  </span>
  <div
    className="gds-filters__menu"
    id="filters_menu"
    data-gds-bubble-menu="filters"
  >
    <div className="gds-layout__row">
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
      >
        <div className="gds-form-group">
          <label className="gds-form-group__label -color-tx-lt-4"
            >Sentiment</label
          >
          <select
            className="gds-form-group__select-input gds-form-group__select-input--sm"
          >
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </select>
        </div>
      </div>
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
      >
        <div className="gds-form-group">
          <label className="gds-form-group__label -color-tx-lt-4"
            >Keywords</label
          >
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
              type="text"
              placeholder="Enter a keyword"
            />
            <button
              className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-12 -m-b-1"
      >
        <div className="gds-form-group">
          <label className="gds-form-group__label -color-tx-lt-4"
            >Location</label
          >
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
              type="text"
              placeholder="Enter a location"
            />
            <button
              className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2"
      >
        <div className="gds-form-group">
          <label className="gds-form-group__label -color-tx-lt-4"
            >Start Date</label
          >
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
              type="text"
              placeholder="12/01/15"
            />
            <button
              className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
            >
              <i className="fa fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2"
      >
        <div className="gds-form-group">
          <label className="gds-form-group__label -color-tx-lt-4"
            >End Date</label
          >
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
              type="text"
              placeholder="12/01/16"
            />
            <button
              className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
            >
              <i className="fa fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-12 -m-b-2"
      >
        <div className="gds-form-group">
          <label
            className="gds-form-group__label -color-tx-lt-4 -none--md"
          ></label>
          <button
            className="gds-button gds-button--sm gds-button--secondary gds-button--block"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div
        className="gds-divider gds-divider--collapsible -p-h-2 -m-b-2"
        data-gds-divider="0"
      >
        <span
          className="gds-divider__label gds-form-group__label -color-tx-lt-4"
          >Active Filters</span
        >
        <span className="gds-divider__line"></span>
        <span className="gds-divider__arrow" data-gds-arrow></span>
      </div>
      <div className="gds-segment -p-h-2" data-gds-segment="0">
        <div
          className="gds-tag gds-tag--green gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag"
        >
          <span className="gds-form-group__label -color-tx-white -m-b-0"
            >Location:</span
          >
          Los Angeles<button
            className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
          ></button>
        </div>
        <div
          className="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag"
        >
          <span className="gds-form-group__label -color-tx-white -m-b-0"
            >Start Date:</span
          >
          12/01/15<button
            className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
          ></button>
        </div>
        <div
          className="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag"
        >
          <span className="gds-form-group__label -color-tx-white -m-b-0"
            >End Date:</span
          >
          12/01/16<button
            className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
          ></button>
        </div>
        <div
          className="gds-tag gds-tag--blue gds-tag--with-button-sm gds-tag--sm gds-button--block-sm -color-tx-white gds-bubble__menu--vi__tag"
        >
          <span className="gds-form-group__label -color-tx-white -m-b-0"
            >Keyword:</span
          >
          #cocacola<button
            className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
          ></button>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Optional classes:**

- `gds-bubble__menu--menu-open`
