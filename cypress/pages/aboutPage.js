/// <reference types="cypress" />
import { AboutPageSelectors } from "../components/aboutPageComponents";


class AboutPage {
    selector = {
    title: 'h1.display-3',
    description: 'p.lead',
    banner: 'div.container',
    bannerText: 'p.text-center'
}

    visit() {
        cy.visit('/about');
    };
};

export default AboutPage;