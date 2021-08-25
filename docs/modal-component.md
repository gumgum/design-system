---
id: modal-component
title: Modal
sidebar_label: Modal
section: molecules
---

The modal component, prefixed by `gds-modal`, is the standard pop-up element for accepting user input. For a transparent backdrop behind the modal window, `gds-modal` should be wrapped in a `gds-modal__overlay` element.

To show the modal, add `gds-modal--shown` to `gds-modal__overlay`.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-modal" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-modal__overlay gds-modal--shown" data-element="modal-example">
    <div class="gds-modal gds-layout__column--md-12">
        <form class="gds-modal__form">
            <div class="gds-modal__header">
                <h2 class="gds-modal__title gds-text--header-sm">Modal title goes here...</h2>
                <button class="gds-modal__close-button" data-toggle="modal"></button>
            </div>
            <div class="gds-modal__body">
                <p class="-m-b-3">Modal body content goes here.</p>
            </div>
            <div class="gds-modal__footer -text-right">
                <button class="gds-button gds-button--default gds-button--block-sm -m-b-3-sm -m-r-3">Cancel</button><button class="gds-button gds-button--primary gds-button--block-sm">Save Changes</button>
            </div>
        </form>
    </div>
</div>
```

__Optional classes:__

- `gds-modal--shown`
- `gds-modal--dark`
- `gds-modal__form`
- `gds-modal__header--dark`
- `gds-modal__footer--dark`
- `gds-modal__overlay`
