import { customElement } from "../../helpers/custom_element.js";
import { AccountsPage } from "./accounts_page.js";

export class DashboardPage {
  constructor() {
    cy.intercept("/accounts/user/**").as("tegb_accounts_api");
    this.accountsButton = customElement(
      'li[data-testid="accounts_section_link"]'
    );
  }

  clickAccounts() {
    this.accountsButton.click();
    cy.wait("@tegb_accounts_api");
    return new AccountsPage();
  }
}
