# GumGum Design System

## 🚧 Under Construction 🚧

Future home of GumGum Design System 2.0 [aka Concrete] 🚧

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/gumgum/design-system/master)

---

As part of the GumGum 2020 rebranding, this design system will be begin to be updated to match the new brand styles. Concrete is inspired by the GumGum Santa Monica office with crisp architectural lines and modern exposed concrete.

---

### Upcoming Changes:

- Design System will become open source
- New NPM Package
- Simplified UI inventory & build process
- Better documentation, examples, and templates

### What to expect:

Updates to this design system will be rolled out into small stages to help reduce breaking UI on our existing platforms. Each release will included expectations on breaking changes along with solutions. Our goal is to fit these simple changes into each teams sprint release.

The existing design system will continue to be maintained to stable, but will soon be phased out.

For now there will be no CDN available to this design system since most of our applications are running off React and using node-sass.

---

### Package Usage

`npm i gumgum-design`
or
`yarn add gumgum-design`

For current usage of this design system we recommend using the scss/sass files with node-sass.

`npm i node-sass`
or
`yarn add node-sass`

You don't have to use *node-sass* specifically, but it's what we test and use.

Create a root .scss file, if you don't already have one. 
`touch index.scss`

Import the Design System
`@import '~gumgum-design/styles/scss/main';`

Design token overrides need to come before the @import. We recommend using an override file at root or you can write it above.

`
@import './override';
@import '~gumgum-design/styles/scss/main';
`
or
`
$primaryColor: #bada55;
@import '~gumgum-design/styles/scss/main';
`

---

### Running Locally

`npm i`

Run StoryBook
`npm run start`



Run Test/Temp Page
We use this to test the impact of changes on existing systems
`npm run start:temp`

It will run on `http://localhost:8000/` and you can use the css in another repo to see the changes `http://localhost:8000/main.css`

*i.e.*
In a different repo comment or remove the existing CSS and replace with this:
`<link rel="stylesheet" href="http://localhost:8000/main.css" />`
This will require a page refresh when there is a change since there is no task water to see that the CSS has updated.


---

### Contributing 

We use `git flow`

#WIP
