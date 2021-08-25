---
id: lens-component
title: Lens
sidebar_label: Lens
---

The lens component, prefixed by `gds-lens`, is used for the creation and displaying of areas of interest with an image or other space.

It should be wrapped by a `gds-lens-wrapper` element and it should be adjacent to a `gds-lens-base` object (usually an `<img>` or block-level element) on which to project these areas of interest.

The src of the `gds-lens__image` should always match the src of the base image and the dimensions should be manually defined for both. Additionally, any left/top styles applied to the lens itself should be inverted on the image to ensure the highlighted area within the lens aligns correctly with the underlying base image.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-lens" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-lens-wrapper">
    <div class="gds-lens gds-lens--display" style="left: 100px; top: 150px; width: 250px; height: 250px">
        <div class="gds-lens__bracket gds-lens__bracket--t-l"></div>
        <div class="gds-lens__bracket gds-lens__bracket--t-r"></div>
        <div class="gds-lens__bracket gds-lens__bracket--b-l"></div>
        <div class="gds-lens__bracket gds-lens__bracket--b-r"></div>
        <div class="gds-lens__viewport">
            <img class="gds-lens__image" style="left: -100px; top: -150px; height: 640px; width: 640px;" src="https://cdn.mantii.com/photos/15259020_144916305990811_1121445729403928576_n.jpg" height="640" width="640"/>
        </div>
    </div>
    <img class="gds-lens-base" src="https://cdn.mantii.com/photos/15259020_144916305990811_1121445729403928576_n.jpg" height="640" width="640"/>
</div>
```

__Optional classes:__

- `gds-lens--active`
- `gds-lens__viewport--no-icon`
