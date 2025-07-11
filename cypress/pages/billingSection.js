/// <reference types="cypress" />
import { billingSectionSelectors } from "../components/billingSectionComponents";

class BillingPage {
    visit() {
        cy.visit('/basket');
    };
};

export default BillingPage;