Feature: Checkout Page
  # This Feature will test the Demo check out functionality using Stripe hosted
  # Background repeats for each Scenario

Background: I load the application on the checkout page

  Scenario: Make a transaction through hosted Stripe
      When  I type in my email, name and postal code
      Then  I fill in card details and click pay
         | ID | TestDesc | CardNumber  | CVC | ExpiryDate | ExptOutcome1 | ExptOutcome2 |
         | 1 | Payment Success | 4242424242424242 | 888  | 1250  |  Payment success |  Payment success |
         | 2 | Authentication 3D Secure - Complete | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | Payment success |
         | 3 | Authentication 3D Secure - Fail | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | unable to authenticate |
         | 4 | Authentication 3D Secure - Cancel | 4000000000003220 | 888  | 1250  |  3D Secure 2 Test Page | unable to authenticate |
         | 5 | Payment Declined | 4000000000000002 | 888  | 1250  |  3D Secure 2 Test Page | unable to authenticate |

  # Scenario: Pay a valid Mastercard using Stripe
  #     Given  I load the application on the checkout page
  #     When  I provide my email, name and postal code
  #     Then  I fill in a card details
  #         | CardNumber  | CVC | ExpiryDate |
  #         | 5555555555554444 | 128  | 0325  |
      

  # Scenario: Pay with declined card using Stripe
  #     Given  I load the application on the checkout page
  #     When  I provide my email, name and postal code
  #     Then  I fill in a card details
  #         | CardNumber  | CVC | ExpiryDate |
  #         | 4000000000000002       | 888       | 1225  |