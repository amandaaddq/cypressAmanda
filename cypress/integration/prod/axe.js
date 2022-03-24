describe('A11y', () => {
    before(() => {
      cy.visit('https://www.svt.se/barnkanalen/var-med');
      cy.injectAxe();
    });
  
    describe('Accesability', () => {
      it('Check Var med', () => {
        cy.configureAxe({});
        cy.checkA11y();
      });
    });
  
    before(() => {
      cy.visit('https://www.svt.se/barnkanalen/tabla');
      cy.injectAxe();
    });
  
    describe('Accesability', () => {
      it('Check Tabla', () => {
        cy.configureAxe({});
        cy.checkA11y();
      });
    });
  
    before(() => {
      cy.visit('https://www.svt.se/barnkanalen/for-vuxna');
      cy.injectAxe();
    });
  
    describe('Accesability', () => {
      it('Check For Vuxna', () => {
        cy.configureAxe({});
        cy.checkA11y();
      });
    });
  
    before(() => {
      cy.visit('https://www.svt.se/barnkanalen/spel');
      cy.injectAxe();
    });
  
    describe('Accesability', () => {
      it('Check Spel', () => {
        cy.configureAxe({});
        cy.checkA11y();
      });
    });
  });
  