import { HeaderSection } from "./common/header_section.js";

export class DashboardPage extends HeaderSection {
  constructor() {
    // ? Parametr path "module=dashboard/dashboard" přidáváme z toho důvodu, abychom v testu mohli např. Dashboard otevřít napřímo: new DashboardPage().visit();

    super("module=dashboard/dashboard"); // ? super() - provolání děděného constructoru, je povinný a musí být vždy v constructor() na prvním místě.

    this.welcomePageHeader = "#welcome-page-header";

    // ! Assert v constructoru nemůžeme použít, pokud máme funkcionalitu přímého otevření (BasePage.visit)
    // ! když zavoláme new Dashboard().visit(), tak se nejdříve vyhodnocuje constructor a až potom visit() a to znamená, že před tím než stránku otevřeme už kontrolujeme nějaký assert, což znamená, že assert selže.
    // cy.get(this.welcomePageHeader).should("be.visible");

    // ? Pokud chci kontrolovat načtení stránky, potom je potřeba vytvořit samostatnou metodu, která se bude ručně provolávat.

    /*
    Proces využití path v BasePage
    situace: jsem v projectsPage a chci napřímo otevřít Dashboard page:  
    new DashboardPage().visit()
    
    Kroky:
     1. Zavolání konstruktoru DashboardPage (jsem stále v Projects)
     2. V constructoru je assert na viditelnost welcomePageHeader
     3. Timeout na assert (jsme stále v Projects)
     4. Až po constructoru by se zavolal visit()
    */
  }
  welcomePageHeaderIsVisible() {
    cy.get(this.welcomePageHeader).should("be.visible");
    return this;
  }
}

/*

Cvičení - příprava ProjectsPage ⌛3:00:
Připravte stejným stylem objekt ProjectsPage.

*/
