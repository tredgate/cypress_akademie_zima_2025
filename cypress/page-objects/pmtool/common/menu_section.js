//menu_section.js
//page-objects/pmtool/common/
// ! V této tříde nesmí být přímý import na žádnou page, která dědí HeaderSection nebo MenuSection
export class MenuSection {
  constructor() {
    this.projectLink = "#Projects";
    this.dashboardLink = "#dashboard";
  }

  clickProjectLink() {
    const { ProjectsPage } = require("../projects_page.js");
    cy.get(this.projectLink).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    // ? Toto je lazy loading / late binding, umožňuje nám odkazovat se na třídu, která tuto (MenuSection) dědí přímo či nepřímo
    const { DashboardPage } = require("../dashboard_page.js");
    cy.get(this.dashboardLink).click();
    return new DashboardPage();
  }
}
