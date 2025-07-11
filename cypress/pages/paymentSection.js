/// <reference types="cypress" />
import { paymentSectionSelectors } from "../components/paymentSectionComponents";

class PaymentPage {
    visit() {
        cy.visit('/basket');
    };
};

export default PaymentPage;