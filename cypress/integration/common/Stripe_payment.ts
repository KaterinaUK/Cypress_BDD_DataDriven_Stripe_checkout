/// <reference types="Cypress" />

import { Before, When, Then, Given, DataTable, And } from "@badeball/cypress-cucumber-preprocessor";
import StripeCheckout from '../../support/POM/Stripe_checkout_page';

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

And('I provide my email, name and postal code', () => {
  stripeCheckout.getEmailField()
  .type('myemail@email.com');
  stripeCheckout.getNameonCard()
  .type('CypressIsGreat');
  stripeCheckout.getPostalCode()
  .type("NJ 07002");
})