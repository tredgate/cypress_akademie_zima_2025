//debug.cy.js

describe("Debugging", () => {
  it("Debug Mode in Cypress", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024").debug(); // ? Debug (zastavení testu) type()
    cy.get("#password").debug().type("Zima2024Cypress"); // ? Debug get
    cy.get(".btn").click().debug();
  });

  it.skip("Using pause Function", () => {
    // ! Skip je, protože by nám pause() v budoucnu rozbila cloudový běh. Pauza by se nikdy neměla dostat do gitu. Pokud se tak stane, je potřeba ji obratem smazat nebo deaktivovat test.
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").pause().type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress").pause();
    cy.get(".btn").click();
  });
});
