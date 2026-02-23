# API ZENO-TESTE

## Descrição

API REST desenvolvida em Node.js para gerenciamento cadastros.

Status: Em desenvolvimento ativo.

## Tecnologias

- Node.js
- Express
- pg (driver para conectar base de dados)
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

http://localhost:3000/

## Deploy
https://zeno-api-gilt.vercel.app




## Estrutura

src/
 ├── controllers/cadastros.js
 ├── database/index.js
 ├── migration/
 |      |__index,js
 |      |__tables.js
 ├── routes/
 |      |__index,js
 |      |__cadastros.routes.js
 ├── helper/validations.js
 └── app.js

 ## Códigos de Status

- 200 -> Sucesso
- 201 -> Criado com sucesso
- 400 -> Erro na requisição
- 401 -> Não autorizado
- 404 -> Não encontrado
- 500 -> Erro interno do servidor

 ## Roadmap

- Instalar as dependências e estruturar o projeto - __feito__
- Criar o migration e a base de dados (PostgreSQL) - __feito__
- Criar o controler de cadastro - __feito__
- Criar as rotas - __feito__
- Adicionar documentação Swagger (caso eu tiver tempo)

## Base de dados

__Cadastros__(
    id SERIAL, 
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100),
    description Text,
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at DATE DEFAULT CURRENT_DATE
    )


## Rotas

- GET /cadastros/show
    * query ?id=id_do_cadastro (opcional)
    * Retorna lista de todos cadastros ou apenas um.

- POST /cadastros/register
    * body :{first_name, last_name, emaio, phone, contact}
    * Retorna: {message: "a mensagem, pode ser erro ou de sucess"}

- PUT /cadastros/update/id
    * params /id
    * body :{first_name, last_name, emaio, phone, contact}
    * Retorna: {message: "a mensagem, pode ser erro ou de sucess"}

- DELETE /cadastros/id
    * params /id
    * Retorna: {message: "a mensagem, pode ser erro ou de sucess"}