import { customElement } from "../../helpers/custom_element.js";

export class AccountsPage {
  constructor() {
    this.pageTitle = customElement('h1[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.pageTitle.haveText(titleText);
    return this;
  }
}
