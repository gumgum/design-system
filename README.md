# GumGum Concrete Design System

Concrete is inspired by the modern design of GumGum’s Santa Monica office featuring white walls and exposed concrete.

`Breaking Changes: 2.0 has recently been released due to an upcoming deprecation of how scss calculates math. This breaking change requires using sass package and no longer supports node-sass. 2.1.0 also contains breaking changes to remove deprecated components. See CHANGELOG.md for details.`

<br>
<br>
<br>
<br>
<br>

## Table of Contents

-   [Usage](#usage)
-   [Local Setup](#running-design-system-locally)
-   [Roadmap](#roadmap)
-   [About Concrete](#about-concrete-design-system)

<br>
<br>
<br>
<br>
<br>

# Usage

At [GumGum](https://gumgum.com/) we build our web applications with React and built this design system to support most React applications. It works with create-react-app out of the box, but some applications may require additional webpack configurations.

### Install Design & Sass Packages

```bash
// Design system is built-in SCSS, so sass package is required for the build process.
$ yarn add sass gumgum-design
```

-   [GumGum NPM Package](https://www.npmjs.com/package/gumgum-design)
-   [Sass NPM Package](https://www.npmjs.com/package/sass)

Concrete Design System has only two dependencies:

-   [FontSource Public Sans](https://www.npmjs.com/package/@fontsource/public-sans) ( font )
-   [FontAwesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free) ( icon font)

### Import Design Styles

```scss
// In the main SCSS file (e.g. index.scss)
@import '~gumgum-design/styles/scss/index';
```

### Overriding Design Styles

There are two simple ways to override design styles such as color variables. Override styles can be put into a different file or they can be placed above the import.

```scss
@import './override';
@import '~gumgum-design/styles/scss/index';

// or

$primaryColor: #bada55;
@import '~gumgum-design/styles/scss/index';
```

<br>
<br>
<br>
<br>
<br>

# Running Design System Locally

The design system documentation is built using [Next.js](https://nextjs.org/) and is simple to get running.

```bash
// Install packages
$ yarn install

// Run locally
$ yarn dev
```

<br>
<br>
<br>
<br>
<br>

# Roadmap

-   ~~Main Docs~~
-   ~~node-sass to sass~~
-   ~~Main internal web app integrations~~
-   ~~Font Awesome 6 Upgrade~~
-   Detailed Doc Examples
-   ~Deprecate Components~/Sizes/Colors
-   Centralized Design Token System
-   Mobile/Browser Fixes
-   Figma Design File Update
-   Synchronized Design Tokens (Figma ⟵⟶ Design System)
-   Theme Modes
-   Improved Version Control
-   Animations
-   Unit Testing and Optimization
-   CSS Only Build
-   Simplified UI inventory & build process
-   Documentation Search and templates
-   Light & Dark Theme Mode
-   Improved Accessibility
-   Unit Testing
-   ~Improved Release Notes~

<br>
<br>
<br>
<br>
<br>

### License

[Apache 2.0](https://www.notion.so/whisten/LICENSE.md)

Important Note: This project does not redistribute third-party libraries but identifies their availability. The libraries called by this project are subject to their creator licenses. Remember to consult and comply with all licenses in your uses.
