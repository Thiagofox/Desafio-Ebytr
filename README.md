# Desafio-Ebytr

## Sumário

- [Desafio-Ebytr](#desafio-ebytr)
  - [Sumário](#sumário)
  - [Contexto](#contexto)
  - [Tecnologias](#tecnologias)
  - [Funcionamento](#funcionamento)
  - [Dependências](#dependências)
    - [Frontend](#frontend)
    - [backend](#backend)

## Contexto

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.


## Tecnologias

- MongoDb
- Express
- React
- Node

## Funcionamento

1. Clonar o Repositório
- `git clone git@github.com:Thiagofox/Desafio-Ebytr.git`
- Entre na pasta do repositório que acabou de ser clonado
  - `cd Desafio-Ebytr/`

2. É Preciso ter o mongoDB instalado na maquina e sua instância inicada
     - `sudo service mongod start`


3. A partir daqui você precisará de dois terminais um na pasta backend e outro na pasta frontend

4. Acesse a pasta backend
    - `cd backend/`
  
- Use o comando npm install
    - `npm install`
  
- Rode o comando npm run dev
    - `npm run dev`

5. Em outro terminal acesse a pasta fronted
    - `cd frontend/`
  
- Use o comando npm install
    - `npm install`

- Rode o comando npm start
    - `npm start`
  

6. A aplicação irá rodar no seu webBrowser

7. Para rodar os tests basta estar em um terminal na pasta correspondente e rodar o comando npm test
    - `npm test`
   
## Dependências

### Frontend 

  dependencies: 

    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "history": "^5.0.1",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"



### backend

  dependencies

    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongodb": "^4.1.3"
