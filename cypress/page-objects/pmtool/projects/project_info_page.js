import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectNameDiv = ".portlet-title .caption";
    this.idDivXPath = '//th[text()="Status"]/..//div';
    this.startDateTdXPath = '//th[text()="Start Date"]/../td';
    this.dateAddedTdXPath = '//th[text()="Date Added"]/../td';
    this.createdBySpanXPath = '//th[text()="Created By"]/..//span';
    this.statusDivXpath = '//th[text()="Status"]/..//div';
    this.priorityDivXpath = '//th[text()="Priority"]/..//div';
  }

  projectNameHaveText(projectName) {
    cy.get(this.projectNameDiv).should("contain.text", projectName);
    return this;
  }

  startDateHaveText(startDate) {
    cy.xpath(this.startDateTdXPath).should("have.text", startDate);
    return this;
  }

  dateAddedHaveText(dateAdded) {
    cy.xpath(this.dateAddedTdXPath).should("contain.text", dateAdded);
    return this;
  }

  createdByHaveText(createdBy) {
    cy.xpath(this.createdBySpanXPath).should("have.text", createdBy);
    return this;
  }

  statusHaveText(status) {
    cy.xpath(this.statusDivXpath).should("have.text", status);
    return this;
  }

  priorityHaveText(priority) {
    cy.xpath(this.priorityDivXpath).should("have.text", priority);
    return this;
  }
}
