Feature: Checkout Page
  # This Feature will test a check out functionality using stripe
  # Background could be used when we have the same step repeted in the Given statement
# Test1
  Scenario: Pay a valid US Visa card using Stripe
      Given  I load the application on the checkout page
      When  I provide my email, name and postal code
      Then  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 4242424242424242 | 888  | 1225  |

  Scenario: Pay a valid Mastercard using Stripe
      Given  I load the application on the checkout page
      When  I provide my email, name and postal code
      Then  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 5555555555554444 | 128  | 0325  |
      

  Scenario: Pay with declined card using Stripe
      Given  I load the application on the checkout page
      When  I provide my email, name and postal code
      Then  I fill in a card details
          | CardNumber  | CVC | ExpiryDate |
          | 4000000000000002       | 888       | 1225  |