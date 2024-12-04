# QA_saucedemo
Esse repositorio e somente para teste de QA para meu crescimento proffisional com cypress.


* Manual de Instalação do Cypress OBS: utilizo o sistema macOs.
*  Introdução
* Este manual fornece instruções detalhadas para instalar e configurar o Cypress, uma ferramenta poderosa de testes end-to-end. Siga os passos abaixo para preparar seu ambiente de desenvolvimento para usar o Cypress.

Requisitos
Node.js (versão 12 ou superior)
comando para instalar o nodejs caso nao tenha instalado na maquina:
caso utilize o windows ou linux visitar o site :  https://nodejs.org/en/download/package-manager
npm install -g npm


Um editor de texto (VS Code recomendado) site para instalação : https://code.visualstudio.com/

Passo 1: Instalar o Cypress
1. Inicializar o Projeto
Se ainda não tiver um projeto Node.js, inicialize um novo projeto:
Comando:
npm init -y

3. Abrir o Cypress
Para abrir o Cypress pela primeira vez e criar os arquivos de configuração padrão, execute:
npx cypress open
 

* Configuração para Gerar o Relatório no cypress: roda o script
referencia para gerar o relatório: https://github.com/orgs/QA-Mind7
* npm i -D cypress-mochawesome-reporter cypress-multi-reporters mocha-junit-reporter
npm run cy:run:chrome

* CI/CD do github - actions implementado cada vez que for realizado um push vai rodar na pipeline do gihub-actions
referencia :
https://github.com/cypress-io/github-action

permissão concedida repositorio GITHUB para o email :  

4. integração com a pipeline do AzureDevops

# 1. História do Usuário

Como um usuário do Sauce Demo, quero poder:

	-	Fazer login no sistema com minhas credenciais.
	-	Adicionar um produto ao carrinho.
	-	Finalizar a compra com sucesso.

Objetivo: Oferecer aos usuários uma experiência fluida e intuitiva para realizar compras.

# 2. Critérios de Aceite
	-  O sistema deve permitir login apenas com credenciais válidas.
	- O botão “shopping-cart-link” deve estar visível e funcional na página de produtos.
	- O carrinho deve atualizar corretamente após adicionar um produto.
	- A finalização da compra deve exibir uma mensagem "Thank you for your order!".

# casos de testes 
Cenário 1: Fazer login no sistema

	-	Acessar a página inicial do Sauce Demo.
	-	Inserir credenciais válidas no login.
	-	Verificar o redirecionamento para a página de produtos.

Cenário 2: Adicionar produto ao carrinho

	-	Fazer login no sistema.
	-	Clicar no icone do carrinho para adicionar um produto.
	-	Validar que o carrinho foi atualizado corretamente.

Cenário 3: Finalizar compra

	- 1	Adicionar um produto ao carrinho.
	- 2	Ir para o checkout.
	- 3	Preencher os dados necessários.
	- 4	Confirmar a compra.
	- 5	Verificar a mensagem de sucesso.

* Estimativa do Tempo de Teste
  
Cenário 1: 3 minutos (login e validação).

	- Cenário 2: 4 minutos (navegação, adicionar produto e validação).
	- Cenário 3: 8 minutos (preenchimento de formulário e validações).
	- Total para execução manual: 15 minutos.

Para automação, o tempo é reduzido para 2-3 minutos devido à execução rápida dos scripts.

Cálculo:  Tempo_{Manual} = soma (tempo\ por \ cenário estimado) .

Tempo_{Manual} = 3 + 4 + 8 = 15{minutos}

* Estrutura do Projeto Cypress:
cypress/
  ├── e2e/
  │     ├── login.cy.js
  │     ├── carrinho.cy.js
  │     ├── checkout.cy.js
  ├── fixtures/
  ├── support/
  └── cypress.json

# Conclusão

* Os fluxos automatizados cobrem os principais cenários do Sauce Demo. A integração contínua com o pipeline garante execução automatizada a cada alteração no código, permitindo um ciclo de desenvolvimento e testes mais eficiente.
