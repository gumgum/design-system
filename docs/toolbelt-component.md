---
id: toolbelt-component
title: Toolbelt
sidebar_label: Toolbelt
---

The `gds-toolbelt` component is used to display a tool palette, similar in appearance to the menus from Photoshop or Illustrator.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-toolbelt" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-toolbelt" data-gds-toolbelt>
    <ul class="gds-toolbelt__items" data-gds-toolbelt-items>
        <li class="gds-toolbelt__item" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon" title="Lock or unlock selected asset" data-gds-toolbelt-action="toggle-lock">
                    <i class="btl bt-lock-open"></i>
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Lock</label>
        </li>
        <li class="gds-toolbelt__item" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin gds-toolbelt__item-icon--active" title="Pin asset left" data-gds-toolbelt-action="pin-left">
                    <i class="btl bt-push-pin"></i>
                </div>
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin" title="Pin asset bottom" data-gds-toolbelt-action="pin-center">
                    <i class="btl bt-push-pin"></i>
                </div>
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--pin" title="Pin asset right" data-gds-toolbelt-action="pin-right">
                    <i class="btl bt-push-pin"></i>
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Pin</label>
        </li>
        <li class="gds-toolbelt__item gds-toolbelt__item--stretch" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--move">
                    <i class="btl bt-long-arrow-left" title="Move asset horizontally"></i>
                    <div class="gds-form-group gds-toolbelt__item-form-group">
                        <div class="gds-form-group__input-group">
                            <input class="gds-toolbelt__item-input gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--dark gds-form-group__text-input--right-edge" type="number"/>
                            <button class="gds-toolbelt__item-input-button gds-button--dark gds-button gds-button--sm gds-button--button-cap -color-tx-white" data-gds-toolbelt-action="toggle-unit">px</button>
                        </div>
                    </div>
                </div>
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--move">
                    <i class="btl bt-long-arrow-up" title="Move asset vertically"></i>
                    <div class="gds-form-group gds-toolbelt__item-form-group">
                        <div class="gds-form-group__input-group">
                            <input class="gds-toolbelt__item-input gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--dark gds-form-group__text-input--right-edge" type="number"/>
                            <button class="gds-toolbelt__item-input-button gds-button gds-button--sm gds-button--dark gds-button--button-cap -color-tx-white" data-gds-toolbelt-action="toggle-unit">px</button>
                        </div>
                    </div>
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Move</label>
        </li>
        <li class="gds-toolbelt__item" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone gds-toolbelt__item-zone--layer">
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--layer" title="Move asset up one layer" data-gds-toolbelt-action="move-forward">
                    <i class="btl bt-angle-up"></i>
                </div>
                <div class="gds-toolbelt__item-icon gds-toolbelt__item-icon--layer" title="Move asset down one layer" data-gds-toolbelt-action="move-backward">
                    <i class="btl bt-angle-down"></i>
                </div>
                <div class="gds-toolbelt__item-layer-number" data-gds-toolbelt-item-number>5</div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Layer</label>
        </li>
        <li class="gds-toolbelt__item" title="Toggle horizontal tiling of the asset's background" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon" data-gds-toolbelt-action="toggle-tile">
                    <img class="gds-toolbelt__icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_tile--active.svg" alt="Tile asset" />
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Tile</label>
        </li>
        <li class="gds-toolbelt__item gds-toolbelt__item--expanded gds-toolbelt__item--with-options" title="Mask the asset with a shape" data-gds-toolbelt-item>
            <div class="gds-toolbelt__pouch gds-toolbelt__pouch--open" data-gds-toolbelt-pouch=0>
                <div class="gds-toolbelt__pouch-items">
                    <div class="gds-toolbelt__pouch-item">
                        <div class="gds-toolbelt__pouch-item-icon gds-toolbelt__pouch-item-icon--active">
                            <img class="gds-toolbelt__pouch-icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                        </div>
                    </div>
                    <div class="gds-toolbelt__pouch-item">
                        <div class="gds-toolbelt__pouch-item-icon">
                            <img class="gds-toolbelt__pouch-icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                        </div>
                    </div>
                    <div class="gds-toolbelt__pouch-item">
                        <div class="gds-toolbelt__pouch-item-icon">
                            <img class="gds-toolbelt__pouch-icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                        </div>
                    </div>
                    <div class="gds-toolbelt__pouch-item">
                        <div class="gds-toolbelt__pouch-item-icon">
                            <img class="gds-toolbelt__pouch-icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                        </div>
                    </div>
                    <div class="gds-toolbelt__pouch-item">
                        <div class="gds-toolbelt__pouch-item-icon">
                            <img class="gds-toolbelt__pouch-icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon" data-gds-toolbelt-action="toggle-pouch" data-gds-toolbelt-target-pouch="0">
                    <img class="gds-toolbelt__icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shapes.svg" alt="Apply shape to asset" />
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Shapes</label>
        </li>
        <li class="gds-toolbelt__item" title="Toggle drop shadow on the asset" data-gds-toolbelt-item>
            <div class="gds-toolbelt__item-zone">
                <div class="gds-toolbelt__item-icon" data-gds-toolbelt-action="toggle-shadow">
                    <img class="gds-toolbelt__icon-img" src="https://c.gumgum.com/ads/com/gumgum/documentation/images/icon_shadow--active.svg" alt="Apply shadow to asset" />
                </div>
            </div>
            <label class="gds-toolbelt__item-label gds-form-group__label -user-select--none -pointer-events--none">Shadow</label>
        </li>
    </ul>
</div>
```

__Optional classes:__

- `gds-toolbelt__item--with-options`
- `gds-toolbelt__item--disabled`
- `gds-toolbelt__item--stretch`
- `gds-toolbelt__item-icon--active`
- `gds-toolbelt__item`
- `gds-toolbelt__item-icon--expanded`
- `gds-toolbelt__pouch--open`
- `gds-toolbelt__pouch-item-icon--active`
