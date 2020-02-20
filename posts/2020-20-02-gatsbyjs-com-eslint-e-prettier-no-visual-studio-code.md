---
date: 2020-20-02
title: "GatsbyJS: Configurando Eslint e Prettier no Visual Studio Code"
description: "Neste artigo vamos configurar nosso editor para padronizar e formatar nosso código de forma automática, deixando-nos livres para pensar sobre a funcionalidade do nosso app"
category: JS
background: "#7aab13"
---

Olá Pessoal! Neste artigo vamos configurar nosso editor para padronizar e formatar nosso código de forma automática, deixando-nos livres para pensar sobre a funcionalidade do nosso app.

Para isso, usaremos duas ferramentas. O <strong>ESLint</strong> que é um plugin utilizado para padronizar nosso código, como por exemplo a utilização de ponto e vírgula, tamanho máximo de caracteres em linhas dentre outros; e o Prettier que é utilizado para formatação do código deixando ele pretty, ou seja, 'bonito' 😀💅

## ⚙ Setup

Suponho que você já tenha o [Visual Studio Code](https://code.visualstudio.com/) instalado e as extensões habilitadas [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e um projeto [GatsbyJS](https://www.gatsbyjs.org/) inicializado.

### 1. Instalando o ESLint como dependência do projeto

Execute comando abaixo para para instalar osso package principal de linting o  ESLin o t
<strong>`$ yarn add eslint -D`</strong>

> Não precisaremos instalar o <strong>Prettier</strong> pois ele já vem empacotado junto com o projeto do Gatsby.

Depois de instalar o ESLint em nosso projeto vamos iniciar a configuração através do Wizard. Execute o comando abaixo e responda as perguntas:

<strong>`$ yarn eslint --init`</strong>

<pre>
- How would you like to use ESLint?
> To check syntax, find problems, and enforce code style

- What type of modules does your project use?
> JavaScript modules (import/export)

- Which framework does your project use?
> React

- Does your project use TypeScript?
> No

- Where does your code run?
> Browser

- How would you like to define a style for your project? (Use arrow keys)
> Use a popular style guide ? AirBnb

- What format do you want your config file to be in?
> JavaScript

- Would you like to install them now with npm? (Y/n)
> Y
</pre>

> 🗒 Ao final do processo eu apago o arquivo <strong>`package-lock.json`</strong> e rodo o comando <strong>`yarn install`</strong> para atualizar o <strong>`yarn.lock`</strong>. Pois o Gatsby utiliza o <strong>`yarn`</strong> como gerenciador de dependências do projeto.

Depois de terminado o processo será criado um arquivo .eslintrc.js na pasta raiz do nosso projeto, como também será instalado um série de dependências necessárias para o nosso guia de estilo escolhido.

### Configurando o Prettier

Quando combinamos o ESLint e Prettier podemos enfrentar alguns problemas na formatação do nosso código por que existem algumas regras comuns entre os pacotes, causando conflitos. Para contornamos essa situação, iremos instalar e configurar um [pacote de configuração do Prettier para ESLint](https://github.com/prettier/eslint-config-prettier). 

Vamos adicionar o seguinte pacote ao projeto que irá desabilitar todas as regras ESLint relacionadas à formatação.

<strong>`$ yarn add eslint-config-prettier -D`</strong>

Ao final do processo edite o arquivo <strong>`.eslintrc.json`</strong> para incluir essa configuração.

<pre>
{
  "extends": ["airbnb", "prettier", "prettier/react"]
}
</pre>

Este pacote desabilita todas as regras do ESLint relacionadas à formatação.

O próximo passo é o pacote é o Plugin Prettier para ESLint. Este plugin faz com que o Prettier seja executado como uma regra ESLint.

<strong>`$ yarn add  eslint-plugin-prettier -D`</strong>

Para utilizá-lo, adicione, o código a seguir, no arquivo <strong>`.eslintrc.json`</strong>

<pre>
"plugins": [
  "prettier"
],
"rules": {
  "prettier/prettier": "error"
}
</pre>

### Regras adicionais

Embora a guia de estilo do <strong>`Airbnb`</strong> seja excelente em seu conjunto de regras, faremos um configuração adicional nas regras do ESlint. 

Usaremos a configuração existente no arquivo <strong>`.eslintrc.json`</strong> como ponto de partida e vamos adicionar algumas regras específicas ao Prettier em nossa configuração ESLint.

<pre>
// .eslintrc.json
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier', 'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
          "singleQuote": true,
          "printWidth": 120,
          "trailingComma": "es5"
      } 
    ],
    "react/jsx-filename-extension": [
      1,
      {
          "extensions": [
              ".js",
              ".jsx"
          ]
      }
  ],
  "react/prop-types": 0,
  "no-unused-vars": [
      "error",
      {
          "vars": "local",
          "args": "none"
      }
  ],
  "jsx-a11y/anchor-is-valid": [
      "error",
      {
          "components": [
              "Link"
          ],
          "specialLink": [
              "to",
              "hrefLeft",
              "hrefRight"
          ],
          "aspects": [
              "noHref",
              "invalidHref",
              "preferButton"
          ]
      }
  ]
  },
// Configuração para o Gatsby
  settings: {
    'import/core-modules': [
        "react"
    ]
}
};
</pre>


##### Configuração para o Gatsby
<pre>
  settings: {
    'import/core-modules': [
        "react"
    ]
}
</pre>

> Como iniciamos o projeto pelo Gatsby, iremos adicionar o pacote React para que o ESLint não nos avise sobre as importações não existentes.

### 2. Definindo as configurações do VSCode 

Antes de prosseguir, vamos configurar o VSCode para executar o eslint e o prettier sempre que um arquivo for salvo.

Abra as configurações do usuário (em modo JSON) em pelo menu <strong>`[File> Preferences > Settings]`</strong> ou pelo atalho <kbd>Ctrl+,</kbd>.

<pre>
  // Eslint Prettier
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
  "prettier.disableLanguages": [
    "js"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
</pre>

#### Explicando por partes:

- A entrada `editor.formatOnSave` faz com que o VSCode formate o documento sempre que salvar um arquivo.

<pre>
  "editor.formatOnSave": true,
</pre>


- Desativa explicitamente a formatação para arquivos javascript, pois iremos formatar através do ESLint.

<pre>
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
</pre>

- Executa o ESLint em cada salvamento (com o sinalizador --fix).

<pre>
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
</pre>

- Força o ESLint para sempre mostrar seu status na parte inferior do VSCode 

<pre>
  "eslint.alwaysShowStatus": true,
</pre>

### Considerações

Por fim, configuramos com sucesso o ESLint para trabalhar em conjunto com o Prettier. Agora somos notificados em nosso editor sobre problemas de lint que o ESLint identifica e sobre problemas de formatação que o Prettier também. Sempre que salvarmos um arquivo .js, esses dois pacotes trabalharão juntos em nosso favor e farão um fix de todos os problemas. Bons códigos!