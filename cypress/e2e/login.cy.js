describe('Login no Sauce Demo', () => {
    it('Deve fazer login com credenciais válidas e verificar a URL', () => {
      cy.visit('/');
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
      cy.get('[data-test=login-button]').click();
      cy.url().should('include', '/inventory.html');
      cy.screenshot('pagina-inventario');
    });
  });