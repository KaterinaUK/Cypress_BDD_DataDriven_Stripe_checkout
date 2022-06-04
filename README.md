# Stripe_checkout
How to run and develop the Cypress tests on your local machine.

NB: you would never e2e test stripe checkout hosted by Stripe, rather if a custom payment flow was chosen implementing form elements directly into our own application with custom styles etc. Custom payment flow integration requires end-to-end testing to make sure everything works as expected and we get a smooth user experience.

## Risks

- chromeWebSecurity has been disabled (to help with testing stripe iframes), this comes with some consequences (e.g. we might miss some issues that we’d normally catch in a browser with web security enabled)

## Prerequisites

You will need:

- The following repo cloned
  - https://github.com/KaterinaUK/Stripe_checkout
- run `npm install` on Project folder you are all set.
- npm `install -D cypress-iframe`   to handle iFrame

## Overview

To ensure maintainability / scalability:

Page Object Model, has been utilised to ensure future test maintainability. WebElemnent Locators are kept seperate from the tests.
Web Locators have been carefully selected to resist DOM structure changes. The application has been updated to include the attribute: [data-testid=attributename]
This demo makes use of Data Driven Tests.

A plugin for Cypress called [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) is used to transform `.feature` files into runnable tests. The plugin is configured to look for step defintions in a sibling TypeScript file of the same name. Any files added to the `integration/common` folder will be included with every feature test.

## Testing locally

Open the Cypress test runner:

   `npm run cypress:open`

   Click any feature file to run the test.

## Debugging failed CI tests

There are a few tools available to help you debug failed tests on CI:

- The `cypress-failed-log` plugin will display the Cypress commands of any failed test in the CI log. This can help provide context of what hapenned leading up to the test failure.
- The result of the Cypress run is saved as an artifact in GitHub, you can find it on the summary page of the Action workflow. Inside the zip file you will find screenshots, videos, and logs of any failed tests.
- If you suspect a test failure might be caused by a graphql api issue you can log every request & response by adding the command `cy.logApiRequests()` to a `Before()` block in your test. Note: this will make the logs very verbose.

## Video recording of running tests


https://user-images.githubusercontent.com/68429856/171468050-d77d72e4-9bb8-487c-972c-d4473539d6be.mp4

