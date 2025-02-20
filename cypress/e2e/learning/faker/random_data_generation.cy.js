//random_data_generation.cy.js;
//složka: faker

import { faker } from "@faker-js/faker";

describe("Data generation with Faker", () => {
  it("Generate unique test data for user registration", () => {
    const generatedFirstName = faker.person.firstName();
    const generatedLastName = faker.person.lastName();
    const generatedEmail = faker.internet.exampleEmail({
      firstName: generatedFirstName,
      lastName: generatedLastName,
    });

    cy.log(
      `Generated test data: name: ${generatedFirstName} ${generatedLastName}, email: ${generatedEmail}`
    );
  });
});
