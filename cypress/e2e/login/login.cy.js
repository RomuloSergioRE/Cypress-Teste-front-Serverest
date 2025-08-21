import {validUser, invalidUser, errorMessage} from '../../fixtures/loginData.json'

describe("Fazer Login no sistema", () => {
  beforeEach(() => {
    cy.start();
  });


  it("Deve fazer login no sistema com Email e Senha validos", () => { 
    cy.login(validUser.email, validUser.password);

    cy.submitLogin()

    cy.contains("h1", "Serverest Store").should("be.visible");
  });

  it("Não deve fazer login no sistema com Email invalido", () => {
    cy.login(invalidUser.email, validUser.password);

    cy.submitLogin()

    cy.message('span',  errorMessage.emailPasswordError);
  });

  it("Não deve fazer login no sistema com Senha invalida", () => {
    cy.login(validUser.email, invalidUser.password);

    cy.submitLogin()

    cy.message('span',  errorMessage.emailPasswordError);
  });

  it("Não deve fazer login no sistema somente com o Email", () => {
    cy.get('[data-testid="email"]')
      .type(validUser.email);

    cy.submitLogin()

    cy.message('span',  errorMessage.passwordError);
  });

  it("Não deve fazer login no sistema somente com a Senha", () => {
    cy.get('[data-testid="senha"]').type(validUser.password);

    cy.submitLogin()

    cy.message('span',  errorMessage.emailError);
  });

  it("Deve verificar se aparece uma mesagem de campos Email e Senha são obrigatorios ao tentar entrar", () => {
    cy.submitLogin()

    cy.message('span',  errorMessage.emailError);

    cy.message('span',  errorMessage.passwordError);
  });
});
