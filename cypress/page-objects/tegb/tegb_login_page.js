import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";

export class TegBLoginPage {
  constructor() {
    this.url = Cypress.env("tegb_url");
    this.usernameInput = customElement("input[data-testid='username']");
    this.passwordInput = customElement("input[data-testid='password']");
    this.loginButton = customElement("button[data-testid='log_in']");
    cy.intercept("/auth/login").as("tegb_login_api");
  }

  openTegb() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    cy.wait("@tegb_login_api");
    return new DashboardPage();
  }
}
