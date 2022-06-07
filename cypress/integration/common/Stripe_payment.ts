/// <reference types="Cypress" />

import { Before, When, Then, Given, DataTable, And } from "@badeball/cypress-cucumber-preprocessor";
import StripeCheckout from '../../support/POM/Stripe_checkout_page';

var _ = require('lodash');
const url = 'https://checkout.stripe.dev/preview'
const stripeCheckout  = new StripeCheckout();

beforeEach(() => {
 cy.visit(url)
 cy.log('Start of Test')
 });

Given("I load the application on the checkout page", () => {
  stripeCheckout.getAnIFrame()
  cy.log.name;
});

And('I type in my email, name and postal code', () => {
  stripeCheckout.getEmailField()
  .type('myemail@email.com').should('have.value', 'myemail@email.com');
  stripeCheckout.getNameonCard()
  .type('Mrs Katerina Cypress');
  stripeCheckout.getPostalCode()
  .type("07002");
})

// this is reusable, so long as the data table headers are labelled the same as below
When(/^I fill in card details and click pay$/, (table: DataTable) => {
    console.log("Start of data table test");
    var rows = table.hashes();
    _.each(rows, function(row){
    console.log(row.ID + row.TestDesc + row.CardNumber + row.CVC + row.ExpiryDate);
    stripeCheckout.getCardNumberField()
      .type(row.CardNumber);
    stripeCheckout.getcardCvc()
      .type(row.CVC);
    stripeCheckout.getcardExpiry()
      .type(row.ExpiryDate);
    stripeCheckout.clickPayButton()
    })
  });

Then('I verify that payment was successful', () => {
  cy.getDemoBody()
		.find(".SubmitButton--processing")
		.should("be.visible");
	cy.getDemoBody()
		.find("#cardNumber")
		.should("have.attr", "aria-invalid", "false");
	cy.getDemoBody()
    .find(".SubmitButton--complete")
    .should("not.exist");
	cy.getDemoBody()
    .find(".ConfirmPayment-Error")
    .should("not.exist");
});

Then('I verify that payment was declined', () => {
	cy.getDemoBody()
    .contains('Your card was declined. Please try a different card.')
    .should('be.visible')
    .and('have.text', 'Your card was declined. Please try a different card.');
});

And('I {string} 3D Secure authentication', (authorization) => {
	cy.select3dSecureOption(authorization);
	cy.get("#challengeFrame").should("not.exist");
});
