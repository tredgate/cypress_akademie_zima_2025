import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/user_api.js";

describe("Send HTTP Requests Tests", () => {
  it("POST registration TEG#B", () => {
    const username = faker.internet.username();
    const password = faker.internet.password({ length: 20 });
    const email = faker.internet.exampleEmail();

    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username,
        password,
        email: email, // ? pokud má property stejný název jako hodnota (například: email: email), stačí zadat jen email viz výše property username, password
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.userId).to.be.ok;
      //? Alternativa k .to.be.ok
      expect(response.body).to.have.property("userId");
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.be.a("string");
    });

    // ? V rámci testu s posíláním requestů můžeme používat i standardní frontedové Cypress kroky a zkombinovat API i frontend testy
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(username);
    cy.get("input[data-testid='password']").type(password);
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it.only("Register and Login with API objects", () => {
    const username = faker.internet.username();
    const password = faker.internet.password({ length: 20 });
    const email = faker.internet.exampleEmail();

    const userApi = new UserApi();
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      expect(response.body.access_token).to.be.ok;
    });
  });
});
