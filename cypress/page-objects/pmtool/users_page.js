//users_page.js

import { customElement } from "../../helpers/custom_element.js";
import { HeaderSection } from "./common/header_section.js";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = customElement("h3.page-title");
    this.addUserButton = customElement('[test_id="Add User"]');
  }

  pageTitleIsVisible() {
    this.pageTitle.isVisible();
    return this;
  }

  pageTitleHaveText(pageTitleText) {
    this.pageTitle.haveText(pageTitleText);
    return this;
  }

  addUserButtonIsVisible() {
    this.addUserButton.isVisible();
    return this;
  }

  addUserButtonHaveText(addUserButtonText) {
    this.addUserButton.haveText(addUserButtonText);
    return this;
  }
}
