---
id: landing-pad-component
title: Landing Pad
sidebar_label: Landing Pad
section: molecules
---

The landing pad component, prefixed by `gds-landing-pad`, is a target zone for dragging and dropping items (such as files to be uploaded).

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-landing-pad" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-landing-pad">
    <input class="gds-landing-pad__input" type="file" />
    <div class="gds-landing-pad__icon">
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--1"></div>
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--2"></div>
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--3"></div>
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--4"></div>
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--5"></div>
        <div class="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--6"></div>
    </div>
    <p class="gds-landing-pad__text">Click or Drag Logo Here</p>
</div>
```

__Optional classes:__

- `gds-landing-pad--active`
- `gds-landing-pad__status`
- `gds-landing-pad__status--success`
- `gds-landing-pad__status--danger`
