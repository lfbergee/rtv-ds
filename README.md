# RiksTV Shared Components 

## Requirements

- node 14 or later
- npm 7 or later


## Todo
- Focus styling
- Keyboard/touch listener function
- Button style when on light background
- Move repo to shared rikstv 
- Use Cypress Dashboard
- Improve README


## How to release

- Update version number in `shared-components/package.json`
- Update `@rikstv/shared-components` version number in `portal/package.json` accordingly
- Commit using the following pattern `chore: {describe release} [release]`
- Merge to master, that will automatically release to npm

*** NEVER release from your machine ***

### Details

We release to the public npm registry under the @rikstv-scope. 