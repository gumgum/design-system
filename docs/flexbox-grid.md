---
id: flexbox-grid
title: Flexbox Grid
sidebar_label: Flexbox Grid
section: subatomic
---

The Flexbox Grid component, prefixed by `gds-flex-grid`, allows you to create a flexible grid of items that remain the same height as their siblings.

The item classes indicate how many items should flow across in each row before wrapping. 1-6 items are supported at desktop width, 1-3 columns are supported at tablet width, and 1-2 columns are supported at mobile width. To make the contents of an item take up the full item height, use `gds-flex-grid__item--full-height`.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-flex-grid" target="_blank">Prototypes Page</a>
</p>

<div className="gds-flex-grid__container">
    <div className="gds-flex-grid__row">
        <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-1 gds-flex-grid__item--mobile-1 -m-b-3">
            <div className="gds-flex-grid__row">
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                    <div className="gds-card gds-flex-grid__item--full-height">
                        <div className="gds-card__block -p-a-3">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                    <div className="gds-card gds-flex-grid__item--full-height">
                        <div className="gds-card__block -p-a-3">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3-xs">
                    <div className="gds-card gds-flex-grid__item--full-height">
                        <div className="gds-card__block -p-a-3">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1">
                    <div className="gds-card gds-flex-grid__item--full-height">
                        <div className="gds-card__block -p-a-3">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-1 gds-flex-grid__item--mobile-1 -m-b-3">
            <div className="gds-card gds-flex-grid__item--full-height">
                <div className="gds-card__block -p-a-3">
                    <p>Content</p>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div className="gds-flex-grid__container">
  <div className="gds-flex-grid__row">
    <div
      className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-1 gds-flex-grid__item--mobile-1 -m-b-3"
    >
      <div className="gds-flex-grid__row">
        <div
          className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3"
        >
          <div className="gds-card gds-flex-grid__item--full-height">
            <div className="gds-card__block -p-a-3">
              <p>Content</p>
            </div>
          </div>
        </div>
        <div
          className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3"
        >
          <div className="gds-card gds-flex-grid__item--full-height">
            <div className="gds-card__block -p-a-3">
              <p>Content</p>
            </div>
          </div>
        </div>
        <div
          className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3-xs"
        >
          <div className="gds-card gds-flex-grid__item--full-height">
            <div className="gds-card__block -p-a-3">
              <p>Content</p>
            </div>
          </div>
        </div>
        <div
          className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1"
        >
          <div className="gds-card gds-flex-grid__item--full-height">
            <div className="gds-card__block -p-a-3">
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="gds-flex-grid__item gds-flex-grid__item--desktop-2 gds-flex-grid__item--tablet-1 gds-flex-grid__item--mobile-1 -m-b-3"
    >
      <div className="gds-card gds-flex-grid__item--full-height">
        <div className="gds-card__block -p-a-3">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>
</div>
```
