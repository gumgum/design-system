---
id: toolbelt-component
title: Toolbelt
sidebar_label: Toolbelt
section: organisms
---

The `gds-toolbelt` component is used to display a tool palette, similar in appearance to the menus from Photoshop or Illustrator.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-toolbelt" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-toolbelt" data-gds-toolbelt>
  <ul className="gds-toolbelt__items" data-gds-toolbelt-items>
    <li className="gds-toolbelt__item" data-gds-toolbelt-item>
      <div className="gds-toolbelt__item-zone">
        <div
          className="gds-toolbelt__item-icon"
          title="Lock or unlock selected asset"
          data-gds-toolbelt-action="toggle-lock"
        >
          <i className="btl bt-lock-open"></i>
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Lock</label
      >
    </li>
    <li className="gds-toolbelt__item" data-gds-toolbelt-item>
      <div className="gds-toolbelt__item-zone">
        <div
          className="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin gds-toolbelt__item-icon--active"
          title="Pin asset left"
          data-gds-toolbelt-action="pin-left"
        >
          <i className="btl bt-push-pin"></i>
        </div>
        <div
          className="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin"
          title="Pin asset bottom"
          data-gds-toolbelt-action="pin-center"
        >
          <i className="btl bt-push-pin"></i>
        </div>
        <div
          className="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin"
          title="Pin asset right"
          data-gds-toolbelt-action="pin-right"
        >
          <i className="btl bt-push-pin"></i>
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Pin</label
      >
    </li>
    <li
      className="gds-toolbelt__item gds-toolbelt__item--stretch"
      data-gds-toolbelt-item
    >
      <div className="gds-toolbelt__item-zone">
        <div className="gds-toolbelt__item-icon gds-toolbelt__item-icon--move">
          <i
            className="btl bt-long-arrow-left"
            title="Move asset horizontally"
          ></i>
          <div className="gds-form-group gds-toolbelt__item-form-group">
            <div className="gds-form-group__input-group">
              <input
                className="gds-toolbelt__item-input gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--dark gds-form-group__text-input--right-edge"
                type="number"
              />
              <button
                className="gds-toolbelt__item-input-button gds-button--dark gds-button gds-button--sm gds-button--button-cap -color-tx-white"
                data-gds-toolbelt-action="toggle-unit"
              >
                px
              </button>
            </div>
          </div>
        </div>
        <div className="gds-toolbelt__item-icon gds-toolbelt__item-icon--move">
          <i className="btl bt-long-arrow-up" title="Move asset vertically"></i>
          <div className="gds-form-group gds-toolbelt__item-form-group">
            <div className="gds-form-group__input-group">
              <input
                className="gds-toolbelt__item-input gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--dark gds-form-group__text-input--right-edge"
                type="number"
              />
              <button
                className="gds-toolbelt__item-input-button gds-button gds-button--sm gds-button--dark gds-button--button-cap -color-tx-white"
                data-gds-toolbelt-action="toggle-unit"
              >
                px
              </button>
            </div>
          </div>
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Move</label
      >
    </li>
    <li className="gds-toolbelt__item" data-gds-toolbelt-item>
      <div className="gds-toolbelt__item-zone gds-toolbelt__item-zone--layer">
        <div
          className="gds-toolbelt__item-icon gds-toolbelt__item-icon--layer"
          title="Move asset up one layer"
          data-gds-toolbelt-action="move-forward"
        >
          <i className="btl bt-angle-up"></i>
        </div>
        <div
          className="gds-toolbelt__item-icon gds-toolbelt__item-icon--layer"
          title="Move asset down one layer"
          data-gds-toolbelt-action="move-backward"
        >
          <i className="btl bt-angle-down"></i>
        </div>
        <div
          className="gds-toolbelt__item-layer-number"
          data-gds-toolbelt-item-number
        >
          5
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Layer</label
      >
    </li>
    <li
      className="gds-toolbelt__item"
      title="Toggle horizontal tiling of the asset's background"
      data-gds-toolbelt-item
    >
      <div className="gds-toolbelt__item-zone">
        <div
          className="gds-toolbelt__item-icon"
          data-gds-toolbelt-action="toggle-tile"
        >
          <img
            className="gds-toolbelt__icon-img"
            src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_tile--active.svg"
            alt="Tile asset"
          />
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Tile</label
      >
    </li>
    <li
      className="gds-toolbelt__item gds-toolbelt__item--expanded gds-toolbelt__item--with-options"
      title="Mask the asset with a shape"
      data-gds-toolbelt-item
    >
      <div
        className="gds-toolbelt__pouch gds-toolbelt__pouch--open"
        data-gds-toolbelt-pouch="0"
      >
        <div className="gds-toolbelt__pouch-items">
          <div className="gds-toolbelt__pouch-item">
            <div
              className="gds-toolbelt__pouch-item-icon gds-toolbelt__pouch-item-icon--active"
            >
              <img
                className="gds-toolbelt__pouch-icon-img"
                src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
                alt="Apply shape to asset"
              />
            </div>
          </div>
          <div className="gds-toolbelt__pouch-item">
            <div className="gds-toolbelt__pouch-item-icon">
              <img
                className="gds-toolbelt__pouch-icon-img"
                src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
                alt="Apply shape to asset"
              />
            </div>
          </div>
          <div className="gds-toolbelt__pouch-item">
            <div className="gds-toolbelt__pouch-item-icon">
              <img
                className="gds-toolbelt__pouch-icon-img"
                src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
                alt="Apply shape to asset"
              />
            </div>
          </div>
          <div className="gds-toolbelt__pouch-item">
            <div className="gds-toolbelt__pouch-item-icon">
              <img
                className="gds-toolbelt__pouch-icon-img"
                src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
                alt="Apply shape to asset"
              />
            </div>
          </div>
          <div className="gds-toolbelt__pouch-item">
            <div className="gds-toolbelt__pouch-item-icon">
              <img
                className="gds-toolbelt__pouch-icon-img"
                src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
                alt="Apply shape to asset"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="gds-toolbelt__item-zone">
        <div
          className="gds-toolbelt__item-icon"
          data-gds-toolbelt-action="toggle-pouch"
          data-gds-toolbelt-target-pouch="0"
        >
          <img
            className="gds-toolbelt__icon-img"
            src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg"
            alt="Apply shape to asset"
          />
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Shapes</label
      >
    </li>
    <li
      className="gds-toolbelt__item"
      title="Toggle drop shadow on the asset"
      data-gds-toolbelt-item
    >
      <div className="gds-toolbelt__item-zone">
        <div
          className="gds-toolbelt__item-icon"
          data-gds-toolbelt-action="toggle-shadow"
        >
          <img
            className="gds-toolbelt__icon-img"
            src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shadow--active.svg"
            alt="Apply shadow to asset"
          />
        </div>
      </div>
      <label
        className="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none"
        >Shadow</label
      >
    </li>
  </ul>
</div>
```

**Optional classes:**

- `gds-toolbelt__item--with-options`
- `gds-toolbelt__item--disabled`
- `gds-toolbelt__item--stretch`
- `gds-toolbelt__item-icon--active`
- `gds-toolbelt__item`
- `gds-toolbelt__item-icon--expanded`
- `gds-toolbelt__pouch--open`
- `gds-toolbelt__pouch-item-icon--active`
