---
id: keyboard-shortcuts-component
title: Keyboard Shortcuts
sidebar_label: Keyboard Shortcuts
section: molecules
---

The keyboard shortcuts component, prefixed by `gds-keyboard-shortcuts`, is used to display currently available keyboard shortcuts. This component is hidden by default. To show the component, add `gds-keyboard-shortcuts--shown` to `gds-keyboard-shortcuts`.

This component should always include a "Don't show again" button that can be used to permanently hide the component from view by the current user. This setting should be toggle-able from the user's profile or settings page.

```html
<div class="gds-keyboard-shortcuts">
    <label class="gds-keyboard-shortcuts__label">Keyboard Shortcuts</label>
    <ul class="-block">
        <li class="-block"><span class="gds-keyboard-shortcuts__trigger">a</span>Main Menu</li>
        <li class="-block"><span class="gds-keyboard-shortcuts__trigger">s</span>Search</li>
    </ul>
    <button class="gds-button gds-button--xs gds-button--block gds-button--primary -m-t-1">Got it, don't show again</button>
</div>
```

__Optional classes:__

- `gds-keyboard-shortcuts--shown`
