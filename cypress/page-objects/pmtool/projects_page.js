import { customElement } from "../../helpers/custom_element.js";
import { HeaderSection } from "./common/header_section.js";
import { CreateNewProjectModal } from "./create_new_project_modal";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = customElement('button[test_id="Add Project"]');
  }

  clickAddProject() {
    this.addProjectButton.click();
    // cy.get(this.addProjectButton).click(); // ? this.addProjectButton je zmigrovaný na customElement, cy.get() již nebude na něm fungovat
    return new CreateNewProjectModal();
  }
}
