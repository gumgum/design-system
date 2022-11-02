---
id: account-modal-component
title: Account Modal
sidebar_label: Account Modal
section: organisms
---

The account-modal component, prefixed by `gds-account-modal`, is a standard login window. This component is meant to be used on a page by itself.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-account-modal" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-account-modal gds-account-modal--logo">
    <div className="gds-account-modal__logo-product">Advertising</div>
    <div className="gds-account-modal__form-cap -m-t-3-sm -m-t-0">Dashboard</div>
    <form className="gds-form gds-account-modal__form gds-card -p-a-3">
        <div className="gds-form-group -m-b-1">
            <label className="gds-form-group__label">Email</label>
            <input
                className="gds-form-group__text-input"
                type="text"
                placeholder="user@gumgum.com"
            />
        </div>
        <div className="gds-form-group -m-b-2">
            <label className="gds-form-group__label">Password</label>
            <input
                className="gds-form-group__text-input"
                type="password"
                placeholder="password123"
            />
        </div>
        <div className="gds-form-group -m-b-2">
            <div className="gds-form-group__checkbox">
                <label className="gds-form-group__checkbox-label">
                    <input className="gds-form-group__checkbox-input" type="checkbox" value="" />
                    <span className="gds-form-group__checkbox-indicator"></span> Stay signed in
                </label>
            </div>
        </div>
        <button type="submit" className="gds-button gds-button--block gds-button--primary">
            Login
        </button>
    </form>
    <p className="gds-account-modal__extra-links">
        <a href="#" className="gds-text--link">Forgot your password?</a>
    </p>
</div>
```
