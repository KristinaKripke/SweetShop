/// <reference types="cypress" />
import { navigationSelectors } from "../components/navigationComponents";

class Navigation {
    visit() {
        cy.visit('/');
    };

};
export default Navigation;