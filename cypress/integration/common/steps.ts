/// <reference types="Cypress" />

import { Before, When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
var _ = require('lodash');
import StripeCheckout from '../../support/POM/Stripe_checkout_page';
const url = 'https://checkout.stripe.dev/preview'
const stripeCheckout  = new StripeCheckout();



When(/^I fill in a card details$/, (table: DataTable) => {
    console.log("Start of data table test entering new transactions to database (declined)");
    var rows = table.hashes();
    _.each(rows, function(row){
    console.log(row.CardNumber + " " + row.CVC + " " + row.ExpiryDate);
    stripeCheckout.getCardNumberField()
      .type(row.CardNumber);
    stripeCheckout.getcardCvc()
      .type(row.CVC);
    stripeCheckout.getcardExpiry()
      .type(row.ExpiryDate);
  });
})