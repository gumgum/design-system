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
<div class="gds-feedback gds-feedback--align-right -m-t-6" data-gds-feedback>
    <div class="gds-feedback__drawer gds-feedback__drawer--right" data-gds-feedback-bubble-drawer="1">
        <button type="button" class="gds-feedback__expander gds-circular-button gds-circular-button--sm gds-circular-button--gray"
                data-gds-feedback-expander-button="1"
                data-feedback="Gray clicked">
            <i class="gds-feedback__icon-closed fa fa-fw fa-comments"></i>
            <i class="gds-feedback__icon-open fa fa-fw fa-arrow-right"></i>
        </button>
        <ul class="gds-feedback__drawer-items">
            <li class="gds-feedback__drawer-item">
                <button type="button" class="gds-circular-button gds-circular-button--xs gds-circular-button--secondary gds-circular-button--tooltip"
                        data-gds-feedback-button="toggle"
                        data-feedback="Report Bug clicked"
                        data-tooltip="Report Bug">
                    <i class="fa fa-fw fa-bug"></i>
                </button>
            </li>
            <li class="gds-feedback__drawer-item">
                <button type="button" class="gds-circular-button gds-circular-button--xs gds-circular-button--warning gds-circular-button--tooltip"
                        data-gds-feedback-button="toggle"
                        data-feedback="Comment clicked"
                        data-tooltip="Comment">
                    <i class="fa fa-fw fa-commenting"></i>
                </button>
            </li>
            <li class="gds-feedback__drawer-item">
                <button type="button" class="gds-circular-button gds-circular-button--xs gds-circular-button--primary gds-circular-button--tooltip"
                        data-gds-feedback-button="toggle"
                        data-feedback="Rate clicked"
                        data-tooltip="Rate">
                    <i class="fa fa-fw fa-star-half-o"></i>
                </button>
            </li>
        </ul>
    </div>
</div>
```

__Optional classes:__

- `gds-feedback--align-right`
- `gds-feedback--fixed-right`
- `gds-feedback--align-left`
- `gds-feedback--fixed-left`
