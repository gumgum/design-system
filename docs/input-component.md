---
id: input-component
title: Input
sidebar_label: Input
section: molecules
---

All inputs should be wrapped in a standard `gds-form-group` element. The inside of the form group generally contains an input, a label, and if necessary, a hint or error text element.

By default, `gds-form-group` is a block element but you can change it to inline by using `gds-form-group--inline`. Note: this will not make the contents of the group inline, only the group as a whole.

Form groups can also have contextual modifiers to indicate different situations. For example, an error, or a successfully validated entry. These contextual states can be applied by adding `gds-form-group--danger`, `gds-form-group--warning` and `gds-form-group--success`.

Finally, you can disable input groups by applying the `gds-form-group--disabled` modifier to the entire group.
