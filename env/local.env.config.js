const baseConfig = require("../cypress.config.js");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://google.com",
    eshop_url: "https://seznam.cz",
    webtrain_url: "https://ministryoftesting.com",
    automation_test_store_url: "https://irozhlas.cz",
  },
};

/*
Vytvořte nový konfig pro prostředí prod: prod.env.config.js
Vložte do něj proměnné na url pro skutečné aplikace:
pmtool
eshop
webtrain
automationteststore
Spusťte Cypress s prod konfiguračním souborem a zkontrolujte, že se vám nahrál prod.env.config.js soubor jako konfigurační
Zkuste pustit testy environments_variables_tests.cy.js
*/
