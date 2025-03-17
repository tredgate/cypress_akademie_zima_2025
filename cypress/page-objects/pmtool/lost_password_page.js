import { BasePage } from "./common/base_page.js";
import { LoginPage } from "./login_page.js";

export class LostPasswordPage extends BasePage {
  constructor() {
    super("module=users/restore_password");
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.submitButton = '[type="submit"]';
    this.backButton = "#back-btn";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
    return new LoginPage();
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
