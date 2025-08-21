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

## 🧪 Caso de Teste - Login

### 📌 CT-001 – Login com credenciais válidas
| Campo               | Descrição                                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-001                                                                                                                                      |
| **Título**          | Login                                                                                                                                       |
| **Objetivo**        | Fazer login no sistema com informações válidas (email e senha)                                                                              |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários                                                                               |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher os campos obrigatórios (email, senha) com dados válidos <br> 3. Clicar no botão **"Entrar"** |
| **Resultado esperado** | O sistema deve redirecionar o usuário para a página com a URL: `https://front.serverest.dev/home`                                         |

---

### 📌 CT-002 – Login como Administrador
| Campo               | Descrição                                                                                                                                               |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-002                                                                                                                                                  |
| **Título**          | Login como Administrador                                                                                                                                |
| **Objetivo**        | Fazer login no sistema com informações válidas de administrador                                                                                         |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários                                                                                            |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher os campos obrigatórios (email, senha) com dados válidos de administrador <br> 3. Clicar no botão **"Entrar"** |
| **Resultado esperado** | O sistema deve redirecionar o usuário para a página com a URL: `https://front.serverest.dev/admin/home`                                               |

---

### 📌 CT-003 – Login com email inválido
| Campo               | Descrição                                                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-003                                                                                                                                                         |
| **Título**          | Login com email inválido                                                                                                                                        |
| **Objetivo**        | O sistema não deve permitir que o usuário entre usando email inválido                                                                                           |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários, com email inválido e senha válida                                                                |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher os campos obrigatórios (email, senha) com email inválido e senha válida <br> 3. Clicar no botão **"Entrar"**     |
| **Resultado esperado** | O sistema não deve permitir o acesso e deve exibir a mensagem: **"Email e/ou senha inválidos"**                                                              |

---

### 📌 CT-004 – Login com senha inválida
| Campo               | Descrição                                                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-004                                                                                                                                                         |
| **Título**          | Login com senha inválida                                                                                                                                        |
| **Objetivo**        | O sistema não deve permitir que o usuário entre usando uma senha inválida                                                                                       |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários, com email válido e senha inválida                                                                |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher os campos obrigatórios (email, senha) com email válido e senha inválida <br> 3. Clicar no botão **"Entrar"**     |
| **Resultado esperado** | O sistema não deve permitir o acesso e deve exibir a mensagem: **"Email e/ou senha inválidos"**                                                              |

---

### 📌 CT-005 – Login somente com email
| Campo               | Descrição                                                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-005                                                                                                                          |
| **Título**          | Login somente com email                                                                                                         |
| **Objetivo**        | O sistema não deve permitir que o usuário entre usando somente o email                                                           |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários com email válido                                                   |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher somente o campo **email** com dado válido <br> 3. Clicar no botão **"Entrar"**    |
| **Resultado esperado** | O sistema não deve permitir o acesso e deve exibir a mensagem: **"Password é obrigatório"**                                   |

---

### 📌 CT-006 – Login somente com senha
| Campo               | Descrição                                                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-006                                                                                                                          |
| **Título**          | Login somente com senha                                                                                                         |
| **Objetivo**        | O sistema não deve permitir que o usuário entre usando somente a senha                                                           |
| **Pré-condições**   | O sistema deve estar na página de login para receber usuários com senha válida                                                   |
| **Passos**          | 1. Acessar a página de login <br> 2. Preencher somente o campo **senha** com dado válido <br> 3. Clicar no botão **"Entrar"**    |
| **Resultado esperado** | O sistema não deve permitir o acesso e deve exibir a mensagem: **"Email é obrigatório"**                                      |

---

### 📌 CT-007 – Verificar mensagens de erro ao não preencher campos
| Campo               | Descrição                                                                                                            |
|---------------------|----------------------------------------------------------------------------------------------------------------------|
| **ID**              | CT-007                                                                                                               |
| **Título**          | Verificar mensagem de erro                                                                                           |
| **Objetivo**        | O sistema não deve permitir login sem preencher email e senha, mostrando mensagens de erro                            |
| **Pré-condições**   | O sistema deve estar na página de login                                                                               |
| **Passos**          | 1. Acessar a página de login <br> 2. Clicar no botão **"Entrar"**                                                     |
| **Resultado esperado** | O sistema deve exibir as mensagens de erro: <br> • **"Email é obrigatório"** <br> • **"Password é obrigatório"**   |

## 🧪 Caso de Teste - Cadastro (Register)

### 📌 CT-001 – Cadastrar usuário válido

| Campo                  | Descrição                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **ID**                 | CT-001                                                                                                              |
| **Título**             | Cadastro de usuário com dados válidos                                                                               |
| **Objetivo**           | Validar que o sistema permita cadastrar um novo usuário                                                             |
| **Pré-condições**      | Estar na página de cadastro (`https://front.serverest.dev/cadastrarusuarios`)                                       |
| **Passos**             | 1. Acessar a página de cadastro <br> 2. Preencher nome, email e senha válidos <br> 3. Clicar no botão **Cadastrar** |
| **Resultado esperado** | O sistema exibe **"Cadastro realizado com sucesso"** e redireciona para `https://front.serverest.dev/home`          |


### 📌 CT-002 – Cadastrar usuário administrador

| Campo                  | Descrição                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                 | CT-002                                                                                                                                                                  |
| **Título**             | Cadastro de usuário administrador                                                                                                                                       |
| **Objetivo**           | Validar que o sistema permita cadastrar um usuário como administrador                                                                                                   |
| **Pré-condições**      | Estar na página de cadastro (`https://front.serverest.dev/cadastrarusuarios`)                                                                                           |
| **Passos**             | 1. Acessar a página de cadastro <br> 2. Preencher nome, email e senha válidos <br> 3. Selecionar opção **Cadastrar como administrador** <br> 4. Clicar em **Cadastrar** |
| **Resultado esperado** | O sistema exibe **"Cadastro realizado com sucesso"** e redireciona para `https://front.serverest.dev/admin/home`                                                        |


### 📌 CT-003 – Cadastro com email existente

| Campo                  | Descrição                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **ID**                 | CT-003                                                                                                                     |
| **Título**             | Cadastro com email já utilizado                                                                                            |
| **Objetivo**           | Garantir que o sistema não permita cadastro com email duplicado                                                            |
| **Pré-condições**      | Estar na página de cadastro, já existir usuário com mesmo email                                                            |
| **Passos**             | 1. Acessar a página de cadastro <br> 2. Preencher nome, senha válidos e email já existente <br> 3. Clicar em **Cadastrar** |
| **Resultado esperado** | O sistema não permite cadastro e exibe mensagem: **"Este email já está sendo usado"**                                      |




### 📌 CT-004 – Cadastro sem preencher campos obrigatórios

| Campo                  | Descrição                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID**                 | CT-004                                                                                                                                     |
| **Título**             | Cadastro sem preencher campos obrigatórios                                                                                                 |
| **Objetivo**           | Validar que o sistema exija todos os campos obrigatórios                                                                                   |
| **Pré-condições**      | Estar na página de cadastro                                                                                                                |
| **Passos**             | 1. Acessar a página de cadastro <br> 2. Clicar no botão **Cadastrar** sem preencher dados                                                  |
| **Resultado esperado** | O sistema exibe mensagens de erro: <br> 1. **"Nome é obrigatório"** <br> 2. **"Email é obrigatório"** <br> 3. **"Password é obrigatório"** |

