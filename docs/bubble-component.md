---
id: bubble-component
title: Bubble
sidebar_label: Bubble
section: molecules
---

The bubble menu component is a component used to include a dropdown "bubble" menu on anything. The menu can be used in conjunction with elements like buttons and links by wrapping the menu and the target element with a `gds-bubble` element but it can also be implemented without the bubble "wrapper" by simply appending the `gds-bubble__menu` beneath the element in question. This will not always behave as intended unless the parent of both the menu and the target element are set to display inline or inline-block.

As with avatar menu and filter components, the button that invokes the bubble menu should contain a `gds-bubble-button` attribute with a value that points at some form of selector for the menu it corresponds to.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-bubble" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-bubble -m-b-6" data-gds-bubble>
    <div class="gds-button gds-button--outline gds-button--xs" data-gds-bubble-button="[data-gds-bubble-menu='example']"><i class="fa fa-fw fa-ellipsis-h" aria-hidden="true"></i></div>
    <div class="gds-bubble__menu gds-bubble__menu gds-bubble__menu--menu-open  gds-bubble__menu--offset-sm" data-gds-bubble-menu>
        <ul class="gds-bubble__menu-list" data-gds-bubble-menu="example">
            <li class="gds-bubble__menu-list-item -ellipsis"><a class="gds-bubble__menu-list-link" href="#">Alert 1</a></li>
            <li class="gds-bubble__menu-list-item -ellipsis"><a class="gds-bubble__menu-list-link" href="#">Alert 2</a></li>
            <li class="gds-bubble__menu-list-divider"></li>
            <li class="gds-bubble__menu-list-item -ellipsis"><a class="gds-bubble__menu-list-link" href="#">Clear Alerts</a></li>
        </ul>
    </div>
</div>
```

__Optional classes:__

- `gds-bubble__menu--offset-xs`
- `gds-bubble__menu--offset-sm`
- `gds-bubble__menu--offset-md`
- `gds-bubble__menu--offset-lg`
- `gds-bubble__menu--offset-xl`
- `gds-bubble__menu--menu-open`
- `gds-bubble__menu--dark`
- `gds-bubble__menu-list-item--dark`
- `gds-bubble__menu-list-link--dark`
- `gds-bubble__menu-list--dark`
- `gds-bubble__menu-list-divider--dark`
