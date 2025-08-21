describe('Fazer Login no sistema', () => {
    let NOME = "";
    let EMAIL = "";
    let SENHA = "";

    let NOME_ADMIN = "";
    let EMAIL_ADMIN = "";
    let SENHA_ADMIN = "";
    let ADMIN;

    let MENSAGENS_ERRO = {}
    let MENSAGENS_SUCESSO = {}

    beforeEach(()=>{
        cy.start()
        cy.fixture('registerUserData.json').then((data) => {
            NOME = data.registerUser.nome
            EMAIL = data.registerUser.email
            SENHA = data.registerUser.senha

            NOME_ADMIN = data.registerUserAdmin.nome
            EMAIL_ADMIN = data.registerUserAdmin.email
            SENHA_ADMIN = data.registerUserAdmin.senha
            ADMIN = data.registerUserAdmin.admin

            MENSAGENS_ERRO = data.mensagensErro
            MENSAGENS_SUCESSO = data.mensagensSucesso
        });
    })
    it('Deve cadastrar um usuario no sistema', () => {
        cy.cadastrar(NOME, EMAIL, SENHA)

        cy.mensagem('a', MENSAGENS_SUCESSO.cadastroSucesso)

        cy.contains('h1', 'Serverest Store')
            .should('be.visible')
    })
    it('Deve cadastrar um usuario no sistema como Admin', () => {
        cy.cadastrar(NOME_ADMIN, EMAIL_ADMIN, SENHA_ADMIN, ADMIN)
        
        cy.mensagem('a', MENSAGENS_SUCESSO.cadastroSucesso)

        cy.contains('h1', 'Bem Vindo')
            .should('be.visible')
    })
    it('Não deve cadastrar um usuario no sistema com Nome existente', () => {
        cy.cadastrar(NOME, EMAIL, SENHA)

        cy.mensagem('span', MENSAGENS_ERRO.emailUsado)
    })
    it('Deve monstrar um messagem de erro dos campos obrigatorios', () => {
        cy.get('[data-testid="cadastrar"]')
          .click()
          
        cy.contains('h2', 'Cadastro')
            .should('be.visible')
        cy.get('[data-testid="cadastrar"]')
            .click()

        cy.mensagem('span', MENSAGENS_ERRO.nomeErro)
        cy.mensagem('span', MENSAGENS_ERRO.emailErro)
        cy.mensagem('span', MENSAGENS_ERRO.passwordErro)
    })
})