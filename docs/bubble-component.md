---
id: bubble-component
title: Bubble
sidebar_label: Bubble
section: molecules
---

The bubble menu component is a component used to include a dropdown "bubble" menu on anything. The menu can be used in conjunction with elements like buttons and links by wrapping the menu and the target element with a `gds-bubble` element but it can also be implemented without the bubble "wrapper" by simply appending the `gds-bubble__menu` beneath the element in question. This will not always behave as intended unless the parent of both the menu and the target element are set to display inline or inline-block.

As with avatar menu and filter components, the button that invokes the bubble menu should contain a `gds-bubble-button` attribute with a value that points at some form of selector for the menu it corresponds to.
