export class UserApi {
  register(username, password, email) {
    // ? Return děláme z toho důvodu, abychom následně mohli provádět například expecty v testu nebo jiné akce
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/user/register",
      body: {
        username,
        password,
        email: email, // ? pokud má property stejný název jako hodnota (například: email: email), stačí zadat jen email viz výše property username, password
      },
    });
  }

  login(username, password) {
    return cy
      .request({
        method: "POST",
        url: Cypress.env("tegb_api_url") + "/auth/login",
        body: {
          username,
          password,
        },
      }) // ? Tady můžu udělat i then s expecty, return to neovlivní, protože then opět vrátí response objekt
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  }
}
