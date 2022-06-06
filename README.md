# Stripe_checkout - Cypress / TypeScript / BDD / Data Driven Testing / POM / Reusability

This demo test suite, runs a set of Cypress tests on the Stripe Checkout pages.

This demo showcases many test infrastructure best practices, including (but not limited to):

- Cypress
- Cypress Testing Library
- cypress-iframe Plugin
- TypeScript
- Page Object Model
- Behaviour Driven Development / Cucumber Style Syntax
- Data Driven Testing
- Reusable Functions
- Reusable Test Steps

NB: actually, you would not run e2e tests on stripe checkout hosted by Stripe (you would mock or stub the response), rather if a custom payment flow was chosen implementing form elements directly into our own application with custom styles etc. Custom payment flow integration requires end-to-end testing to make sure everything works as expected and we get a smooth user experience.

## Risks

- chromeWebSecurity has been disabled (to help with testing stripe iframes), this comes with some consequences (e.g. we might miss some issues that we’d normally catch in a browser with web security enabled)

## Overview

To ensure maintainability / scalability:

Page Object Model, has been utilised to ensure future test maintainability. WebElemnent Locators are kept seperate from the tests.
Web Locators have been carefully selected to resist DOM structure changes. The application has been updated to include the attribute: [data-testid=attributename]
This demo makes use of Data Driven Tests.

A plugin for Cypress called [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) is used to transform `.feature` files into runnable tests. The plugin is configured to look for step defintions in a sibling TypeScript file of the same name. Any files added to the `integration/common` folder will be included with every feature test.

## Prerequisites

You will need:

- The following repo cloned: https://github.com/KaterinaUK/Stripe_checkout_payment.git

## Installation

- Open terminal in root folder and run `npm install`

## Testing locally

To start the tests, run the following command in root terminal:

   `npm run cypress:open`

Click on the feature file to run the test.

## Debugging failed CI tests

There are a few tools available to help you debug failed tests on CI:

- The `cypress-failed-log` plugin will display the Cypress commands of any failed test in the CI log. This can help provide context of what hapenned leading up to the test failure.
- The result of the Cypress run is saved as an artifact in GitHub, you can find it on the summary page of the Action workflow. Inside the zip file you will find screenshots, videos, and logs of any failed tests.
- If you suspect a test failure might be caused by a graphql api issue you can log every request & response by adding the command `cy.logApiRequests()` to a `Before()` block in your test. Note: this will make the logs very verbose.

## Video recording of running tests

https://user-images.githubusercontent.com/68429856/171468050-d77d72e4-9bb8-487c-972c-d4473539d6be.mp4

