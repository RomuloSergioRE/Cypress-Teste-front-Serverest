describe("Criação de produtos", () => {
  beforeEach(() => {
    cy.start();
    cy.loginAdmin();
  });

  it("Deve Cadastrar um produto", () => {

    cy.get("#navbarTogglerDemo01")
        .contains('li', 'Cadastrar Produtos')
        .click()

    cy.contains('h1', 'Cadastro de Produtos')
        .should('be.visible')

    cy.get('[data-testid="nome"]')
        .type('nouse game 2')

    cy.get('[data-testid="preco"]')
        .type('123')

    cy.get('[data-testid="descricao"]')
        .type('um mouse muito usado no mercado para jogos online')

    cy.get('[data-testid="quantity"]')
        .type('3')

    cy.get('[data-testid="imagem"]')
        .selectFile('./cypress/fixtures/mouse.jpeg')

    cy.get('[data-testid="cadastarProdutos"]')
        .click()

    cy.contains('h1', 'Lista dos Produtos')
        .should('be.visible')
  });
  it("Não deve Cadastrar um produto como o mesmo nome", () => {

    cy.get("#navbarTogglerDemo01")
        .contains('li', 'Cadastrar Produtos')
        .click()

    cy.contains('h1', 'Cadastro de Produtos')
        .should('be.visible')

    cy.get('[data-testid="nome"]')
        .type('nouse game 1')

    cy.get('[data-testid="preco"]')
        .type('123')

    cy.get('[data-testid="descricao"]')
        .type('um mouse muito usado no mercado para jogos online')

    cy.get('[data-testid="quantity"]')
        .type('3')

    cy.get('[data-testid="imagem"]')
        .selectFile('./cypress/fixtures/mouse.jpeg')

    cy.get('[data-testid="cadastarProdutos"]')
        .click()

    cy.contains('Já existe produto com esse nome')
        .should('be.visible')
  });
  it.only("Deve verificar messagem de campo obrigatorio ao Cadastrar um produto", () => {

    cy.get("#navbarTogglerDemo01")
        .contains('li', 'Cadastrar Produtos')
        .click() 

    cy.contains('h1', 'Cadastro de Produtos')
        .should('be.visible')

    cy.get('[data-testid="cadastarProdutos"]')
        .click()

     const messages = [
        'Nome é obrigatório',
        'Preco é obrigatório',
        'Descricao é obrigatório',
        'Quantidade é obrigatório'
    ]
    messages.forEach((message)=>{
        cy.contains('span', message)
            .should('be.visible')
    })

  });
});
