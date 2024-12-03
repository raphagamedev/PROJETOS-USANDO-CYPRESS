Cypress.Commands.add('cadastrar', (nome, email, password) => { 
        
    cy.get('[data-test="input-name"]').type(nome);
    cy.wait(3000);
    cy.get('[data-test="input-email"]').type(email);
    cy.wait(3000);
    cy.get('[data-test="input-password"]').type(password);
    cy.wait(3000);
    cy.get('[data-test="input-confirm-password"]').type(password);
    cy.wait(3000);
    cy.get('[data-test="submit-button"]').click({ force: true });


    
 })

Cypress.Commands.add('login', (email, password) => { 
        
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.wait(3000);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.wait(3000);
    cy.get('[data-test="submit-button"]').click({ force: true });
    cy.wait(10000);

 })


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//                 
// Cypress.Commands.add('login', (email, password) => {... })
//  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })