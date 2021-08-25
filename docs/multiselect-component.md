---
id: multiselect-component
title: Multiselect
sidebar_label: Multiselect
section: molecules
---

The multi-select component, prefixed by `gds-multi-select`, is a dropdown menu for selecting multiple options. To open the menu, add the `gds-button-dropdown--active` class to `gds-multi-select`.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-multi-select" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-multi-select" data-gds-dropdown>
    <div class="gds-multi-select__button" data-gds-dropdown-button>Multi-select</div>
    <ul class="gds-multi-select__menu">
        <li class="gds-multi-select__menu-item">
            <div class="gds-multi-select__menu-link">
                <div class="gds-form-group gds-multi-select__option" data-gds-form-group>
                    <div class="gds-form-group__checkbox">
                        <label class="gds-form-group__checkbox-label" data-gds-label>
                            <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input>
                            <span class="gds-form-group__checkbox-indicator"></span>Check All
                        </label>
                    </div>
                </div>
            </div>
        </li>
        <li class="gds-button-dropdown__divider"></li>
        <li class="gds-multi-select__menu-item">
            <div class="gds-multi-select__menu-link gds-multi-select__menu-link--collapsable" data-gds-nested-dropdown>
                <div class="gds-form-group gds-multi-select__option" data-gds-form-group>
                    <div class="gds-form-group__checkbox">
                        <label class="gds-form-group__checkbox-label" data-gds-label>
                            <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input>
                            <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option
                        </label>
                    </div>
                </div>
                <div class="gds-multi-select__sub-menu" data-gds-nested-menu>
                    <div class="gds-multi-select__menu-link">
                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group>
                            <div class="gds-form-group__checkbox">
                                <label class="gds-form-group__checkbox-label" data-gds-label>
                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input>
                                    <span class="gds-form-group__checkbox-indicator"></span>Sub-Menu Checkbox Option
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="gds-multi-select__menu-link">
                        <div class="gds-form-group gds-multi-select__option" data-gds-form-group>
                            <div class="gds-form-group__checkbox">
                                <label class="gds-form-group__checkbox-label" data-gds-label>
                                    <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input>
                                    <span class="gds-form-group__checkbox-indicator"></span>Sub-Menu Checkbox Option
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="gds-button-dropdown__divider"></li>
        <li class="gds-multi-select__menu-item">
            <div class="gds-multi-select__menu-link">
                <div class="gds-form-group gds-multi-select__option" data-gds-form-group>
                    <div class="gds-form-group__checkbox">
                        <label class="gds-form-group__checkbox-label" data-gds-label>
                            <input class="gds-form-group__checkbox-input" type="checkbox" value="" data-gds-input>
                            <span class="gds-form-group__checkbox-indicator"></span>Checkbox Option
                        </label>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
```

__Optional classes:__

- `gds-multi-select--sm`
- `gds-multi-select--xs`
- `gds-multi-select__button--sm`
- `gds-multi-select__button--xs`
