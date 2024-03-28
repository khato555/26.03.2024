describe("automationteststore test cases", () => {
  it("Login or register", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top > li > a").contains( "Login or register").click();
    cy.get(".newcustomer > .heading2").should("be.visible");
    cy.get("#accountFrm > fieldset > .btn").click();
    cy.get("#AccountFrm_firstname").type("nino9");
    cy.get("#AccountFrm_lastname").type("ninoshvili");
    cy.get("#AccountFrm_email").type("n.de1777@gmail.com");
    cy.get("#AccountFrm_address_1").type("walenjixa");
    cy.get("#AccountFrm_city").type("zugdidi");
    cy.get("#AccountFrm_country_id").select("Georgia");
    cy.get("#AccountFrm_zone_id").select("Samegrelo-Zemo Svaneti");
    cy.get("#AccountFrm_postcode").type("2100");
    cy.get("#AccountFrm_loginname").type("nino-nino1777");
    cy.get("#AccountFrm_password").type(1234566);
    cy.get("#AccountFrm_confirm").type(1234566);
    cy.get("#AccountFrm_newsletter1").should("have.value", "1").check();
    cy.get("#AccountFrm_agree").check();
    cy.get(".col-md-2 > .btn").click();
    cy.get(".column_right ").contains("h2","My Account").should("be.visible");
    cy.get(".block_2").contains("a","Welcome back nino9").should("be.visible");
    cy.get('#topnav > .form-control').select('Specials')
    cy.contains('Special Offers').should('exist')


   

  });
});
