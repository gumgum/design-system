---
id: feedback-component
title: Feedback
sidebar_label: Feedback
section: organisms
---

The `gds-feedback` component is used for displaying and choosing from a set of user-feedback options.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-feedback" target="_blank">Prototypes Page</a>
</p>

```html
<div
  className="gds-feedback gds-feedback--align-right -m-t-6"
  data-gds-feedback
>
  <div
    className="gds-feedback__drawer gds-feedback__drawer--right"
    data-gds-feedback-bubble-drawer="1"
  >
    <button
      type="button"
      className="gds-feedback__expander gds-circular-button gds-circular-button--sm gds-circular-button--gray"
      data-gds-feedback-expander-button="1"
      data-feedback="Gray clicked"
    >
      <i className="gds-feedback__icon-closed fa fa-fw fa-comments"></i>
      <i className="gds-feedback__icon-open fa fa-fw fa-arrow-right"></i>
    </button>
    <ul className="gds-feedback__drawer-items">
      <li className="gds-feedback__drawer-item">
        <button
          type="button"
          className="gds-circular-button gds-circular-button--xs gds-circular-button--secondary gds-circular-button--tooltip"
          data-gds-feedback-button="toggle"
          data-feedback="Report Bug clicked"
          data-tooltip="Report Bug"
        >
          <i className="fa fa-fw fa-bug"></i>
        </button>
      </li>
      <li className="gds-feedback__drawer-item">
        <button
          type="button"
          className="gds-circular-button gds-circular-button--xs gds-circular-button--warning gds-circular-button--tooltip"
          data-gds-feedback-button="toggle"
          data-feedback="Comment clicked"
          data-tooltip="Comment"
        >
          <i className="fa fa-fw fa-commenting"></i>
        </button>
      </li>
      <li className="gds-feedback__drawer-item">
        <button
          type="button"
          className="gds-circular-button gds-circular-button--xs gds-circular-button--primary gds-circular-button--tooltip"
          data-gds-feedback-button="toggle"
          data-feedback="Rate clicked"
          data-tooltip="Rate"
        >
          <i className="fa fa-fw fa-star-half-o"></i>
        </button>
      </li>
    </ul>
  </div>
</div>
```

**Optional classes:**

- `gds-feedback--align-right`
- `gds-feedback--fixed-right`
- `gds-feedback--align-left`
- `gds-feedback--fixed-left`
