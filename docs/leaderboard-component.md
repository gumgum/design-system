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
<div class="gds-leaderboard">
    <div class="gds-leaderboard__topfive">
        <div class="gds-ranker gds-ranker--lg">
            <ul class="gds-ranker__list">
                <li class="gds-ranker__item">
                    <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                        <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                    </div>
                    <div class="gds-ranker__item-number gds-ranker__item-number--secondary">1<span class="gds-ranker__item-number-ordinal">th</span></div>
                </li>
                <li class="gds-ranker__item">
                    <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                        <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                    </div>
                    <div class="gds-ranker__item-number gds-ranker__item-number--secondary">2<span class="gds-ranker__item-number-ordinal">th</span></div>
                </li>
                <li class="gds-ranker__item">
                    <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                        <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                    </div>
                    <div class="gds-ranker__item-number gds-ranker__item-number--secondary">3<span class="gds-ranker__item-number-ordinal">th</span></div>
                </li>
                <li class="gds-ranker__item">
                    <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                        <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                    </div>
                    <div class="gds-ranker__item-number gds-ranker__item-number--secondary">4<span class="gds-ranker__item-number-ordinal">th</span></div>
                </li>
                <li class="gds-ranker__item">
                    <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                        <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                    </div>
                    <div class="gds-ranker__item-number gds-ranker__item-number--secondary">5<span class="gds-ranker__item-number-ordinal">th</span></div>
                </li>
            </ul>
            <div class="gds-ranker__connector"></div>
        </div>
    </div>
    <div class="gds-leaderboard__grid">
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                6
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                7
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                8
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                9
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                10
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                11
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                12
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                13
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                14
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                15
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                16
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                17
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                18
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                19
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                20
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                21
                <sup class="gds-ranker-ensign__number--sup">
                st
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                22
                <sup class="gds-ranker-ensign__number--sup">
                nd
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                23
                <sup class="gds-ranker-ensign__number--sup">
                rd
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                24
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                25
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                26
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                27
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                28
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                29
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
        <div class="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
            <img class="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--sm" src="https://assets.ggops.com/images/ken.png"/>
            <div class="gds-ranker-ensign__content">
                <span class="gds-ranker-ensign__label">Golden State<br/></span>
                <span class="gds-ranker-ensign__title">Warriors</span>
            </div>
            <span class="gds-ranker-ensign__number">
                30
                <sup class="gds-ranker-ensign__number--sup">
                th
                </sup>
            </span>
        </div>
    </div>
</div>
```
