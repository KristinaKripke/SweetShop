/// <reference types="cypress" />
import { LoginPageSelectors } from "../components/loginPageComponents";

class LoginPage {
    visit() {
        cy.visit('/login');
    };
};

export default LoginPage;