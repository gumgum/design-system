---
id: onboarder-component
title: Onboarder
sidebar_label: Onboarder
section: organisms
---

The onboarder component is used to give new users of a product a quick breakdown of all functionality on a given page. It should ideally be invoked via the `gds.onboarder.construct(data)` method where data is a JS object containing a property "steps" which is an array of objects containers a title, description, and a target. The target property should be a selector for an element on the page that the onboarder component will highlight and position itself around. Based on the position of the target element, the component will attempt to choose the appropriate arrow position modifier class. Ideally, this component will only be used one time per new user so a cookie or localStorage property should be set to prevent it from loading on subsequent visits.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-onboarder" target="_blank">Prototypes Page</a>
</p>

```html
<div
  className="gds-onboarder__overlay gds-onboarder--shown"
  data-gds-onboarder-container=""
>
  <div className="gds-onboarder gds-onboarder--t-l" data-gds-onboarder="">
    <div className="gds-onboarder__header">
      <span className="gds-onboarder__step-num" data-gds-onboarder-step-num=""
        >1</span
      >
      <h4
        className="gds-text--header-sm -m-b-3"
        data-gds-onboarder-step-name=""
      >
        Main navigation
      </h4>
    </div>
    <div className="gds-onboarder__body">
      <p className="gds-text--body-sm" data-gds-onboarder-body="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="gds-onboarder__footer">
      <button
        data-gds-onboarder-arrow="prev"
        className="gds-onboarder__button gds-onboarder__button--left -disabled -pointer-events--none"
      >
        <i className="fa fa-fw fa-caret-left"></i>
      </button>
      <div className="gds-onboarder__timeline-wrapper">
        <div className="gds-timeline" data-gds-timeline="">
          <ul className="gds-timeline__items">
            <li
              className="gds-timeline__item gds-timeline__item--active"
              data-gds-timeline-item="active"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <li
              className="gds-timeline__item"
              data-gds-timeline-item="inactive"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <li
              className="gds-timeline__item"
              data-gds-timeline-item="inactive"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <li
              className="gds-timeline__item"
              data-gds-timeline-item="inactive"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <li
              className="gds-timeline__item"
              data-gds-timeline-item="inactive"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <li
              className="gds-timeline__item"
              data-gds-timeline-item="inactive"
            >
              <div
                className="gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm"
              ></div>
            </li>
            <div
              className="gds-timeline__progress-wrapper gds-timeline__progress-wrapper--no-label gds-timeline__progress-wrapper--white gds-timeline__progress-wrapper--sm"
            >
              <div className="gds-timeline__progress-indicator"></div>
            </div>
          </ul>
        </div>
      </div>
      <button
        data-gds-onboarder-arrow="next"
        className="gds-onboarder__button gds-onboarder__button--right"
      >
        <i className="fa fa-fw fa-caret-right"></i>
      </button>
    </div>
    <button
      className="gds-onboarder__close"
      data-gds-onboarder-close-button=""
    ></button>
  </div>
  <div
    className="gds-onboarder__highlight"
    data-gds-onboarder-highlight=""
  ></div>
</div>
```

**Optional classes:**

- `gds-onboarder--t-l`
- `gds-onboarder--t-r`
- `gds-onboarder--b-l`
- `gds-onboarder--b-r`
