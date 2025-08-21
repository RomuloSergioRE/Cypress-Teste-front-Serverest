# Cypress-Teste-front-Serverest

Este projeto contém uma suíte de testes automatizados para o front-end da aplicação **Serverest**, utilizando o **Cypress** para testes end-to-end.

---

## 📂 Estrutura do Projeto

```bash
cypress/
 ├── e2e/        # Onde ficam os arquivos de testes (specs)
 ├── fixtures/   # Massa de dados para os testes (JSONs, mocks, etc.)
 └── support/    # Comandos customizados e configurações globais
```

| Item                | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| `cypress/e2e/`      | Pasta principal para armazenar os casos de teste (`.cy.js`)   |
| `cypress/fixtures/` | Arquivos de dados estáticos usados como mock nos testes                   |
| `cypress/support/`  | Arquivos de suporte (ex: `commands.js` com funções personalizadas)        |
| `cypress.config.js` | Arquivo de configuração do Cypress (URLs, timeouts, reporter, etc.)       |
| `package.json`      | Gerencia dependências e scripts do projeto                                |
| `.gitignore`        | Define o que não deve ser versionado (ex: `node_modules/`)                |

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Cypress**

---

## ⚙️ Pré-requisitos

- **Node.js** (v14+)
- **npm**

---

## 🚀 Como Usar

```bash
# Clonar o repositório
git clone https://github.com/RomuloSergioRE/Cypress-Teste-front-Serverest.git
cd Cypress-Teste-front-Serverest

# Instalar dependências
npm install

# Abrir interface do Cypress (modo interativo)
npx cypress open

# Executar testes em modo headless
npx cypress run
```

## 📜 Scripts Disponíveis

- `npx cypress open`: abre a interface gráfica do Cypress para rodar testes manualmente.  
- `npx cypress run`: executa todos os testes em modo headless (sem UI), ideal para CI.  

---

## 🧪 Caso de Teste por Suite - Login

| ID     | Título                                     | Objetivo                                                                | Resultado Esperado                                           |
|--------|--------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------|
| CT-001 | Login com credenciais válidas              | Fazer login com informações válidas (email e senha)                     | Redirecionar para https://front.serverest.dev/home        |
| CT-002 | Login como Administrador                   | Login com informações válidas de administrador                          | Redirecionar para https://front.serverest.dev/admin/home  |
| CT-003 | Login com email inválido                   | Não permitir login com email inválido                                   | Mensagem: "Email e/ou senha inválidos"                      |
| CT-004 | Login com senha inválida                   | Não permitir login com senha inválida                                   | Mensagem: "Email e/ou senha inválidos"                      |
| CT-005 | Login somente com email                    | Não permitir login usando apenas email                                  | Mensagem: "Password é obrigatório"                          |
| CT-006 | Login somente com senha                    | Não permitir login usando apenas senha                                  | Mensagem: "Email é obrigatório"                             |
| CT-007 | Verificar mensagens de erro ao não preencher campos | Não permitir login sem preencher email e senha, mostrar mensagens de erro | Mensagens: "Email é obrigatório" e "Password é obrigatório" |


## 🧪 Caso de Teste por Suite - Cadastro(Register)

| ID     | Título                               | Objetivo                                                        | Resultado Esperado                                                        |
|--------|--------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------|
| CT-001 | Cadastro de usuário com dados válidos| Validar cadastro de novo usuário                                | Mensagem: "Cadastro realizado com sucesso" e redireciona para /home     |
| CT-002 | Cadastro de usuário administrador    | Validar cadastro de usuário administrador                       | Mensagem: "Cadastro realizado com sucesso" e redireciona para /admin/home|
| CT-003 | Cadastro com email já utilizado      | Garantir que não permita cadastro com email duplicado           | Mensagem: "Este email já está sendo usado"                                |
| CT-004 | Cadastro sem preencher campos obrigatórios | Validar exigência de todos os campos obrigatórios               | Mensagens: "Nome é obrigatório", "Email é obrigatório", "Password é obrigatório" |                                                |

