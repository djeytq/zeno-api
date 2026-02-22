# API ZENO-TESTE

## Descrição

API REST desenvolvida em Node.js para gerenciamento cadastros.

Status: Em desenvolvimento ativo.

## Tecnologias

- Node.js
- Express
- pg (driver para conectar base de dados)
- JWT (em analise)
- Bcrypt (em analise)
- Dotenv

## Instalação

### Clonar o repositório

git clone https://github.com/djeytq/zeno-api.git

### Instalar dependências

npm install

### Criar arquivo .env

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

PORT=3000
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta

## Executar API

npm run dev

## Base URL

http://localhost:3000/api

## Deploy
https://tqweb-api.onrender.com/api




## Estrutura

src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middlewares/
 └── app.js

 ## Códigos de Status

- 200 -> Sucesso
- 201 -> Criado com sucesso
- 400 -> Erro na requisição
- 401 -> Não autorizado
- 404 -> Não encontrado
- 500 -> Erro interno do servidor

 ## Roadmap

- Instalar as dependências e estruturar o projeto
- Criar o migration e a base de dados (PostgreSQL)
- Criar o controler de cadastro
- Adicionar documentação Swagger (caso eu tiver tempo)