# GumGum Design System

## 🚧 Under Construction 🚧

Future home of GumGum Design System 2.0 [aka Concrete] 🚧

[https://img.shields.io/github/package-json/v/gumgum/design-system/master](https://img.shields.io/github/package-json/v/gumgum/design-system/master)

GitHub package.json version (branch)

---

As part of the GumGum 2020 rebranding, this design system will be begin to be updated to match the new brand styles. Concrete is inspired by the GumGum Santa Monica office with crisp architectural lines and modern exposed concrete.

---

### Upcoming Changes

- Design System will become open source
- Simplified UI inventory & build process
- Fonts no longer hosted
- Better documentation, examples, and templates

### What to expect

We are updating from our original system to 2.0. Updates to this design system will be rolled out into small stages to help reduce breaking UI on our existing platforms. Each release will included expectations on breaking changes along with solutions. Our goal is to fit these simple changes into each teams sprint release.

The existing design system will continue to be maintained to stable, but will soon be phased out.

For now there will be no CDN available to this design system since most of our applications are running off React and using node-sass. As well we have removed our compressed CSS version.

---

### Usage

```bash
npm i gumgum-design

or

yarn add gumgum-design
```

For current usage of this design system we recommend using the scss/sass files with `node-sass`. ⚠️ Warning: node-sass has been deprecated 😭  but can continue to be used. We are working to support `sass` aka Dart Sass (09/04/2020)

```bash
npm i node-sass

or

yarn add node-sass
```

Create a root .scss file, if you don’t already have one.

```bash
touch index.scss
```

Import the Design System Package to your root style file (`index.scss`)

```sass
@import '~gumgum-design/styles/scss/index';
```

### Style Overrides

Design token overrides need to come before the @import. We recommend using an override file at root or you can write it above.

```sass
@import './override';
@import '~gumgum-design/styles/scss/index';
```

or

```sass
$primaryColor: #bada55;
@import '~gumgum-design/styles/scss/index';
```

---

### Running Repo Locally

`npm i`

Run StoryBook

`npm run start`

Run Test/Temp Page We use this to test the impact of changes on existing systems

`npm run start:temp`

It will run on `http://localhost:8000/` and you can use the css in another repo to see the changes `http://localhost:8000/index.css`

*i.e.* In a different repo comment or remove the existing CSS and replace with this: `<link rel="stylesheet" href="http://localhost:8000/index.css" />` This will require a page refresh when there is a change since there is no task water to see that the CSS has updated.

---

### Testing Locally

In the root folder run

```bash
npm link
```

Create a react test folder & link the package within it

```bash
npx create-react-app tester
cd tester
npm link gumgum-design
```

### Contributing

We use `git flow`

### WIP

Note: CSS complier disabled currently. Only use React w/ node-sass or Storybook at this time.
