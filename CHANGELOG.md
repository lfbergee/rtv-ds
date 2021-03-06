# 📖 Change Log

## 0.8.1

### 💥 Deprecated 💥

## 0.8.0

### 💥 BREAKING CHANGES 💥

- Changes the secondary- and tertiary-background colors. Also adds new color "--rds-background-card"

## 0.7.0

### 💥 BREAKING CHANGES 💥

- Supply style as a single file, no longer splitting css files into each component, se reasoning [here](https://github.com/lfbergee/rtv-ds/issues/278)

#### 👉 Migration 👈
1. Import or preload `import "@rikstv/shared-components/dist/style.css"` early in your app or in root html file
1. Remove all import of spesific `.css` files

or:

1. Change import from `.css` to `.scss`, also the naming convention of sass files differs from css, so every import must be updated

## 0.6.11

### 🤷 Description

- Adds new feedback colors for Strim and RiksTV. The "rds-feedback-error" color is now deprecated.

## 0.6.10

### 🤷 Description

- Fix build of TextField

## 0.6.9

### 🤷 Description

- Add TextField

## 0.6.8

### 🤷 Description

- Improve links in light mode

## 0.6.7

### 🤷 Description

- Adds lightmode for primary and secondary button in strim

### 🎉 Features

- Pimary and secondary buttons wrapped with lightMode component will adjust style accordingly
- lightBackground attribute can be used to override/trigger the lightMode styling

## 0.6.3 - 0.6.6

### 🎉 Features

- Add accordion

### 🐛 Bug Fixes

- Improve style import for RadioToggle

## 0.6.2

### 🐛 Bug Fixes

- Let link inherit all font props

## 0.6.1

### 🎉 Features

- Add link style and documentation

## 0.6.0

### 💥 BREAKING CHANGES 💥

- New fonts added, display-title, title-1 and title-2 now expects HalMatex-Bold to be available in the app

## 0.5.3

### 🤷 Description

### 🎉 Features

- Adjust typography scale
- Function to generate proper fluid clamping

## 0.5.2

### 🤷 Description

- Simplify release.
- More inclusive PeerDependency
- Remove react-dom as peerDep

## 0.5.1

### 🤷 Description

Align icons in buttons properly in safari

### 🎉 Features

- Uses 'align-items' css to align icons in buttons for safari

## 0.5.0

### 🤷 Description

Adds forwardRef to all buttons in Button.tsx and IconButton.tsx
Updates the colors of buttons

### 🎉 Features

- Ref can be used with buttons
- All buttons have updated colors

### 💥 BREAKING CHANGES 💥

- Added forwardRef to all buttons.

## 0.4.3

### 🎉 Features

- Use numerical values for typography `line-heights`
- Change `rds-title-4` from `18-22px` to `16-22px`

## 0.4.2

### 🎉 Features

- Added optional `iconClass`-prop to `IconButton`

## 0.4.1

### 🐛 Bug Fixes

- Darker title-1 color

## 0.4.0

### 🤷 Description

Typography for light background

### 🎉 Features

- Light background wrapper component
- Light background typograhy
- Use HalMatex for Title2
- Add system-ui to font-stack

## 0.3.3

### 🤷 Description

Screenreaders

### 🎉 Features

- new `sr-only` screenreader only class
- hide legend in radio toggle by default

### 🧪 Test

- RadioToggleTest

## 0.3.2

### 🤷 Description

Updated button and toggle style

### 🎉 Features

- new color, accent-hover
- updated button style, taller and bolder
- update toggle style, same as button and new hover

## 0.3.1

### 🤷 Description

New color

### 🎉 Features

- new color, bakground-tertiary

## 0.3.0

### 🤷 Description

Clean up API and make spacing relative

### 🎉 Features

- Use relative values in spacing scale and radio-toggle
- Supply px-to-rem conversion function

### 💥 BREAKING CHANGES 💥

- Rename Strim component to StrimProvider
- Rename RiksTV Component to RiksTVProvider

## 0.2.2 (2021-07-21)

### 🤷 Description

Make it easier to use RDS with existing code.

### 🎉 Features

- Scope custom properties
- Remove font declaration from root style file

### 🐛 Bug Fixes

- Fix focus on RadioToggle
- Fix overflow issue on small screens in portal

## 0.2.1 (2021-07-21)

### 🤷 Description

Fix to portal focus and icons in safari

### 🐛 Bug Fixes

- Icons now should show also in Safari

## 0.2.0 (2021-07-20)

### 🤷 Description

New component

### 🎉 Features

- RadioToggle button component

## 0.1.1 (2021-07-20)

### 🤷 Description

Focus styling functions for button and in portal

### 🎉 Features

- Focus mixin
- Focus in Button
- Focus in portal-component
- Input method detect function
- Rewritten Core-component with input detection
- Added change log

## 0.1.0 (2021-07-19)

### 🤷 Description

First full release with portal and npm deploy

### 🎉 Features

- Initial component setup
- Initial portal setup
- Initial npm setup
- Component usage documentation

## 0.0.0

### 🤷 Description

### 🐛 Bug Fixes

### 🎉 Features

### 🧪 Test

### 💥 BREAKING CHANGES 💥
