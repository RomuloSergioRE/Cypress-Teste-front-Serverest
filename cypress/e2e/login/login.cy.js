describe('Fazer Login no sistema', () => {
  beforeEach(()=>{
    cy.start()
  })
  it('Deve fazer login no sistema com Email e Senha validos', () => {
    cy.loginEmailPassword('romulo2@gmail.com', 'teste')

    cy.contains('h1','Serverest Store')
      .should('be.visible')
  })
  it('Não deve fazer login no sistema com Email invalido', () => {
    cy.loginEmailPassword('romulo2@teste.com', 'teste')
    
    cy.contains('span', 'Email e/ou senha inválidos')
        .should('be.visible')
  })
  it('Não deve fazer login no sistema com Senha invalida', () => {
    cy.loginEmailPassword('romulo2@gmail.com', 'tedasdste')
    cy.contains('span', 'Email e/ou senha inválidos')
        .should('be.visible')
  })
  it('Não deve fazer login no sistema somente com o Email', () => {
    cy.get('[data-testid="email"]')
      .type('romulo2@gmail.com')

    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.contains('span', 'Password é obrigatório')
        .should('be.visible')
  })  
  it('Não deve fazer login no sistema somente com a Senha', () => {
    cy.get('[data-testid="senha"]')
      .type('teste2')

    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.contains('span', 'Email é obrigatório')
        .should('be.visible')
  })  
  it('Deve verificar se aparece uma mesagem de campos Email e Senha são obrigatorios ao tentar entrar', () => {
    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.contains('span', 'Email é obrigatório')
        .should('be.visible')

    cy.contains('span', 'Password é obrigatório')
        .should('be.visible')
  })

})