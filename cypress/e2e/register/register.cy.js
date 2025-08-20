describe('Fazer Login no sistema', () => {
  beforeEach(()=>{
    cy.start()
  })
  it('Deve cadastrar um usuario no sistema', () => {
    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('h2', 'Cadastro')
        .should('be.visible')

    cy.get('[data-testid="nome"]')
        .type('sergio')

    cy.get('[data-testid="email"]')
        .type('sergio2@teste.com')

    cy.get('[data-testid="password"]')
        .type('sergio')

    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('h1', 'Serverest Store')
  })
  it('Deve cadastrar um usuario no sistema como Admin', () => {
    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('h2', 'Cadastro')
        .should('be.visible')

    cy.get('[data-testid="nome"]')
        .type('sergio')

    cy.get('[data-testid="email"]')
        .type('sergio12@teste.com')

    cy.get('[data-testid="password"]')
        .type('sergio')

    cy.get('.form-check')
        .find('input')
        .check()
        .should('be.checked')
    
    cy.get('[data-testid="cadastrar"]',)
        .click()
    
    cy.contains('Cadastro realizado com sucesso')

    cy.contains('h1', 'Bem Vindo', {temiout: 5000})
        .should('be.visible')
  })
  it('Não deve cadastrar um usuario no sistema com Email existente', () => {
    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('h2', 'Cadastro')
        .should('be.visible')

    cy.get('[data-testid="nome"]')
        .type('sergio')

    cy.get('[data-testid="email"]')
        .type('sergio@teste.com')

    cy.get('[data-testid="password"]')
        .type('sergio')

    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('span', 'Este email já está sendo usado')
        .should('be.visible')
  })
  it('Deve monstrar um messagem de erro dos campos obrigatorios', () => {
    cy.get('[data-testid="cadastrar"]')
        .click()

    cy.contains('h2', 'Cadastro')
        .should('be.visible')

    cy.get('[data-testid="cadastrar"]')
        .click()

    const messages = [
        'Nome é obrigatório',
        'Email é obrigatório',
        'Password é obrigatório'
    ]
    messages.forEach((message)=>{
        cy.contains('span', message)
            .should('be.visible')
    })
  })
})