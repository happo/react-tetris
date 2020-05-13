describe('application', () => {
  it('can be successfully run', () => {
    cy.visit('/');
    cy.contains('TETRIS').should('be.visible');

    cy.contains('(P)').click();

    cy.contains('TETRIS').should('not.be.visible');

    for (let i = 0; i < 12; i++) {
      cy.contains('(SPACE)').click();
    }
    cy.contains('TETRIS').should('be.visible');
  });
});
