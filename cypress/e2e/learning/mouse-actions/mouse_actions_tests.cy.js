//mouse_actions_tests.cy.js

describe("Mouse actions tests", () => {
  // ? Context je synonymem describe (stejná funkcionalita) a umožňuje nám vytvořit pod skupiny (podsložky) v testech. Toto se nám hodí například ve chvíli, kdy máme velké množství testů (desítky) v jednom describe a potřebujeme je zpřehlednit a zlepšit čitelnost například v reportu
  context("Webtrain tests", () => {
    beforeEach(() => {
      cy.visit("https://tredgate.com/webtrain");
    });

    it("Scroll into view", () => {
      cy.get("h1").scrollIntoView().should("be.visible"); // ? jednotlivé příkazy Cypress jsou řetězitelné, to znamená, že na jednom prvku můžu volat více akcí. Buď je naskládám za sebe nebo použiju spojovací funkci and(), která je v příkazu většinou jen pro zlepšení čitelnosti, například: cy.get("input").type("test").should("have.value", "test")
    });
  });

  context("WebDriver University Tests", () => {
    beforeEach(() => {
      cy.visit("https://webdriveruniversity.com/Actions/index.html");
    });

    it("Double Click Test", () => {
      cy.get("#double-click").dblclick();
    });

    it("Click and Hold Test", () => {
      cy.get("#click-box").trigger("mousedown");
      cy.wait(5000);
      cy.get("#click-box").trigger("mouseup");
    });

    it("Drag and drop tests", () => {
      cy.get("#draggable").trigger("mousedown", { which: 1 });
      cy.get("#droppable")
        .trigger("mousemove")
        .trigger("mouseup", { force: true });
    });

    it("Real Hover Test", () => {
      cy.get(".hover .dropbtn")
        .realHover()
        .then(() => {
          cy.wait(2000); // ? používáme pouze v rámci kurzu, kde si chceme v Cypressu ukázat, že je na prvek opravdu najeto. V reálném projektu byste wait nedávali.
          cy.get("div[class='dropdown hover'] a[class='list-alert']").click();
        });
    });
  });
});
