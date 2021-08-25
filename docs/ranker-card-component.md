---
id: ranker-card-component
title: Ranker Card
sidebar_label: Ranker Card
---

The ranker-card component is used to display a set of image cards in a ranker order. The value of the rank, the type object, and the number of rankings, are all customizable.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-ranker-card" target="_blank">Prototypes Page</a>
</p>

```html
<ul class="gds-ranker-card -m-b-3 -m-b-2-md">
    <li class="gds-ranker-card__item">
        <div class="gds-ranker-card__data-wrapper">
            <span class="gds-ranker-card__number">1</span>
            <div class="gds-ranker-card__footer">
                <p class="gds-ranker-card__stats">1,321,121,392,129</p>
                <label class="gds-ranker-card__label">Impressions</label>
            </div>
        </div>
        <img class="gds-image" style="object-fit: cover" src="https://images.unsplash.com/photo-1469521669194-babb45599def?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
    </li>
    <li class="gds-ranker-card__item">
        <div class="gds-ranker-card__data-wrapper">
            <span class="gds-ranker-card__number">2</span>
            <div class="gds-ranker-card__footer">
                <p class="gds-ranker-card__stats">1,321,121,392,129</p>
                <label class="gds-ranker-card__label">Impressions</label>
            </div>
        </div>
        <img class="gds-image" style="object-fit: cover" src="https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
    </li>
    <li class="gds-ranker-card__item">
        <div class="gds-ranker-card__data-wrapper">
            <span class="gds-ranker-card__number">3</span>
            <div class="gds-ranker-card__footer">
                <p class="gds-ranker-card__stats">1,321,121,392,129</p>
                <label class="gds-ranker-card__label">Impressions</label>
            </div>
        </div>
        <img class="gds-image" style="object-fit: cover" src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
    </li>
    <li class="gds-ranker-card__item">
        <div class="gds-ranker-card__data-wrapper">
            <span class="gds-ranker-card__number">4</span>
            <div class="gds-ranker-card__footer">
                <p class="gds-ranker-card__stats">1,321,121,392,129</p>
                <label class="gds-ranker-card__label">Impressions</label>
            </div>
        </div>
        <img class="gds-image" style="object-fit: cover" src="https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
    </li>
</ul>
```

__Optional classes:__

- `gds-ranker-card--primary`
- `gds-ranker-card--secondary`
- `gds-ranker-card--tertiary`
- `gds-ranker-card--sm`
- `gds-ranker-card__number--sm`
- `gds-ranker-card__number--primary`
- `gds-ranker-card__number--secondary`
- `gds-ranker-card__number--tertiary`
