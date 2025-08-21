describe("Fazer Login no sistema", () => {
  let EMAIL_VALIDO = "";
  let SENHA_VALIDO = "";
  let EMAIL_INVALIDO = "";
  let SENHA_INVALIDO = "";
  let MENSAGENS_ERRO = {}

  beforeEach(() => {
    cy.start();
    cy.fixture('loginUserData.json').then((data) => {
      EMAIL_VALIDO = data.userValido.email
      SENHA_VALIDO = data.userValido.senha
      EMAIL_INVALIDO = data.userInvalido.email_invalido
      SENHA_INVALIDO = data.userInvalido.senha_invalido

      MENSAGENS_ERRO = data.mensagensErro
    });
  });


  it("Deve fazer login no sistema com Email e Senha validos", () => {
    cy.loginEmailPassword(EMAIL_VALIDO, SENHA_VALIDO);

    cy.contains("h1", "Serverest Store").should("be.visible");
  });

  it("Não deve fazer login no sistema com Email invalido", () => {
    cy.loginEmailPassword(EMAIL_INVALIDO, SENHA_VALIDO);

    cy.mensagem('span',  MENSAGENS_ERRO.emailPasswordErro);
  });

  it("Não deve fazer login no sistema com Senha invalida", () => {
    cy.loginEmailPassword(EMAIL_VALIDO, SENHA_INVALIDO);

    cy.mensagem('span',  MENSAGENS_ERRO.emailPasswordErro);
  });

  it("Não deve fazer login no sistema somente com o Email", () => {
    cy.get('[data-testid="email"]')
      .type(EMAIL_VALIDO);

    cy.get('[data-testid="entrar"]').click();

    cy.mensagem('span',  MENSAGENS_ERRO.passwordErro);
  });

  it("Não deve fazer login no sistema somente com a Senha", () => {
    cy.get('[data-testid="senha"]').type(SENHA_VALIDO);

    cy.get('[data-testid="entrar"]').click();

    cy.mensagem('span',  MENSAGENS_ERRO.emailErro);
  });

  it("Deve verificar se aparece uma mesagem de campos Email e Senha são obrigatorios ao tentar entrar", () => {
    cy.get('[data-testid="entrar"]').click();

    cy.mensagem('span',  MENSAGENS_ERRO.emailErro);

    cy.mensagem('span',  MENSAGENS_ERRO.passwordErro);
  });
});
