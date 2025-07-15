/// <reference types="cypress" />
import { navSelectors } from "../components/navigationComponents";

class NavigationHome {
    constructor () {
        this.selector = navSelectors;
    }

    visit() {
        cy.visit('/');
    }
};
class NavigationSweets {
    constructor () {
        this.selector = navSelectors;
    }

    visit() {
        cy.visit('/sweets');
    }
};
class NavigationAbout {
    constructor () {
        this.selector = navSelectors;
    }

    visit() {
        cy.visit('/about');
    }
};
class NavigationLogin {
    constructor () {
        this.selector = navSelectors;
    }

    visit() {
        cy.visit('/login');
    }
};
class NavigationBasket {
    constructor () {
        this.selector = navSelectors;
    }
    
    visit() {
        cy.visit('/basket');
    }
};

export default {NavigationHome, NavigationSweets, NavigationAbout, NavigationLogin, NavigationBasket};


