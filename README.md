# RiksTV Shared Components

Welcome to Shared Components for RiksTV. Please check the portal for usage guide and development guide.

## Requirements

- node 14 or later
- npm 7 or later


## Todo
- Button style when on light background
- Move repo to shared rikstv 
- Use Cypress Dashboard

## How to release

- Update version number in `shared-components/package.json`
- Update `@rikstv/shared-components` version number in `portal/package.json` accordingly
- Commit using the following pattern `chore: {describe release} [release]`
- Merge to master, that will automatically release to npm

*** NEVER release from your machine ***

### Release details

We release to the public npm registry under the @rikstv-scope. 