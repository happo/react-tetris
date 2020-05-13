describe('application', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('[data-reactroot]').should('contain', 'TETRIS');
  });
});
