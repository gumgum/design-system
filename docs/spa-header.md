---
id: spa-header
title: Single Page Header
sidebar_label: Single Page Header
---

The spa-header component, prefixed by `gds-spa-header`, is an alternative, simplified header component for single-page applications.

When using the spa-header component, please add `-has-spa-header` to the `<body>` tag for proper spacing.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-spa-header" target="_blank">Prototypes Page</a>
</p>

```html
<header class="gds-spa-header">
    <div class="gds-spa-header__primary-nav">
        <div class="gds-spa-header__section gds-spa-header__section-icon">
            <a class="gds-spa-header__section-link" href="#back"><i class="btl bt-arrow-left"></i></a>
        </div>
        <div class="gds-spa-header__section gds-spa-header__section-icon">
            <img class="gds-spa-header__logo-mark" src="https://c.gumgum.com/ads/com/gumgum/logo/logo-mark.svg" />
        </div>
        <div class="gds-spa-header__section gds-spa-header__section--product">
            <h6 class="gds-page-header__product-name">Product Name</h6>
        </div>
    </div>
    <div class="gds-spa-header__secondary-nav">
        <div class="gds-spa-header__section gds-spa-header__section-icon">
            <a class="gds-spa-header__section-link" href="#search"><i class="btl bt-search"></i></a>
        </div>
        <div class="gds-spa-header__section gds-spa-header__section-icon">
            <a class="gds-spa-header__section-link" href="#alerts"><i class="btl bt-bell"></i></a>
        </div>
        <div class="gds-spa-header__section gds-spa-header__section-icon">
            <a class="gds-spa-header__section-link" href="#logout"><i class="btl bt-sign-out"></i></a>
        </div>
        <div class="gds-spa-header__section gds-spa-header__section--white">
            <div class="gds-avatar -m-l-2" data-gds-avatar>
                <div class="gds-avatar__image">
                    <img src="https://c.gumgum.com/ads/com/gumgum/documentation/avatars/avatar--default2.jpg" alt="User Name" height="100%" />
                </div>
                <div class="gds-avatar__menu">
                    <ul class="gds-avatar__menu-list">
                        <li class="gds-avatar__menu-list-item -ellipsis"><a class="gds-avatar__menu-list-link" href="#profile">Profile</a></li>
                        <li class="gds-avatar__menu-list-item -ellipsis"><a class="gds-avatar__menu-list-link" href="#settings">Settings</a></li>
                        <li class="gds-avatar__menu-list-divider"></li>
                        <li class="gds-avatar__menu-list-item -ellipsis"><a class="gds-avatar__menu-list-link" href="#logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
```
