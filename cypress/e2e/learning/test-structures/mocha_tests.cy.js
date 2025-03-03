import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha tests", () => {
    beforeEach(() => {
        cy.log("runs before every test")
        cy.viewport(800, 600)

    });
    it("Visit pmtool", () => {
        new LoginPage().openPmtool();
    });

    it("Pmtool login", () => {
        new LoginPage().openPmtool()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
        .clickLogin();
    });
    afterEach(() => {
        cy.log("Function afterEach called")
    });
});