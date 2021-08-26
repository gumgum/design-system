---
id: table-component
title: Tables
sidebar_label: Tables
section: molecules
---

The table component is prefixed by `gds-table`. It is used to style standard `<table>` elements.

For a better experience on mobile, wrap the `gds-table` with a `gds-table--responsive` element. This allows the user to scroll through the table horizontally on their mobile device.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-table" target="_blank">Prototypes Page</a>
</p>

<div class="gds-table--responsive">
    <table class="gds-table">
        <thead>
            <tr class="gds-table__row">
                <th class="gds-table__header">#</th>
                <th class="gds-table__header -text-left">First Name</th>
                <th class="gds-table__header -text-left">Last Name</th>
                <th class="gds-table__header gds-table__header--selected -text-left">Username (selected)</th>
            </tr>
        </thead>
        <tbody>
            <tr class="gds-table__row">
                <td scope="row">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr class="gds-table__row">
                <td scope="row">2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr class="gds-table__row gds-table__row--selected">
                <td scope="row">3</td>
                <td>Selected Row</td>
                <td>tde Bird</td>
                <td>@twitter</td>
            </tr>
            <tr class="gds-table__row gds-table__row--disabled">
                <td scope="row">4</td>
                <td>Disabled Row</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<div class="gds-table--responsive">
    <table class="gds-table">
        <thead>
            <tr class="gds-table__row">
                <th class="gds-table__header">#</th>
                <th class="gds-table__header -text-left">First Name</th>
                <th class="gds-table__header -text-left">Last Name</th>
                <th class="gds-table__header gds-table__header--selected -text-left">Username (selected)</th>
            </tr>
        </thead>
        <tbody>
            <tr class="gds-table__row">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr class="gds-table__row">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr class="gds-table__row gds-table__row--selected">
                <th scope="row">3</th>
                <td>Selected Row</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr class="gds-table__row gds-table__row--disabled">
                <th scope="row">4</th>
                <td>Disabled Row</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </tbody>
    </table>
</div>
```
