---
id: flexbox-utilities
title: Flexbox Utilities
sidebar_label: Flexbox
section: utilities
---

The flex component, prefixed by `gds-flex` is used to create extremely flexible 2-dimensional layouts.

Flexbox components can be either rows or columns, and modifiers used on this component control how children are spread, aligned, and sized across the primary and perpendicular axes. All modifiers come in universal and breakpoint specific variants. Flexbox is an extremely powerful tool and as such, the component has a high degree of granularity to its modifiers.

It is strongly encouraged that you refer to the prototypes page for this component to better understand the ways in which these modifiers interact with one another.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-flex" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-flex">
  <div className="gds-flex__item">Flex Item</div>
  <div className="gds-flex__item">Flex Item</div>
  <div className="gds-flex__item">Flex Item</div>
  <div className="gds-flex__item">Flex Item</div>
</div>
```

**Optional classes:**

- `gds-flex--direction-row`
- `gds-flex--direction-row-*`
- `gds-flex--direction-rowrev`
- `gds-flex--direction-rowrev-*`
- `gds-flex--direction-col`
- `gds-flex--direction-col-*`
- `gds-flex--direction-colrev`
- `gds-flex--direction-colrev-*`
- `gds-flex--wrap`
- `gds-flex--wrap-*`
- `gds-flex--wrap-no`
- `gds-flex--wrap-no-*`
- `gds-flex--wrap-rev`
- `gds-flex--wrap-rev-*`
- `gds-flex--justify-start`
- `gds-flex--justify-start-*`
- `gds-flex--justify-end`
- `gds-flex--justify-end-*`
- `gds-flex--justify-center`
- `gds-flex--justify-center-*`
- `gds-flex--justify-between`
- `gds-flex--justify-between-*`
- `gds-flex--justify-around`
- `gds-flex--justify-around-*`
- `gds-flex--align-start`
- `gds-flex--align-start-*`
- `gds-flex--align-end`
- `gds-flex--align-end-*`
- `gds-flex--align-center`
- `gds-flex--align-center-*`
- `gds-flex--align-baseline`
- `gds-flex--align-baseline-*`
- `gds-flex--align-stretch`
- `gds-flex--align-stretch-*`
- `gds-flex--content-start`
- `gds-flex--content-start-*`
- `gds-flex--content-end`
- `gds-flex--content-end-*`
- `gds-flex--content-center`
- `gds-flex--content-center-*`
- `gds-flex--content-between`
- `gds-flex--content-between-*`
- `gds-flex--content-around`
- `gds-flex--content-around-*`
- `gds-flex--content-stretch`
- `gds-flex--content-stretch-*`
