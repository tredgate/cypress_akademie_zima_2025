import { HeaderSection } from "./common/header_section.js";
import { ProjectsPage } from "./projects_page.js";

export class DashboardPage extends HeaderSection {
  constructor() {
    super(); // ? super() - provolání děděného constructoru, je povinný a musí být vždy v constructor() na prvním místě.
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
