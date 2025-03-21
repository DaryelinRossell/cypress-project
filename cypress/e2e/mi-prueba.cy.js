describe('Mi primera prueba en Cypress', () => {
    it('Visita la página de inicio de Google', () => {
        cy.visit('https://www.google.com');
        cy.title().should('include', 'Google');
    });
});