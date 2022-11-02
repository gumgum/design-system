---
id: page-header
title: Page Header
sidebar_label: Page Header
section: organisms
---

The page-header component, prefixed by `gds-page-header`, is the standard fixed-position header component.

When using the page-header component, please add `-has-page-header` to the `<body>` tag for proper spacing.

```html
<header className="gds-page-header">
    <div className="gds-page-header__product-bar">
        <h6 className="gds-page-header__product-name">Product Name</h6>
        <img
            className="gds-page-header__logo gds-page-header__logo--expanded"
            src="https://c.gumgum.com/ads/com/gumgum/logo/logo-white.svg"
        />
    </div>
    <div className="gds-page-header__nav-bar">
        <div className="gds-page-header__primary-nav" data-gds-slide-nav-button>
            <button className="gds-page-header__menu">
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
            </button>
            <h4 className="gds-page-header__page-name" data-gds-page-name>Page Name</h4>
        </div>
        <div className="gds-page-header__breadcrumb-nav">
            <ul className="gds-page-header__breadcrumbs">
                <li className="gds-page-header__breadcrumbs-list-item">
                    <a className="gds-page-header__breadcrumbs-link" href="#">These</a>
                </li>
                <li
                    className="gds-page-header__breadcrumbs-list-item gds-page-header__breadcrumbs-list-item--has-menu"
                >
                    <div
                        className="gds-page-header__breadcrumbs-menu"
                        data-gds-bubble-button="[data-gds-bubble-menu='breadcrumb-menu']"
                        data-gds-active-className="gds-page-header__breadcrumbs-menu--active"
                    >
                        <div className="gds-page-header__breadcrumbs-menu-dots"></div>
                        <div
                            className="gds-bubble__menu gds-bubble__menu--left gds-bubble__menu--sm"
                            data-gds-bubble-menu="breadcrumb-menu"
                        >
                            <ul className="gds-bubble__menu-list">
                                <li className="gds-bubble__menu-list-item -ellipsis">
                                    <a className="gds-bubble__menu-list-link" href="#"
                                        >Item Name 1</a
                                    >
                                </li>
                                <li className="gds-bubble__menu-list-item -ellipsis">
                                    <a className="gds-bubble__menu-list-link" href="#"
                                        >Item Name 2</a
                                    >
                                </li>
                                <li className="gds-bubble__menu-list-item -ellipsis">
                                    <a className="gds-bubble__menu-list-link" href="#"
                                        >Item Name 3</a
                                    >
                                </li>
                                <li className="gds-bubble__menu-list-item -ellipsis">
                                    <a className="gds-bubble__menu-list-link" href="#"
                                        >Item Name 4</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a className="gds-page-header__breadcrumbs-link" href="#">Are</a>
                </li>
                <li className="gds-page-header__breadcrumbs-list-item">Breadcrumbs</li>
            </ul>
        </div>
        <div className="gds-page-header__secondary-nav">
            <div className="gds-avatar" data-gds-avatar>
                <div className="gds-avatar__image">
                    <img
                        src="https://assets.ggops.com/images/ken.png"
                        height="100%"
                        alt="Ken Weiner"
                    />
                </div>
                <div className="gds-avatar__menu">
                    <ul className="gds-avatar__menu-list">
                        <li
                            className="gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2"
                        >
                            Ken Weiner
                        </li>
                        <li className="gds-avatar__menu-list-divider"></li>
                        <li className="gds-avatar__menu-list-item -ellipsis">
                            <a className="gds-avatar__menu-list-link" href="#">Profile</a>
                        </li>
                        <li className="gds-avatar__menu-list-item -ellipsis">
                            <a className="gds-avatar__menu-list-link" href="#">Settings</a>
                        </li>
                        <li className="gds-avatar__menu-list-divider"></li>
                        <li className="gds-avatar__menu-list-item -ellipsis">
                            <a className="gds-avatar__menu-list-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="-clear-both"></div>
    </div>
</header>
```
