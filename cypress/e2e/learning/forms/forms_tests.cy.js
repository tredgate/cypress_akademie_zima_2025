describe("Forms tests", () => {

    beforeEach(() => {
        cy.visit("https://tredgate.com/webtrain/registration.html");
    });

    it("Check radio button", () => {
        cy.get("input[name='subscription']").check("basic");
        cy.get("#basic").should("be.checked");
    });

    it("Check 2 interest", () => {
        cy.get("input[name='interests[]']").check("sports");
        cy.get("#interests-sports").should("be.checked");
        cy.get("input[name='interests[]']").check("reading");
        cy.get("#interests-reading").should("be.checked");

        cy.get("input[name='interests[]']").check(["sports","reading", "music"]);
    });

    it("Check and uncheck checkbox", () => {
        cy.get("input[name='interests[]']").check("sports");
        cy.get("#interests-sports").should("be.checked");
        cy.get("input[name='interests[]']").uncheck("sports");
        cy.get("#interests-sports").should("not.be.checked");
    });

    it("Clear and fill name", () => {
        cy.get("#name").clear().type("Martin");
        cy.get("#name").should("have.value", "Martin");
    });

    it("Select female gender", () => {
        cy.get("#gender").select("female");
        cy.get("#gender").should("have.value", "female");
    });

    it("Submit form", () => {
        cy.get("form").submit();
        cy.get("#message-box")
        .should("be.visible")
        .and("have.text", "Form submitted successfully!");
    });

    it("Upload file fixtures", () => {
        cy.fixture("test.txt", {encoding: null}).as("uploadFile");
        cy.get("input[type='file']").selectFile("@uploadFile");
    });

    it("Type date", () => {
        cy.get("#datepicker").type("1990-12-31");
        cy.get("#datepicker").should("have.value", "1990-12-31");
    });
    
});