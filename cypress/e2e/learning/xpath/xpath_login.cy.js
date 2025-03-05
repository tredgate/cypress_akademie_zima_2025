/*
Složka
cypress/e2e/learning/xpath
Test soubor
xpath_login.cy.js
Test suite
Learning XPath
Test
Login with Xpath Selectors
*/

describe("Learning XPath", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.xpath("//input[@id='username']").type("cypress_zima_2024");
    cy.xpath("//input[@id='password']").type("Zima2024Cypress");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//li[@id='user_dropdown']/a").click();
    cy.xpath("//li[@id='logout']/a").click();
    //  cy.xpath("//i[@class='fa fa-angle-down']").click();
    //  cy.xpath("//i[@class='fa fa-sign-out']").click();
  });
});
/*
Cvičení ⌛19:53:
Dokončete test, který se přihlásí a následně odhlásí pomocí XPath.

 */
