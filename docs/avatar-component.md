---
id: avatar-component
title: Avatar
sidebar_label: Avatar
---

The avatar component, prefixed by `gds-avatar`, can display a user's photo, a brand's logo, or a flag icon for internationalization. The avatar can include a dropdown menu, which is meant to be shown when the avatar is clicked on. To show the dropdown menu, add the `gds-avatar--menu-open` class to `gds-avatar`. As with bubble menu and filter components, the button that invokes the avatar menu should contain a `gds-bubble-button` attribute with a value that points at some form of selector for the menu it corresponds to.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-avatar" target="_blank">Prototypes Page</a>
</p>

<div class="gds-avatar">
    <div class="gds-avatar__image" data-gds-bubble-button="[data-gds-bubble-menu='avatar']" data-gds-active-class="gds-avatar__image--active">
        <img src="https://assets.ggops.com/images/ken.png" height="100%" alt="Ken Weiner" />
    </div>
    <div class="gds-avatar__menu" data-gds-bubble-menu="avatar">
        <ul class="gds-avatar__menu-list">
            <li class="gds-avatar__menu-list-item -ellipsis -p-h-3 -p-v-2">Ken Weiner</li>
            <li class="gds-avatar__menu-list-divider"></li>
            <li class="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer class="gds-avatar__menu-list-link" href="#">Profile</a></li>
            <li class="gds-avatar__menu-list-item -ellipsis" data-gds-bubble-closer ><a class="gds-avatar__menu-list-link" href="#">Settings</a></li>
            <li class="gds-avatar__menu-list-divider"></li>
            <li class="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer class="gds-avatar__menu-list-link" href="#">Logout</a></li>
        </ul>
    </div>
</div>

```html
<div class="gds-avatar">
    <div class="gds-avatar__image" data-gds-bubble-button="[data-gds-bubble-menu='avatar']" data-gds-active-class="gds-avatar__image--active">
        <img src="https://assets.ggops.com/images/ken.png" height="100%" alt="Ken Weiner" />
    </div>
    <div class="gds-avatar__menu" data-gds-bubble-menu="avatar">
        <ul class="gds-avatar__menu-list">
            <li class="gds-avatar__menu-list-item -ellipsis -p-h-3 -p-v-2">Ken Weiner</li>
            <li class="gds-avatar__menu-list-divider"></li>
            <li class="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer class="gds-avatar__menu-list-link" href="#">Profile</a></li>
            <li class="gds-avatar__menu-list-item -ellipsis" data-gds-bubble-closer ><a class="gds-avatar__menu-list-link" href="#">Settings</a></li>
            <li class="gds-avatar__menu-list-divider"></li>
            <li class="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer class="gds-avatar__menu-list-link" href="#">Logout</a></li>
        </ul>
    </div>
</div>
```

__Optional classes:__

- `gds-bubble__menu--menu-open`
- `gds-avatar__image--active`
- `gds-avatar__image--dark`
- `gds-avatar__menu--dark`
- `gds-avatar__menu-list--dark`
- `gds-avatar__menu-list-divider--dark`
- `gds-avatar__menu-list-item--dark`
- `gds-avatar__menu-list-link--dark`
