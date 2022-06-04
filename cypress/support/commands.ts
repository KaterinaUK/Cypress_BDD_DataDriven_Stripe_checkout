// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-iframe';

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
  