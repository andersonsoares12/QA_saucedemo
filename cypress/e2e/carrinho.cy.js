describe('Fluxo de Carrinho no Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('Deve adicionar produto ao carrinho', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('[data-test="shopping-cart-link"]') .should('contain', '1')
    .screenshot('item no carrinho');
 
  });
});