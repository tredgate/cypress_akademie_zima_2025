// ? Datová struktura importovaného jsonu: [{}, {}, {}] <= můžeme procyklit Array
import newProjectsData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page.js";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
      .clickProjectLink();
  });

  // ? Cyklíme pole v newProjectsData a data v každém cyklu ukládáme do parametru projectData v šipkové funkci
  newProjectsData.forEach((projectData) => {
    it(`DDT Create Project: ${projectData.description}`, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });
      const startDate = generateStartDate(projectData.start_date, "YYYY-MM-DD");

      cy.log("Project name: " + projectName);
      cy.log("Start date: " + startDate);

      new ProjectsPage()
        .clickAddProject()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeName(projectName)
        .typeStartDate(startDate)
        .clickSave()
        .clickProjectInfo()
        .startDateHaveText(
          generateStartDate(projectData.start_date, "DD/MM/YYYY") // ? V Pmtool se v Project info stránce zobrazuje datum ve formátu: 01/31/2025, musíme tedy znovu vygenerovat datum dle našeho JSON s požadovaným formátem
        )
        .statusHaveText(projectData.status)
        .priorityHaveText(projectData.priority)
        .projectNameHaveText(projectName);
    });
  });
});

function generateStartDate(startDate, format) {
  let generatedDate;
  switch (startDate) {
    case "today":
      generatedDate = moment().format(format);
      break;
    case "tomorrow":
      generatedDate = moment().add(1, "days").format(format);
      break;
    case "yesterday":
      generatedDate = moment().subtract(1, "days").format(format);
      break;
    default:
      throw new Error("Invalid start_date");
  }

  return generatedDate;
}
