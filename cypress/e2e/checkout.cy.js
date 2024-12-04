describe('Finalizar Compra no Sauce Demo', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
      cy.get('[data-test=login-button]').click();
      cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
      cy.get('.shopping_cart_link').click();
    });
  
    it('Deve finalizar a compra com sucesso', () => {
      cy.get('[data-test=checkout]').click();
      cy.get('[data-test=firstName]').type('John');
      cy.get('[data-test=lastName]').type('Doe');
      cy.get('[data-test=postalCode]').type('12345');
      cy.get('[data-test=continue]').click();
      cy.get('[data-test=finish]').click();
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
      cy.screenshot('Sucesso');
    });
  });