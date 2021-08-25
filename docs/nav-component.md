---
id: nav-component
title: Navigation
sidebar_label: Tabs
---

Navigation elements should be placed semantically within `<nav>` tags. For smaller tab navigation, add `gds-nav-tabs--sm` class to `gds-nav-tabs`. For larger tab navigation, add `gds-nav-tabs--lg` class to `gds-nav-tabs`.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-nav" target="_blank">Prototypes Page</a>
</p>

## Tabs

<nav>
    <ul class="gds-nav-tabs -p-a-0" data-gds-nav="1">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="1">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>

```html
<nav>
    <ul class="gds-nav-tabs" data-gds-nav="1">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="1">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>
```

## Justified Tabs

For justified tabs, use `gds-nav-tabs--justified`.

<nav>
    <ul class="gds-nav-tabs gds-nav-tabs--justified -p-a-0" data-gds-nav="3">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="3">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>

```html
<nav>
    <ul class="gds-nav-tabs gds-nav-tabs--justified" data-gds-nav="3">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="3">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>
```

## Pills

For pill nav, use `gds-nav-pills`.

<nav>
    <ul class="gds-nav-pills -p-a-0" data-gds-nav="4">
        <li class="gds-nav-pills__list-item gds-nav-pills__list-item--active" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="1" data-gds-nav-type="pill">One</a></li><!--
        --><li class="gds-nav-pills__list-item" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="2" data-gds-nav-type="pill">Two</a></li><!--
        --><li class="gds-nav-pills__list-item" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="3" data-gds-nav-type="pill">Three</a></li><!--
        --><li class="gds-nav-pills__list-item gds-nav-pills__list-item--disabled" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="4" data-gds-nav-type="pill">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="4">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>

```html
<nav>
    <ul class="gds-nav-pills" data-gds-nav="4">
        <li class="gds-nav-pills__list-item gds-nav-pills__list-item--active" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="1" data-gds-nav-type="pill">One</a></li><!--
        --><li class="gds-nav-pills__list-item" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="2" data-gds-nav-type="pill">Two</a></li><!--
        --><li class="gds-nav-pills__list-item" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="3" data-gds-nav-type="pill">Three</a></li><!--
        --><li class="gds-nav-pills__list-item gds-nav-pills__list-item--disabled" data-gds-nav-item><a class="gds-nav-pills__link" data-gds-nav-button="4" data-gds-nav-type="pill">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="4">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>
```

## Underline

For alternate, underlined tabs, use `gds-nav-tabs--underline`.

<nav>
    <ul class="gds-nav-tabs gds-nav-tabs--underline -p-a-0" data-gds-nav="2">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs--underline__link" data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="2">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>

```html
<nav>
    <ul class="gds-nav-tabs gds-nav-tabs--underline" data-gds-nav="2">
        <li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--active" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs--underline__link" data-gds-nav-button="1" data-gds-nav-type="tab">One</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="2" data-gds-nav-type="tab">Two</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="3" data-gds-nav-type="tab">Three</a></li><!--
        --><li class="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--disabled" data-gds-nav-item><a class="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="4" data-gds-nav-type="tab">Disabled</a></li>
    </ul>
</nav>
<section data-gds-nav-contents="2">
    <div class="-block" data-gds-nav-content="1">Tab one content goes here.</div>
    <div class="-none" data-gds-nav-content="2">Tab two content goes here.</div>
    <div class="-none" data-gds-nav-content="3">Tab three content goes here.</div>
    <div class="-none" data-gds-nav-content="4">Tab four content goes here.</div>
</section>
```
