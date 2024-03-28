

describe("automationteststore test cases", () => {
    it("Login or register", () => {
      cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top > li > a").contains( "Login or register").click();
    cy.get(".newcustomer > .heading2").should("be.visible");
    cy.get("#accountFrm > fieldset > .btn").click();
    cy.get('#AccountFrm_firstname').type('khato');
    cy.get("#AccountFrm_city").type("zugdidi");
    cy.get("#AccountFrm_country_id").select("Georgia");
    cy.get("#AccountFrm_postcode").type("2100");
    cy.get("#AccountFrm_loginname").type("nino-nino1555552");
    cy.get("#AccountFrm_password").type(123456);
    cy.get("#AccountFrm_newsletter1").should("have.value", "1").check();
    cy.get("#AccountFrm_agree").check();
    cy.get(".col-md-2 > .btn").click();
    cy.get('.alert').should('be.visible')
    //cy.get('.alert').type('This login name is not available. Try different login name!')
    
   
  });
});
