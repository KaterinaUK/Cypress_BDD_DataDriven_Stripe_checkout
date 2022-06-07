# Stripe Checkout  :moneybag: - Cypress / TypeScript / BDD / Data Driven Testing / POM / Reusability  :rocket:

Take your seat, hold on, and see the test infrastructure that every serious tech business needs.

Test cases + mind map, can be seen here: [Manual Task](Stripe_checkout_payment/manual_task)

This demo test suite, runs a set of Cypress tests on the Stripe Hosted Checkout pages, its purpose is to showcase many test infrastructure best practices. It makes use of:

- Cypress
- TypeScript
- Cypress Testing Library
- cypress-iframe Plugin
- Page Object Model
- Behaviour Driven Development / Cucumber Style Syntax - [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- Data Driven Testing
- Reusable Functions
- Reusable Test Steps
- CI/CD Integration (Github Actions)

NB: actually, you would not run e2e tests on the stripe checkout hosted by Stripe (you would mock or stub the response), rather if a custom payment flow was chosen implementing form elements directly into our own application with custom styles etc. Custom payment flow integration requires end-to-end testing to make sure everything works as expected and we get a smooth user experience.

## Risks  :bangbang:

- chromeWebSecurity has been disabled (to help with testing stripe iframes), this comes with some consequences (e.g. we might miss some issues that we’d normally catch in a browser with web security enabled).
- viewport is set to mobile view, as this page is dynamic, tests should be run both on mobile and desktop views.

## Objectives  :open_book:
#### 1. Tests written from User-centric view point. The more your tests resemble the way your software is used, the more confidence they can give you.
  - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro) - helps you test UI components in a user-centric way, see the core `dom-testing-library` for much more detail. You write tests that mimic the way that the user would use your software.

   > "You should test your software in the way your users are using it" Kent C. Dodds

#### 2. Maintainable tests that give us high confidence that our web app is working for our users.
- using [Page Object Model](https://medium.com/nerd-for-tech/cypress-page-object-model-953791736972) - a design pattern which externalises web elements/locators, reducing code duplication and improving test case maintenace.
- avoid all e2e Cypress [bad practices](https://docs.cypress.io/guides/references/best-practices)

#### 3. Reusabability of tests/code. Tests are written with multiple layers, BDD enabling all to understand the purpose/actions of any test/step. This also aids reusability of common test steps.
- using BDD to enable understanding of tests, and easy reusability of test steps, for detail see: [cucumber/gherkin-syntaxed specs](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- use of [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax) typical logic is easily repeatable e.g. a login command

#### 4. Data Driven Testing
- a single step can be used to drive many test scenarios (each requiring a different set of data), covering all positive and negative eventualities.

#### 5. CI Intergation
CI Intergation - GitHub Actions, repeatable test suite at present runs nightly, automatically or ondemand e.g. by a developers merge.

#### 6. Speed of execution
- Mix of Page Objects and [App Actions](https://applitools.com/blog/page-objects-app-actions-cypress/), where required to set the application state in the desired state immediately, for the purpose of that test.

## Installation  :safety_vest:
### Prerequisites

You will need:

- The following repo cloned: https://github.com/KaterinaUK/Stripe_checkout_payment.git

### ...then

- Open terminal in root folder and run 

   `npm install`

### ...drum roll  :drum:, finally...

To start the tests, run the following command in root terminal:

   `npm run cypress:open`

Click on the feature file to run the test.

## Debugging failed CI tests  :bug:

There are a few tools available to help you debug failed tests on CI:

- The `cypress-failed-log` plugin will display the Cypress commands of any failed test in the CI log. This can help provide context of what hapenned leading up to the test failure.
- The result of the Cypress run is saved as an artifact in GitHub, you can find it on the summary page of the Action workflow. Inside the zip file you will find screenshots, videos, and logs of any failed tests.
- If you suspect a test failure might be caused by a graphql api issue you can log every request & response by adding the command `cy.logApiRequests()` to a `Before()` block in your test. Note: this will make the logs very verbose.

## Video recording of running tests  :tv:


## Future enhancements  :white_check_mark:

- Slack reporting
- Cypress Dashboard (or similar)
- Code coverage
- More extensive set of edge test cases (not the purpose of this demo)
- Run tests on Desktop & Mobile viewports
- Consider use of docker for test infra in CI
- Load balanced, parralised running of tests in CI
- add mochaawesome reporting


