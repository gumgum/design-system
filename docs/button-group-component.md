---
id: button-group-component
title: Button Group
sidebar_label: Button Group
---

The button-group component, prefixed by `gds-button-group`, is used for arranging button components into a group. For a toolbar made up of multiple button-groups, see the [gds-button-toolbar](button-toolbar-component.md) component documentation.

__Note:__ By using HTML comments in between 'display: inline-block' elements as in the example code below, the default spacing between the elements is eliminated and they render directly adjacent to each other.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-button-group" target="_blank">Prototypes Page</a>
</p>

```html
<div class="gds-button-group">
    <button type="button" class="gds-button-group__button gds-button--default">Default</button><!--
    --><button type="button" class="gds-button-group__button gds-button--primary">Primary</button><!--
    --><button type="button" class="gds-button-group__button gds-button--success">Success</button><!--
    --><button type="button" class="gds-button-group__button gds-button--info">Info</button><!--
    --><button type="button" class="gds-button-group__button gds-button--warning">Warning</button><!--
    --><button type="button" class="gds-button-group__button gds-button--danger">Danger</button><!--
    --><button type="button" class="gds-button-group__button gds-button--link">Link</button>
</div>
```

__Optional classes:__

- `gds-button-group--lg`
- `gds-button-group__button--lg`
- `gds-button-group--sm`
- `gds-button-group__button--sm`
- `gds-button-group--xs`
- `gds-button-group__button--xs`
- `gds-button-group--responsive`
- `gds-button-group__button--responsive`
