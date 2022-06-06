import 'cypress-iframe';
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("configureCypressTestingLibrary", () => {
  cy.configureCypressTestingLibrary();
});

// returns checkout iframe body
Cypress.Commands.add('getDemoBody', () => {
	cy.log('getDemoBody');

	return cy
		.iframe('#checkout-demo')
		.its('.contentDocument.body')
		.should('not.be.empty')
		.then((body) => cy.wrap(body));
});

// returns data-testid for quick ID of locator
Cypress.Commands.add('getByTestId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`);
  });
  
  // Add this to a Before() block in your test to log all api requests to graphql.
  // This is useful for debugging requests in CI but is very noisy so not used by default.
  Cypress.Commands.add('logApiRequests', () => {
    cy.intercept('POST', '/int/api*', (req) => {
      req.on('response', (res) => {
        Cypress.log({
          message: `Intercept request: ${JSON.stringify({
            method: req.method,
            url: req.url,
            body: req.body,
          })}`,
        });
        Cypress.log({
          message: `Intercept response: ${JSON.stringify({
            fromRequest: req.url,
            statusCode: res.statusCode,
            body: res.body,
          })}`,
        });
      });
    });
  });
  