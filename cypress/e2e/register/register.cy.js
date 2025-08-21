import {registerUser, registerUserAdmin, errorMessage, successMessage} from '../../fixtures/registerData.json';

describe('Fazer Login no sistema', () => {


    beforeEach(()=>{
        cy.start()
    })
    it('Deve cadastrar um usuario no sistema', () => {
        cy.register(registerUser.nome, registerUser.email, registerUser.password)

        cy.submitRegister()

        cy.message('a', successMessage.registerSuccess)

        cy.contains('h1', 'Serverest Store')
            .should('be.visible')
    })
    it('Deve cadastrar um usuario no sistema como Admin', () => {
        cy.register(
            registerUserAdmin.nome, 
            registerUserAdmin.email, 
            registerUserAdmin.password,
            registerUserAdmin.admin
        )

        cy.submitRegister()

        cy.message('a', successMessage.registerSuccess)

        cy.contains('h1', 'Bem Vindo')
            .should('be.visible')
    })
    it('Não deve cadastrar um usuario no sistema com Nome existente', () => {
        cy.register(registerUser.nome, registerUser.email, registerUser.password)

        cy.submitRegister()

        cy.message('span', errorMessage.emailUsed)
    })
    it('Deve monstrar um messagem de erro dos campos obrigatorios', () => {
        cy.get('[data-testid="cadastrar"]')
          .click()
          
        cy.contains('h2', 'Cadastro')
            .should('be.visible')

        cy.submitRegister()

        cy.message('span', errorMessage.nameError)
        cy.message('span', errorMessage.emailError)
        cy.message('span', errorMessage.passwordError)
    })
})