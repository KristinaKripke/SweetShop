/// <reference types="cypress" />

export const LoginPageSelectors = {
    title: 'h1.display-3',
    description: 'p.lead',
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    socials: '.social',
    loginInSuccess: 'span.text-muted',
    submit: 'button'
}