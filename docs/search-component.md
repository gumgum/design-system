---
id: search-component
title: Search
sidebar_label: Search
section: organisms
---

The search component, prefixed by `gds-search`, is a centered global search input. The search component is hidden by default. Add the modifier class `gds-search--shown` to `gds-search` to show the search input.

For asynchronous live search with typeahead suggestions, use a standard input without a button cap, along with the `gds-search__typeahead` list of typeahead results. For a simple synchronous search without typeahead results, use a button-capped input so that the user can click the button or press their Enter key to perform the search and navigate to a list of search results.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-search" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-search" data-gds-search>
  <div className="gds-search__input-holder" data-gds-search-input-holder>
    <div className="gds-form-group gds-search__form-group">
      <div className="gds-form-group__text-input--button-cap">
        <input
          className="gds-form-group__text-input"
          type="text"
          placeholder="Search..."
          data-gds-search-input=""
        />
        <i className="gds-form-group__text-input-icon btl bt-search"></i>
      </div>
    </div>
    <ul className="gds-search__typeahead">
      <li
        className="gds-search__typeahead-item gds-search__typeahead-item--selected"
        data-gds-typeahead-index="0"
        data-gds-typahead-selected="true"
      >
        <a href="#alabama">Alabama - Selected</a>
      </li>
      <li className="gds-search__typeahead-item" data-gds-typeahead-index="1">
        <a href="#alabama">Alaska</a>
      </li>
      <li className="gds-search__typeahead-item" data-gds-typeahead-index="2">
        <a href="#alabama">Arizona</a>
      </li>
      <li className="gds-search__typeahead-item" data-gds-typeahead-index="3">
        <a href="#alabama">Arkansas</a>
      </li>
      <li className="gds-search__typeahead-item" data-gds-typeahead-index="4">
        <a href="#alabama">California</a>
      </li>
      <li
        className="gds-search__typeahead-item"
        data-gds-typeahead-index="5"
        data-gds-no-results
      >
        No Results
      </li>
    </ul>
  </div>
</div>
```

**Optional classes:**

- `gds-search--shown`
- `gds-search--no-result`
