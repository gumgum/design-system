---
id: search-select-component
title: Search Select
sidebar_label: Search Select
---

The Search Select component, prefixed by `gds-search-select`, is a combination of a text input, select input, and multi-select component. It has two modes: single and multi select. The text input is used to narrow down the set of dropdown choices associated with the input.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-search-select" target="_blank">Prototypes Page</a>
</p>

```html
<form class="gds-form">
    <div class="gds-form-group" data-gds-form-group>
        <label class="gds-form-group__label" for="searcchselect-input-0">Multi-Value Search Select</label>
        <div class="gds-search-select gds-search-select--open">
            <div class="gds-search-select__control" data-gds-search-select-control>
                <div class="gds-search-select__tag-indicator gds-search-select__tag-indicator--sm gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-tag-indicator=""><span>5 Selected</span><button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                <input id="searcchselect-input-0" type="text" placeholder="Choose a State..." class="gds-search-select__input gds-search-select__input--sm gds-search-select__input--has-tag-sm" data-gds-search-select-input autocomplete="off"/>
                <button class="gds-search-select__toggle-button" data-gds-search-select-toggle></button>
                <small class="gds-search-select__text-help">This is some hint text</small>
            </div>
            <div class="gds-search-select__tag-holder gds-search-select__tag-holder--bubble gds-search-select__tag-holder--bubble-sm gds-search-select__tag-holder--bubble-active" data-gds-search-select-tag-holder>
                <div class="gds-search-select__tag-overflow">
                    <div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">Arkansas<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                    <div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">California<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                    <div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">Mississippi<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                    <div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">Montana<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                    <div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">Wyoming<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>
                </div>
            </div>
            <div class="gds-search-select__menu" data-gds-search-select-menu>
                <ul class="gds-search-select__menu-items" data-gds-search-select-list>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="0">Alaska</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="1">Arizona</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="2">Arkansas</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="3">California</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="4">Colorado</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="5">Connecticut</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="6">Deleware</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="7">DC</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="8">Florida</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="9">Georgia</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="10">Hawaii</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="11">Idaho</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="12">Illinois</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="13">Indiana</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="14">Iowa</li>
                    <li class="gds-search-select__menu-item" data-gds-search-select-item="15">Kansas</li>
                </ul>
            </div>
        </div>
    </div>
</form>
```

__Optional classes:__

- `gds-search-select--success`
- `gds-search-select--warning`
- `gds-search-select--danger`
- `gds-search-select__input--sm`
- `gds-search-select__input--has-tag`
- `gds-search-select__input--has-help`
- `gds-search-select__input--has-tag-sm`
- `gds-search-select--open`
- `gds-search-select__tag-indicator--sm`
- `gds-search-select__tag-holder--bubble`
- `gds-search-select__tag-holder--bubble-sm`
- `gds-search-select__tag-holder--bubble-active`
- `gds-search-select__clear--sm`
