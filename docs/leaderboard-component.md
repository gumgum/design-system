---
id: leaderboard-component
title: Leaderboard
sidebar_label: Leaderboard
section: organisms
---

The `gds-leaderboard` component is a combination of a large ranker component and a ranker grid component. It's used for displaying rankings of items with a hierarchical focus on the top 5 followed by any remaining items in a grid below. All variations of ranker, ranker-ensign, and ranker-grid are applicable to this component - simply use the existing respective modifiers as needed.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-leaderboard" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-leaderboard">
  <div className="gds-leaderboard__topfive">
    <div className="gds-ranker gds-ranker--lg">
      <ul className="gds-ranker__list">
        <li className="gds-ranker__item">
          <div
            className="gds-ranker__item-icon"
            data-tooltip="Brand Name goes here"
          >
            <img
              className="gds-ranker__image"
              src="https://assets.ggops.com/images/ken.png"
            />
          </div>
          <div
            className="gds-ranker__item-number gds-ranker__item-number--secondary"
          >
            1<span className="gds-ranker__item-number-ordinal">th</span>
          </div>
        </li>
        <li className="gds-ranker__item">
          <div
            className="gds-ranker__item-icon"
            data-tooltip="Brand Name goes here"
          >
            <img
              className="gds-ranker__image"
              src="https://assets.ggops.com/images/ken.png"
            />
          </div>
          <div
            className="gds-ranker__item-number gds-ranker__item-number--secondary"
          >
            2<span className="gds-ranker__item-number-ordinal">th</span>
          </div>
        </li>
        <li className="gds-ranker__item">
          <div
            className="gds-ranker__item-icon"
            data-tooltip="Brand Name goes here"
          >
            <img
              className="gds-ranker__image"
              src="https://assets.ggops.com/images/ken.png"
            />
          </div>
          <div
            className="gds-ranker__item-number gds-ranker__item-number--secondary"
          >
            3<span className="gds-ranker__item-number-ordinal">th</span>
          </div>
        </li>
        <li className="gds-ranker__item">
          <div
            className="gds-ranker__item-icon"
            data-tooltip="Brand Name goes here"
          >
            <img
              className="gds-ranker__image"
              src="https://assets.ggops.com/images/ken.png"
            />
          </div>
          <div
            className="gds-ranker__item-number gds-ranker__item-number--secondary"
          >
            4<span className="gds-ranker__item-number-ordinal">th</span>
          </div>
        </li>
        <li className="gds-ranker__item">
          <div
            className="gds-ranker__item-icon"
            data-tooltip="Brand Name goes here"
          >
            <img
              className="gds-ranker__image"
              src="https://assets.ggops.com/images/ken.png"
            />
          </div>
          <div
            className="gds-ranker__item-number gds-ranker__item-number--secondary"
          >
            5<span className="gds-ranker__item-number-ordinal">th</span>
          </div>
        </li>
      </ul>
      <div className="gds-ranker__connector"></div>
    </div>
  </div>
  <div className="gds-leaderboard__grid">
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        6
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        7
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        8
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        9
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        10
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        11
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        12
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        13
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        14
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        15
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        16
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        17
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        18
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        19
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        20
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        21
        <sup className="gds-ranker-ensign__number--sup"> st </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        22
        <sup className="gds-ranker-ensign__number--sup"> nd </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        23
        <sup className="gds-ranker-ensign__number--sup"> rd </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        24
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        25
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        26
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        27
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        28
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        29
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
    <div className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
      <img
        className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State<br /></span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number">
        30
        <sup className="gds-ranker-ensign__number--sup"> th </sup>
      </span>
    </div>
  </div>
</div>
```
