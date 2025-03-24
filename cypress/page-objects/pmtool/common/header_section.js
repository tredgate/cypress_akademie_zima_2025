//header_section.js
//page-objects/pmtool/common
import { LoginPage } from "../login_page.js";
import { MenuSection } from "./menu_section.js";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
/*
Vytvořte nový testovací soubor polymorphism_tests.cy.js ve složce e2e/exercises
Vytvořte nový test, který:
Otevře a přihlásí se do Pmtool
Otevře Projects
Odhlásí se

*/
