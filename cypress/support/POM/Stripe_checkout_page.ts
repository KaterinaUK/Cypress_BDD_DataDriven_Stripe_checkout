class StripeCheckout 

{
  getAnIFrame()
    {
      return cy.frameLoaded('#checkout-demo')
    }

  getEmailField()
    {
      return cy.iframe('#checkout-demo')
      .find('#email')
      .should('be.visible')
    }

  getNameonCard()
    {
      return cy.iframe('#checkout-demo')
      .find('#billingName')
    }
  
  getPostalCode()
    {
        return cy.iframe()
        .find('#billingPostalCode')
    }

  getbillingCountry()
    {
        return cy.iframe()
        .find('#billingCountry')
    }

  getCardNumberField()
    {
      return cy.iframe('#checkout-demo')
      .find('#cardNumber')
    }


   getcardExpiry()
   {
       return cy.iframe('#checkout-demo')
       .find('#cardExpiry')
   }

   getcardCvc()
   {
        return cy.iframe('#checkout-demo')
        .find('#cardCvc')
    }
   
   clickPayButton()
   {
       return cy.iframe('#checkout-demo')
       .find('.SubmitButton').click()
    }

    getCompleteButton()
    {
      return cy.get('iframe[name^="__privateStripeFrame"]:eq(0)', { timeout: 20000 })
      .iframe()
      .find('iframe#challengeFrame')
      .iframe()
      .find('#test-source-authorize-3ds')
      .click()
      }
    }


export default StripeCheckout;