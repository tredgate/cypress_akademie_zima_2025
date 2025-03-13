//base_page.js
// složka: cypress/page-objects/pmtool/common

export class BasePage {
  // ? pmtoolUrl + path => například "https://example.com" + "/search" // návštěva stránky search v example.com
  // ? pmtoolUrl - bude uložený v BasePage
  // ? path - bude předávat pageObject pomocí constructoru. Využijeme situace, že v rámci extends musíme vždy zavolat constructor rodiče pomocí příkazu super() a dáme do něj parametr

  constructor(path) {
    // ? extendovaná page musí volat super("path");
    this.baseUrl = "https://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    const finalUrl = this.baseUrl + this.path; // ? "https://tredgate.com/pmtool/index.php?" + "path" = "https://tredgate.com/pmtool/index.php?path"
    cy.visit(finalUrl);
    return this;
  }
}
