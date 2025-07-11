/// <reference types="cypress" />
import HomePage from '../pages/homePage';
import { HomePageSelectors } from '../components/homePageComponents';

describe('Home page', () => {
    const homePage = new HomePage();
    beforeEach(() => {
        homePage.visit();
    });

    
});