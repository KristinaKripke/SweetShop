/// <reference types="cypress" />
import { BasketPageSelectors } from "../components/aboutPageComponents";

class BasketPage {

    constructor () {
        this.title = BasketPageSelectors.title,
        this.description = BasketPageSelectors.description
    /* billingSection: "h4:contains('Billing address')",
    paymentSection: "h4:contains('Payment')",
    total: "span:contains('Total (GBP)')",
    delivery: "h4:('Delivery')",
    radioCollect: "label[for='exampleRadios1']",
    radioStandard: "label[for='exampleRadios2']",
    promoCode: "input[placeholder='Promo code']",
    checkoutButton: "button.btn-primary" */
    }

    visit() {
        cy.visit('/basket');
    };
};

export default BasketPage;