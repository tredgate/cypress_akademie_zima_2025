// reuse_cookies.cy.js
import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/user_api.js";
import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page.js";

describe("Reuse Cookies in TEG#B from API to frontend", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("Register and Login via API", () => {
    const tegb = new TegBLoginPage();
    const userApi = new UserApi();

    tegb.openTegb(); // ! Cookie se ukladá do aktuálně otevřené domény, proto musíme vždy udělat cy.visit před tím, než Cookie ukládáme
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      const accessToken = response.body.access_token;
      // ? Pomocí cy.wrap a aliasu můžeme token uložit a přepoužít v dalších častech testu
      // cy.wrap(accessToken).as("accessToken");
      cy.setCookie("access_token", accessToken); // ? Nastavení cookie s accessToken
    });

    // * Při otevření Tegb by již nemělo být vyžádováno přihlášení
    cy.visit(Cypress.env("tegb_url") + "/app");
  });

  it("Register and Login via API - using alias", () => {
    const tegb = new TegBLoginPage();
    const userApi = new UserApi();

    tegb.openTegb(); // ! Cookie se ukladá do aktuálně otevřené domény, proto musíme vždy udělat cy.visit před tím, než Cookie ukládáme
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      const accessToken = response.body.access_token;
      // ? Pomocí cy.wrap a aliasu můžeme token uložit a přepoužít v dalších častech testu
      cy.wrap(accessToken).as("accessToken");
    });

    cy.get("@accessToken").then((token) => {
      cy.setCookie("access_token", token);
    });

    // * Při otevření Tegb by již nemělo být vyžádováno přihlášení
    cy.visit(Cypress.env("tegb_url") + "/app");
  });
});
