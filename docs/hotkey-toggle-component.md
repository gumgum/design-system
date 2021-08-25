---
id: hotkey-toggle-component
title: Hotkey Toggle
sidebar_label: Hotkey Toggle
---

The hotkey toggle component, prefixed by `gds-hotkey-toggle`, is used in conjunction with hotkey atoms to create toggle-able, keyboard-enabled buttons.

The buttons come in two main flavors - standard and thumbnail styles. However, by using the options available in the hotkey atom and hotkey-toggle, and by rearranging the contents of the toggle elements you can find new permutations of this component to suit other needs.

The hotkey toggles come in several sizes, but it's important to note that none of the sizes include explicit heights or widths - just changes in font and padding sizes. If you want explicit control over element widths or heights it's recommended that you use the `gds-hotkey-toggle--block` modifier and wrap the toggle inside a container with more explicit sizing rules. Then use the size modifiers to find the internal sizing of the toggle elements that most closely coincides with the container sizing you've chosen.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-hotkey-toggle" target="_blank">Prototypes Page</a>
</p>

<div class="gds-hotkey-toggle" data-gds-hotkey-toggle='e' data-gds-hotkey-active="false">
    <div class="gds-hotkey -m-r-1">E</div>
    <span class="gds-hotkey-toggle__label -m-r-4">Denver Nuggets</span>
    <i class="gds-hotkey-toggle__icon fa fa-fw fa-check"></i>
</div>

```html
<div class="gds-hotkey-toggle" data-gds-hotkey-toggle='e' data-gds-hotkey-active="false">
    <div class="gds-hotkey -m-r-1">E</div>
    <span class="gds-hotkey-toggle__label -m-r-4">Denver Nuggets</span>
    <i class="gds-hotkey-toggle__icon fa fa-fw fa-check"></i>
</div>
```

__Optional classes:__

- `gds-hotkey-toggle--active`
- `gds-hotkey-toggle--block`
- `gds-hotkey-toggle--primary`
- `gds-hotkey-toggle--secondary`
- `gds-hotkey-toggle--success`
- `gds-hotkey-toggle--warning`
- `gds-hotkey-toggle--danger`
- `gds-hotkey-toggle--info`
- `gds-hotkey-toggle--xs`
- `gds-hotkey-toggle--sm`
- `gds-hotkey-toggle--lg`
- `gds-hotkey-toggle--xl`
- `gds-hotkey-toggle__label--xs`
- `gds-hotkey-toggle__label--sm`
- `gds-hotkey-toggle__label--lg`
- `gds-hotkey-toggle__label--xl`
- `gds-hotkey-toggle__icon--xs`
- `gds-hotkey-toggle__icon--sm`
- `gds-hotkey-toggle__icon--overlay`
- `gds-hotkey-toggle__icon--overlay-xs`
- `gds-hotkey-toggle__icon--overlay-sm`
- `gds-hotkey-toggle__icon--overlay-lg`
- `gds-hotkey-toggle__icon--overlay-xl`
- `gds-hotkey-toggle--dark-primary`
- `gds-hotkey-toggle--dark-secondary`
- `gds-hotkey-toggle--dark-tertiary`
- `gds-hotkey-toggle--dark-success`
- `gds-hotkey-toggle--dark-warning`
- `gds-hotkey-toggle--dark-danger`
- `gds-hotkey-toggle--dark-info`
