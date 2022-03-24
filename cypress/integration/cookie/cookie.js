describe('Cookies', () => {
    describe('Cookie message', () => {
      it('Cookie message', () => {
        cy.visit('https://www.svt.se/barnkanalen/');
        cy.contains('a', 'Om cookies och personuppgifter').should('be.visible');
        cy.get('[class="svt-cookie_holder__text"]').should('be.visible');
        cy.contains('Jag förstår').click();
        cy.getCookie('svt-cookies-information').should('have.property', 'value', '1.0.0');
        cy.get('[class="svt-cookie_holder__text"]').should('not.be.visible');
      });
    });
  
    describe('Already approved cookies', () => {
      it('No cookie-message', () => {
        cy.setCookie('svt-cookies-information', '1.0.0');
        cy.visit('https://www.svt.se/barnkanalen/');
        cy.get('[class="svt-cookie_holder__text"]').should('not.exist');
      });
    });
  });
  