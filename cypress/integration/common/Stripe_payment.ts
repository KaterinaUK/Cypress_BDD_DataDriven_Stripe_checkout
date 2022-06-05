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

When('Select UK location', ()=>{
  cy.get('.LocationDropdown > .DropdownSelect-Trigger > .DropdownSelect-Label > .DropdownSelect-LabelLeft')
  .contains('United Kingdom')
  .click();
})

And('I type in my email, name and postal code', () => {
  stripeCheckout.getEmailField()
  .type('myemail@email.com');
  stripeCheckout.getNameonCard()
  .type('Mrs Katerina Cypress');
  stripeCheckout.getPostalCode()
  .type("07002");
})

When(/^I fill in card details and click pay$/, (table: DataTable) => {
    console.log("Start of data table test");

    var rows = table.hashes();
    _.each(rows, function(row){
    console.log(row.ID + row.TestDesc + row.CardNumber + row.CVC + row.ExpiryDate + row.ExptOutcome1 + row.ExptOutcome2);
    
    stripeCheckout.getCardNumberField()
      .type(row.CardNumber);
    stripeCheckout.getcardCvc()
      .type(row.CVC);
    stripeCheckout.getcardExpiry()
      .type(row.ExpiryDate);
  });
})