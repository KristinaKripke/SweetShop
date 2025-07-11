/// <reference types="cypress" />
import { BillingSectionSelectors } from "../components/BillingSectionComponents";

class BillingPage {
    visit() {
        cy.visit('/basket');
    };
};

export default BillingPage;