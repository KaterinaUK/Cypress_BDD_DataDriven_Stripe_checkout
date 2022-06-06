// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-failed-log';
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      getDemoBody(): Chainable;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      getIframe(selector: string): Chainable<JQuery<HTMLElement>>;
      logApiRequests(): Chainable;

      /**
       * dom-testing-library helpers for Cypress
       *
       * Configure dom-testing-library through Cypress object. Wraps `configure(config)`
       *
       * @see https://github.com/testing-library/cypress-testing-library#usage
       * @see https://github.com/testing-library/dom-testing-library#table-of-contents
       */
       configureCypressTestingLibrary(): Chainable<void>
    }
  }
}