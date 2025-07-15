/// <reference types="cypress" />
import BillingPage from '../pages/billingSection';

describe('Billing section', () => {
    const billingPage = new BillingPage();
    beforeEach(() => {
        billingPage.visit();
    });

    it('Should have First name input field', () => {
        cy.get(billingPage.selector.firstName).should('be.visible');
    });
    it('Should have Last name input field', () => {
        cy.get(billingPage.selector.lastName).should('be.visible');
    });
    it('Should have Email input field', () => {
        cy.get(billingPage.selector.email).should('be.visible');
    });
    it('Should have Address input field', () => {
        cy.get(billingPage.selector.address).should('be.visible');
    });
    it('Should have Address 2 input field', () => {
        cy.get(billingPage.selector.address2).should('be.visible');
    });
    it('Should have Country list', () => {
        cy.get(billingPage.selector.country).should('be.visible');
    });
    it('Should have City list', () => {
        cy.get(billingPage.selector.city).should('be.visible');
    });
    it('Should have Zip input field', () => {
        cy.get(billingPage.selector.zip).should('be.visible');
    });
});