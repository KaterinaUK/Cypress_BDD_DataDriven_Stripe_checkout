Feature: Checkout Page
  # This Feature will test the Demo check out functionality using Stripe hosted
  # Background repeats for each Scenario

Background: I load the application on the checkout page

  Scenario: Successful transaction through hosted Stripe
      When I type in my email, name and postal code
      And  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate |
         | 1 | Payment Success | 4242424242424242 | 888  | 1250  |
      Then I verify that payment was successful

  Scenario: Declined transaction through hosted Stripe
      When  I type in my email, name and postal code
      And  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate |
         | 5 | Payment Declined | 4000000000000002 | 888  | 1250  |
      Then I verify that payment was declined

  Scenario: Successful transaction through hosted Stripe - 3D Secure
      When  I type in my email, name and postal code
      And I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate |
         | 2 | Authentication 3D Secure - Complete | 4000002500003155 | 888  | 1250  |
      And I "complete" 3D Secure authentication
      Then I verify that payment was successful

  Scenario: Declined transaction through hosted Stripe - 3D Secure
      When  I type in my email, name and postal code
      And  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate |
         | 3 | Authentication 3D Secure - Fail | 4000002500003155 | 888  | 1250  |
      Then I "fail" 3D Secure authentication