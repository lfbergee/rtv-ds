# RiksTV Shared Components

Welcome to Shared Components for RiksTV. Please check the portal for usage guide and development guide.

## Requirements

- node 14 or later
- npm 7 or later

## Todo

### Missing in components
- Button style when on light background
- screen-reader-only class
- Rewrite RadioToggle style to not use button style, check new hover state and larger size
- icon in RadioToggle component
- icon-only or number only version of RadioToggle
- Test for RadioToggle
- test of custom properties ( since we have no types, it can easily happen a color is defined in on brand and not the other, causing it to fail. Lets try to import the css files into a cypress test and expect that every key in one brand is present in both. Everything that is prefix --rds that is, --strm can be for strim only and --rtv can be rikstv only)

### Infrastructure
- Move repo to shared rikstv 
- Use Cypress Dashboard

## How to release

- Update version number in `shared-components/package.json`
- Update `@rikstv/shared-components` version number in `portal/package.json` accordingly
- Update change log
- Commit using the following pattern `{chore|feat|fix}: {describe release} [release]`
- Merge to master, that will automatically release to npm

*** NEVER release from your machine ***

### Release details

We release to the public npm registry under the @rikstv-scope. 