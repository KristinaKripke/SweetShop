/// <reference types="cypress" />

export const BasketPageSelectors = {
    title: "h1.display-3",
    description: "p.lead",
    billingSection: "h4:contains('Billing address')",
    paymentSection: "h4:contains('Payment')",
    total: "span:contains('Total (GBP)')",
    delivery: "h4:('Delivery')",
    radioCollect: "label[for='exampleRadios1']",
    radioStandard: "label[for='exampleRadios2']",
    promoCode: "input[placeholder='Promo code']",
    checkoutButton: "button.btn-primary"
}