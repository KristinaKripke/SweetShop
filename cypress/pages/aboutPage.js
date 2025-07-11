/// <reference types="cypress" />
import { AboutPageSelectors } from "../components/aboutPageComponents";

class AboutPage {
    visit() {
        cy.visit('/about');
    };
};

export default AboutPage;