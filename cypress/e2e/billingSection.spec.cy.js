/// <reference types="cypress" />
import BillingPage from '../pages/billingSection';
import { billingSectionSelectors } from '../components/billingSectionComponents';

describe('Billing section', () => {
    const billingPage = new BillingPage();
    beforeEach(() => {
        billingPage.visit();
    });

    it('Should have First name input field', () => {
        cy.get(billingSectionSelectors.firstName).should('be.visible');
    });
    it('Should have Last name input field', () => {
        cy.get(billingSectionSelectors.lastName).should('be.visible');
    });
    it('Should have Email input field', () => {
        cy.get(billingSectionSelectors.email).should('be.visible');
    });
    it('Should have Address input field', () => {
        cy.get(billingSectionSelectors.address).should('be.visible');
    });
    it('Should have Address 2 input field', () => {
        cy.get(billingSectionSelectors.address2).should('be.visible');
    });
    it('Should have Country list', () => {
        cy.get(billingSectionSelectors.country).should('be.visible');
    });
    it('Should have City list', () => {
        cy.get(billingSectionSelectors.city).should('be.visible');
    });
    it('Should have Zip input field', () => {
        cy.get(billingSectionSelectors.zip).should('be.visible');
    });
});