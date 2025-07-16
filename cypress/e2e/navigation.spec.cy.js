/// <reference types="cypress" />
import {Navigation} from '../pages/navigation';

describe('Navigation from home page', () => {
    const navigationHome = new Navigation();
    beforeEach(() => {
        navigationHome.visit();
    });

    it('Should navigate from home page to Sweets page', () => {
        navigationHome.navigateToSweets();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from home page to About page', () => {
        navigationHome.navigateToAbout();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should navigate from home page to Login page', () => {
        navigationHome.navigateToLogin();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
    it('Should navigate from home page to Basket page', () => {
        navigationHome.navigateToBasket();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Your Basket');
    });
});

describe('Navigation from sweets page', () => {
    const navigationSweets = new Navigation();
    beforeEach(() => {
        navigationSweets.visit('sweets');
    });

    it('Should navigate from sweets page to home page', () => {
        navigationSweets.navigateToHome();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from sweets to about page', () => {
        navigationSweets.navigateToAbout();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should navigate from sweets to Login page', () => {
        navigationSweets.navigateToLogin();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
        it('Should navigate from sweets to Basket page', () => {
        navigationSweets.navigateToBasket();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from about page', () => {
    const navigationAbout = new Navigation();
    beforeEach(() => {
        navigationAbout.visit('about');
    });

    it('Should navigate from about page to home page', () => {
        navigationAbout.navigateToHome();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from about to sweets page', () => {
        navigationAbout.navigateToSweets();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from about to login page', () => {
        navigationAbout.navigateToLogin();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
        it('Should navigate from about to Basket page', () => {
        navigationAbout.navigateToBasket();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from login page', () => {
    const navigationLogin = new Navigation();
    beforeEach(() => {
        navigationLogin.visit('login');
    });

    it('Should navigate from login page to home page', () => {
        navigationLogin.navigateToHome();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from login to sweets page', () => {
        navigationLogin.navigateToSweets();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from login to about page', () => {
        navigationLogin.navigateToAbout();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
        it('Should navigate from login to Basket page', () => {
        navigationLogin.navigateToBasket();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from basket page', () => {
    const navigationBasket = new Navigation();
    beforeEach(() => {
        navigationBasket.visit('basket');
    });

    it('Should navigate from basket page to home page', () => {
        navigationBasket.navigateToHome();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from basket to sweets page', () => {
        navigationBasket.navigateToSweets();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from basket to about page', () => {
        navigationBasket.navigateToAbout();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
        it('Should navigate from basket to login page', () => {
        navigationBasket.navigateToLogin();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
});