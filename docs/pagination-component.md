---
id: pagination-component
title: Pagination
sidebar_label: Pagination
section: molecules
---

The pagination component is prefixed by `gds-pagination`. It should be placed semantically within a `<nav>` element. Use `gds-pagination__page-item--active` on the currently selected page number.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-pagination" target="_blank">Prototypes Page</a>
</p>

```html
<nav>
    <ul class="gds-pagination gds-pagination--mobile-arrows gds-pagination--fixed">
        <li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed" data-page-change='prev'><span class="-vis-hidden">&laquo;</span><span class="-sr-only">Previous</span></a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed gds-pagination__page-item--active"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">1</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">2</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">3</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">4</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">5</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">6</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed">7</a></li><!--
        --><li class="gds-pagination__page-item gds-pagination__page-item--fixed"><a class="gds-pagination__page-link gds-pagination__page-link--fixed" data-page-change='next'><span class="-vis-hidden" aria-hidden="true">&raquo;</span><span class="-sr-only">Next</span></a></li>
        <span class='gds-pagination__page-indicator'></span>
    </ul>
</nav>
```

__Optional classes:__

- `gds-pagination--xs`
- `gds-pagination--sm`
- `gds-pagination--lg`
- `gds-pagination--xl`
