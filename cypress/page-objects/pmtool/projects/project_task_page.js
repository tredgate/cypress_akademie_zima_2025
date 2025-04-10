// project_task_page.js
//page-objects/pmtool/projects/project_task_page.js

import { HeaderSection } from "../common/header_section.js";
import { ProjectInfoPage } from "./project_info_page.js";

export class ProjectTaskPage extends HeaderSection {
  // ? constructor(projectId="") <== použití výchozí hodnoty pro parametr projectId. Kdokoliv tento objekt zakládá může, ale nemusí poslat projectId. Pokud ho nepošle, parametru projectId se přiřadí hodnota ""
  // * Příklady:
  // *    new ProjectTaskPage("1234"); // parametru projectId se přiřadí hodnota "1234"
  // *    new ProjectTaskPage(); // parametru projectId se přiřadí výchozí hodnota ""
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}}/22`);
    this.projectInfoAnchor = ".navbar-header .navbar-brand";
  }

  clickProjectInfo() {
    cy.get(this.projectInfoAnchor).click();
    return new ProjectInfoPage();
  }
}
