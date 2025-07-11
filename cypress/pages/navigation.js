/// <reference types="cypress" />
import { navSelectors } from "../components/navigationComponents";

class NavigationHome {
    visit() {
        cy.visit('/');
    }
};
class NavigationSweets {
    visit() {
        cy.visit('/sweets');
    }
};
class NavigationAbout {
    visit() {
        cy.visit('/about');
    }
};
class NavigationLogin {
    visit() {
        cy.visit('/login');
    }
};
class NavigationBasket {
    visit() {
        cy.visit('/basket');
    }
};

export default {NavigationHome, NavigationSweets, NavigationAbout, NavigationLogin, NavigationBasket};
