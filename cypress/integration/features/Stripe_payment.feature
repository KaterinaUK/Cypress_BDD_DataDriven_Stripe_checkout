Feature: Checkout Page
  # This Feature will test a check out functionality using stripe
  # Background could be used when we have the same step repeted in the Given statement
# Test1
  Scenario: Pay a valid US Visa card using Stripe
      Given  I load the application on the checkout page
      And  I provide my email, name and postal code
      When  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 4242424242424242 | 888  | 1225  |
      And  I click on pay button
      Then  I verify that it was a success


  Scenario: Pay a valid Mastercard using Stripe
      Given  I load the application on the checkout page
      And  I provide my email, name and postal code
      When  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 5555555555554444 | 128  | 0325  |
      And  I click on pay button
      Then  I verify that it was a success


  Scenario: Pay with declined card using Stripe
      Given  I load the application on the checkout page
      And I provide my email, name and postal code
      When  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 4000000000000002       | 888       | 1225  |
      And  I click on pay button