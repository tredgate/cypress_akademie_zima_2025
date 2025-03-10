import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Polymporphism Tests", () => {
  it("Logout from Projects page with inherited class", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink()
      .clickDashboard()
      .clickProjectLink()
      .clickDashboard()
      .clickProjectLink()
      .clickDashboard()
      .clickProfile()
      .clickLogout();
  });
});
