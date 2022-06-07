Feature: Checkout Page
  # This Feature will test the Demo check out functionality using Stripe hosted
  # Background repeats for each Scenario

Background: I load the application on the checkout page

  Scenario: Successful transaction through hosted Stripe
      When I type in my email, name and postal code
      And  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
         | 1 | Payment Success | 4242424242424242 | 888  | 1250  |  Processing... |  Payment success |
      Then I verify that payment was successful

  Scenario: Decline transaction through hosted Stripe
      When  I type in my email, name and postal code
      And  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
         | 5 | Payment Declined | 4000000000000002 | 888  | 1250  |  Your card was declined. Please try a different card. | unable to authenticate |
      Then I verify that payment was declined

    Scenario: Successful transaction through hosted Stripe - 3D Secure
      When  I type in my email, name and postal code
      Then  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
         | 2 | Authentication 3D Secure - Complete | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | Payment success |
      Then  I procced with 3D Secure 2 authentication

  #   Scenario: Decline transaction through hosted Stripe - 3D Secure
  #     When  I type in my email, name and postal code
  #     Then  I fill in card details and click pay
  #        | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
  #        | 3 | Authentication 3D Secure - Fail | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | unable to authenticate |

  #   Scenario: Cancel transaction through hosted Stripe - 3D Secure
  #     When  I type in my email, name and postal code
  #     Then  I fill in card details and click pay
  #        | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
  #        | 4 | Authentication 3D Secure - Cancel | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | unable to authenticate |