---
id: slide-nav-component
title: Slide Nav
sidebar_label: Slide Nav
section: organisms
---

The slide-nav component, prefixed by `gds-slide-nav`, is the standard off-canvas navigation component. The slide-nav component works in combination with the `gds-page-header` component to provide accessible navigation on mobile, tablet and desktop devices.

**Note:** When including the `gds-slide-nav` component, you must include the `-has-slide-nav` class on the `<body>` tag to correctly offset the page content.

```html
<nav className="gds-slide-nav">
  <h2 className="gds-slide-nav__user-name gds-text--header-sm">Ken Weiner</h2>
  <div className="gds-slide-nav__group">
    <label className="gds-slide-nav__label">Main Menu</label>
    <ul className="gds-slide-nav__list">
      <li
        className="gds-slide-nav__list-item gds-slide-nav__list-item--primary gds-slide-nav__list-item--has-children"
      >
        <a
          className="gds-slide-nav__link gds-slide-nav__link--expandable"
          href="#"
          data-gds-expandable
          >Section One</a
        >
        <ul
          className="gds-slide-nav__list gds-slide-nav__list--nested"
          data-gds-expand-list
        >
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
        </ul>
      </li>
      <li
        className="gds-slide-nav__list-item gds-slide-nav__list-item--primary gds-slide-nav__list-item--has-children"
      >
        <a
          className="gds-slide-nav__link gds-slide-nav__link--expandable"
          href="#"
          data-gds-expandable
          >Section Two</a
        >
        <ul
          className="gds-slide-nav__list gds-slide-nav__list--nested"
          data-gds-expand-list
        >
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
          <li>
            <a href="#" className="gds-slide-nav__link" data-gds-nav-closer
              >Item</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
```
