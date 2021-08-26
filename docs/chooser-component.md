---
id: chooser-component
title: Chooser
sidebar_label: Chooser
section: molecules
---

The chooser component, prefixed by `gds-chooser` is used to select an active option from a set that is too large to be displayed inline via standard nav. The component is comprised of a set of buttons for traversing forward and backwards through an option set, and a central dropdown menu for selecting a specific option from the entire set.

<div class="gds-chooser" style="margin-top: 0.8em">
    <button class="gds-chooser__button gds-chooser__button--left"><i class="btl bt-fw bt-angle-left"></i></button>
    <div class="gds-chooser__console">
        <div class="gds-chooser__currentItem"><span class="gds-chooser__item-name">This is the current Item<i class="gds-chooser__item-icon fa fa-caret-right" aria-hidden="true"></i></span></div>
        <ul class="gds-chooser__menu">
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
        </ul>
    </div>
    <button class="gds-chooser__button gds-chooser__button--right"><i class="btl bt-fw bt-angle-right"></i></button>
</div>

```html
<div class="gds-chooser">
    <button class="gds-chooser__button gds-chooser__button--left"><i class="btl bt-fw bt-angle-left"></i></button>
    <div class="gds-chooser__console">
        <div class="gds-chooser__currentItem"><span class="gds-chooser__item-name">This is the current Item<i class="gds-chooser__item-icon fa fa-caret-right" aria-hidden="true"></i></span></div>
        <ul class="gds-chooser__menu">
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
            <li class="gds-chooser__menu-item"><a class="gds-chooser__menu-link">Link</a></li>
        </ul>
    </div>
    <button class="gds-chooser__button gds-chooser__button--right"><i class="btl bt-fw bt-angle-right"></i></button>
</div>
```

__Optional classes:__

- `gds-chooser--secondary`
- `gds-chooser--tertiary`
- `gds-chooser__menu--secondary`
- `gds-chooser__menu--tertiary`
