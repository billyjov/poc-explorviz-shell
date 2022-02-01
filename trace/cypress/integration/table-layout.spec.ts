describe('Table Layout', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render table labels correctly', () => {
    cy.get('[data-cy=traceId]').should('have.text', 'Trace ID');
    cy.get('[data-cy=firstClazz]').should('have.text', ' First Clazz ');
    cy.get('[data-cy=lastClazz]').should('have.text', ' Last Clazz ');
  });

  it('should open table row and display labels correctly', () => {
      cy.get('[data-cy=trace-row]').first().click();
      cy.get('[data-cy=trace-replayer-title]').should(
        'have.text',
        ' Trace Replayer\n'
      );
  });
});
