---
id: slide-nav-component
title: Slide Nav
sidebar_label: Slide Nav
section: organisms
---

The slide-nav component, prefixed by `gds-slide-nav`, is the standard off-canvas navigation component. The slide-nav component works in combination with the `gds-page-header` component to provide accessible navigation on mobile, tablet and desktop devices.

__Note:__ When including the `gds-slide-nav` component, you must include the `-has-slide-nav` class on the `<body>` tag to correctly offset the page content.

```html
<nav class="gds-slide-nav">
    <h2 class="gds-slide-nav__user-name gds-text--header-sm">Ken Weiner</h2>
    <div class="gds-slide-nav__group">
        <label class="gds-slide-nav__label">Main Menu</label>
        <ul class="gds-slide-nav__list">
            <li class="gds-slide-nav__list-item gds-slide-nav__list-item--primary gds-slide-nav__list-item--has-children">
                <a class="gds-slide-nav__link gds-slide-nav__link--expandable" href="#" data-gds-expandable>Section One</a>
                <ul class="gds-slide-nav__list gds-slide-nav__list--nested" data-gds-expand-list>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                </ul>
            </li>
            <li class="gds-slide-nav__list-item gds-slide-nav__list-item--primary gds-slide-nav__list-item--has-children">
                <a class="gds-slide-nav__link gds-slide-nav__link--expandable" href="#" data-gds-expandable>Section Two</a>
                <ul class="gds-slide-nav__list gds-slide-nav__list--nested" data-gds-expand-list>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                    <li><a href="#" class="gds-slide-nav__link" data-gds-nav-closer>Item</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
```
