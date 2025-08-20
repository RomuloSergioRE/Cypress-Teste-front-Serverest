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
// Cypress.Commands.add('login', (email, password) => { ... })
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


Cypress.Commands.add('start', ()=>{
    cy.viewport(1440, 900)
    cy.visit('https://front.serverest.dev/login')
})

//helpers
Cypress.Commands.add('loginEmailPassword', (email, password)=>{
    cy.get('[data-testid="email"]')
      .type(email)

    cy.get('[data-testid="senha"]')
      .type(password)
    
    cy.get('[data-testid="entrar"]')
      .click()
})
Cypress.Commands.add('loginAdmin', ()=>{
    cy.get('[data-testid="email"]')
      .type('sergio12@teste.com')

    cy.get('[data-testid="senha"]')
      .type('sergio')
    
    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.contains('h1', 'Bem Vindo')
        .should('be.visible')
})
Cypress.Commands.add('mensagem', (elemento , mesagem)=>{
    cy.contains(elemento, mesagem)
      .should('be.visible');
})

