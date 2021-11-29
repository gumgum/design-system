# GumGum Concrete Design System

## 🚧 Under Construction 🚧

---

Concrete is inspired by the GumGum Santa Monica office with crisp architectural lines and modern exposed concrete.

---

### Upcoming Changes

- Design System will become open source
- Simplified UI inventory & build process
- Fonts no longer hosted
- Better documentation, examples, and templates

### What to expect

We are updating from our original system to 2.0. Updates to this design system will be rolled out into small stages to help reduce breaking UI on our existing platforms.

For now there will be no CDN available to this design system since most of our applications are running off React and using `node-sass` or `sass`.

The existing design system will continue to be maintained to stable, but will soon be phased out.

---

### Usage

```bash
npm i gumgum-design

or

yarn add gumgum-design
```

For current usage of this design system we recommend using the scss/sass files with `node-sass`. ⚠️ Warning: node-sass has been deprecated 😭  but can continue to be used. We are working to support `sass` aka Dart Sass (09/04/2020)

```bash
npm i sass
```

or

```bash
yarn add sass
```

Create a root .scss file, if you don’t already have one.

```bash
touch index.scss
```

Import the Design System Package to your root style file (`index.scss`)

```scss
@import '~gumgum-design/styles/scss/index';
```

### Style Overrides

Design token overrides need to come before the @import. We recommend using an override file at root or you can write it above.

```scss
@import './override';
@import '~gumgum-design/styles/scss/index';
```

or

```scss
$primaryColor: #bada55;
@import '~gumgum-design/styles/scss/index';
```

---

## Running Locally

The documentation site is built with [Next.js](https://nextjs.org/docs/getting-started)

```bash
yarn install
```

```bash
yarn dev
```

---

