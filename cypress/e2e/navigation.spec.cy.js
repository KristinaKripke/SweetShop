/// <reference types="cypress" />
import {NavigationHome, NavigationSweets, NavigationAbout, NavigationLogin, NavigationBasket} from '../pages/navigation';

describe('Navigation from home page', () => {
    const navigationHome = new NavigationHome();
    beforeEach(() => {
        navigationHome.visit();
    });

    it('Should navigate from home page to Sweets page', () => {
        cy.get(navigationHome.selector.sweets).eq(0).click();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from home page to About page', () => {
        cy.get(navigationHome.selector.about).eq(1).click();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should navigate from home page to Login page', () => {
        cy.get(navigationHome.selector.login).eq(2).click();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
    it('Should navigate from home page to Basket page', () => {
        cy.get(navigationHome.selector.basket).eq(3).click();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Your Basket');
    });
});

describe('Navigation from sweets page', () => {
    const navigationSweets = new NavigationSweets();
    beforeEach(() => {
        navigationSweets.visit();
    });

    it('Should navigate from sweets page to home page', () => {
        cy.get(navigationSweets.selector.home).click();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from sweets to about page', () => {
        cy.get(navigationSweets.selector.about).eq(1).click();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should navigate from sweets to Login page', () => {
        cy.get(navigationSweets.selector.login).eq(2).click();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
        it('Should navigate from sweets to Basket page', () => {
        cy.get(navigationSweets.selector.basket).eq(3).click();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from about page', () => {
    const navigationAbout = new NavigationAbout();
    beforeEach(() => {
        navigationAbout.visit();
    });

    it('Should navigate from about page to home page', () => {
        cy.get(navigationAbout.selector.home).click();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from about to sweets page', () => {
        cy.get(navigationAbout.selector.sweets).eq(0).click();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from about to login page', () => {
        cy.get(navigationAbout.selector.login).eq(2).click();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
        it('Should navigate from about to Basket page', () => {
        cy.get(navigationAbout.selector.basket).eq(3).click();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from login page', () => {
    const navigationLogin = new NavigationLogin();
    beforeEach(() => {
        navigationLogin.visit();
    });

    it('Should navigate from login page to home page', () => {
        cy.get(navigationLogin.selector.home).click();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from login to sweets page', () => {
        cy.get(navigationLogin.selector.sweets).eq(0).click();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from login to about page', () => {
        cy.get(navigationLogin.selector.about).eq(1).click();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
        it('Should navigate from login to Basket page', () => {
        cy.get(navigationLogin.selector.basket).eq(3).click();
        cy.url().should('include', '/basket');
        cy.get('h1').should('be.visible').and('contain.text', 'Basket');
    });
});

describe('Navigation from basket page', () => {
    const navigationBasket = new NavigationBasket();
    beforeEach(() => {
        navigationBasket.visit();
    });

    it('Should navigate from basket page to home page', () => {
        cy.get(navigationBasket.selector.home).click();
        cy.get('h1').should('be.visible').and('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should navigate from basket to sweets page', () => {
        cy.get(navigationBasket.selector.sweets).eq(0).click();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
    it('Should navigate from basket to about page', () => {
        cy.get(navigationBasket.selector.about).eq(1).click();
        cy.url().should('include', '/about');
        cy.get('h1').should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
        it('Should navigate from basket to login page', () => {
        cy.get(navigationBasket.selector.login).eq(2).click();
        cy.url().should('include', '/login');
        cy.get('h1').should('be.visible').and('contain.text', 'Login');
    });
});