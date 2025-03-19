import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";
import { LostPasswordPage } from "./lost_password_page.js";

// TODO: zduplikovat (CTRL + C, CTRL + V) login_page.js, nový soubor přejmenovat na: login_page_custom.js
// TODO: Přejmenovat třídu LoginPage na LoginPageCustom v login_page_custom.js
export class LoginPageCustom {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool"; // ! URL se dává pouze do prvního (vstupního) Page Objectu odkud otvíráme aplikaci
    this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.loginButton = customElement("[type='submit']");
    this.lostPasswordAnchor = customElement("#forget_password");
    this.pageHeader = customElement(".form-title");
    this.logoImg = customElement(".login-page-logo img");
    this.alertDiv = customElement(".alert.alert-danger");
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
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
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    return this.clickLogin();
  }

  clickLostPassword() {
    this.lostPasswordAnchor.click();
    return new LostPasswordPage();
  }
}
