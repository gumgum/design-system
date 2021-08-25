---
id: button-toolbar-component
title: Button Toolbar
sidebar_label: Button Toolbar
---

The button-toolbar component, prefixed by gds-button-toolbar, is used to combine multiple button-groups into a cohesive toolbar.

__Note:__ By using HTML comments in between 'display:inline-block' elements as in the example code below, the default spacing between the elements is eliminated and they render directly adjacent to each other.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-button-toolbar" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-button-toolbar">
    <div class="gds-button-group gds-button-group--md">
        <button type="button" class="gds-button-group__button gds-button--default">Default</button><!--
        --><button type="button" class="gds-button-group__button gds-button--primary">Primary</button><!--
        --><button type="button" class="gds-button-group__button gds-button--success">Success</button>
    </div>
    <div class="gds-button-group gds-button-group--md">
        <button type="button" class="gds-button-group__button gds-button--info">Info</button><!--
        --><button type="button" class="gds-button-group__button gds-button--warning">Warning</button>
    </div>
    <div class="gds-button-group gds-button-group--md">
        <button type="button" class="gds-button-group__button gds-button--danger">Danger</button>
    </div>
</div>
```
