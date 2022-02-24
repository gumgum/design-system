# GumGum Concrete Design System

Concrete is inspired by the modern design of GumGum’s Santa Monica office featuring white walls and exposed concrete.

---

<span style="color:red">Breaking Change: 2.0 has recently been released due to an upcoming deprecation of how scss calculates math. This breaking change requires using sass package and no longer supports node-sass.</span>

# Usage

At [GumGum](https://gumgum.com/) we build our web applications with React and built this design system to support most React applications. It works with create-react-app out of the box, but some applications may require additional webpack configurations.

### Install Design & Sass Packages

```jsx
// Design system is built-in SCSS, so sass package is required for the build process.
$ yarn add sass gumgum-design
```

[GumGum NPM Package](https://www.npmjs.com/package/gumgum-design)
[Sass NPM Package](https://www.npmjs.com/package/sass)

Concrete Design System has only two dependencies:

- [FontSource Public Sans](https://www.npmjs.com/package/@fontsource/public-sans) ( font )
- [FontAwesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free) ( icon font)

### Import Design Styles

```jsx
// In the main SCSS file (e.g. index.scss)
@import '~gumgum-design/styles/scss/index';
```

### Overriding Design Styles

There are two simple ways to override design styles such as color variables. Override styles can be put into a different file or they can be placed above the import.

```jsx

@import './override';
@import '~gumgum-design/styles/scss/index';

// or

$primaryColor: #bada55;
@import '~gumgum-design/styles/scss/index';
```

# Running Design System Locally

The design system documentation is built using [Next.js](https://nextjs.org/) and is simple to get running.

```jsx
// Install packages
$ yarn install

// Run locally
$ yarn dev
```

# About Concrete Design System

### Why update?

As part of the GumGum 2020 rebranding, the design system was overdue for a cosmetic overhaul. Additionally supporting technology had been deprecated and needed to be upgraded.

### Recent Changes:

- Design System is now open source
- New NPM Package [npm install gumgum-design](https://www.npmjs.com/package/gumgum-design)
- New Documentation Site
- Reduced dependencies
- CDN no longer required

**Upcoming Changes:**

- Simplified UI inventory & build process
- Documentation Search and templates

### What to expect:

Updates to this design system will be rolled out into small stages to help reduce breaking UI on our existing platforms. Each release will included expectations on breaking changes along with solutions. Our goal is to fit these simple changes into each teams sprint release.

The existing design system will continue to be maintained to stable, but will soon be phased out.

For now there will be no CDN available to this design system since most of our applications are running off React and using node-sass.

### Notable Breaking Changes from v1

.gds-circular-button--tooltip - Deprecated: use normal tooltips

### License

[Apache 2.0](https://www.notion.so/whisten/LICENSE.md)

Important Note: This project does not redistribute third party libraries but identifies their availability. The libraries called by this project are subject to their creator licenses. Remember to consult and comply with all licenses in your uses.
