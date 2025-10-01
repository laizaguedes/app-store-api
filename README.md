# app-store
## Estrutura de pastas

````bash
app-store-api/
├── node_modules/          # Dependências instaladas pelo npm, incluindo Express, Prisma, Zod, Stripe etc.
├── prisma/                # Configurações e migrations do Prisma para gerenciar o banco de dados
├── public/                # Arquivos estáticos públicos (imagens, scripts, assets) servidos diretamente via Express
├── src/                   # Código-fonte da aplicação escrito em TypeScript
│   ├── controllers/       # Camada de controle da API: lógica que recebe requisições e chama serviços (ex: banner.ts, product.ts)
│   ├── generated/         # Código gerado automaticamente pelo Prisma (client, tipos, etc)
│   │   └── prisma/
│   ├── libs/              # Bibliotecas internas e helpers reutilizáveis, como instância configurada do Prisma (prisma.ts)
│   ├── routes/            # Definição das rotas da API e organização das endpoints (ex: main.ts)
│   ├── schemas/           # Schemas de validação e definição de contratos com Zod (ex: get-product-schema.ts)
│   ├── services/          # Regras de negócio e operações mais complexas, separadas da camada de controle (ex: banner.ts, product.ts)
│   └── utils/             # Funções utilitárias e helpers variados usados ao longo do projeto (ex: get-absolute-image-url.ts, get-base-url.ts)
│   └── server.ts          # Ponto de entrada da aplicação, onde o servidor Express é configurado e iniciado
├── .env                   # Variáveis de ambiente (conexão com banco, chaves secretas, etc) — carregadas no runtime
├── .gitignore             # Define arquivos e pastas que não devem ser versionados (node_modules, .env, etc)
├── docker-compose.yml     # Configuração para rodar containers Docker, facilitando orquestração e deploy local
├── package-lock.json      # Lockfile que registra versões exatas das dependências instaladas
├── package.json           # Manifesto do projeto com scripts, dependências, configurações do npm
├── README.md              # Documentação geral do projeto
└── tsconfig.json          # Configuração do compilador TypeScript (target, módulos, paths, etc)
````

## Bibliotecas e Recursos

- prisma → facilita a comunicação entre a aplicação e o banco de dados 
- express → servidor web.
- cors → permite o frontend falar com o backend.
- bcryptjs → segurança de senhas.
- zod → validação de dados.
- uuid → gera IDs únicos.
- stripe → pagamentos online.
- swagger → documentação da API

🔷 O que é o Prisma?
É um ORM que facilita a comunicação entre sua aplicação e o banco de dados.

- Conecta seu código a bancos como PostgreSQL, MySQL, SQL Server, MongoDB etc.
- Gera queries SQL automaticamente com base em modelos declarados em um arquivo de schema.
- Dá tipagem automática (principalmente com TypeScript), então você já sabe quais campos existem sem decorar o banco.
- Traz ferramentas como o Prisma Studio (interface visual para ver e editar dados).

📦 express
Framework minimalista para Node.js.

- Cria servidores HTTP de forma simples.
- Permite definir rotas (/login, /produtos, etc.).
- Facilita lidar com requisições e respostas (GET, POST, PUT, DELETE).

Exemplo:

````tsx
import express from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(3000);
````

🔗 cors
Middleware que habilita o CORS (Cross-Origin Resource Sharing).

- Necessário quando seu frontend e backend estão em domínios/ports diferentes (ex.: React em http://localhost:5173 e API em http://localhost:3000).
- Sem ele, o navegador bloqueia a comunicação.

Exemplo:

````tsx
import cors from "cors";
app.use(cors());
````

🔑 bcryptjs
Biblioteca para hash de senhas.

- Nunca se deve salvar a senha real no banco.
- O bcryptjs gera um hash seguro que é praticamente impossível de reverter.
- Também compara senhas inseridas com o hash salvo.

Exemplo:

````tsx
import bcrypt from "bcryptjs";

const hash = await bcrypt.hash("senha123", 10); 
const isValid = await bcrypt.compare("senha123", hash);
````

✅ zod
Biblioteca de validação e tipagem de dados.

- Garante que os dados que chegam na API estão no formato certo.
- Muito usada para validar JSON de requisições.

Exemplo:

````tsx
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

userSchema.parse({ email: "teste@email.com", password: "123456" });
````

🔑 uuid
Gera UUIDs (identificadores únicos universais).

- Muito usado para criar IDs que não se repetem (para usuários, pedidos, etc.).

Exemplo:

````tsx
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();
console.log(id); // ex: "6f2c6c68-77a5-4f30-98e1-2e1c8e9df9f7"
````

💳 stripe
SDK oficial da Stripe (plataforma de pagamentos).

- Permite processar cartões de crédito, Pix (no Brasil), assinaturas, checkout online.
- Usado em sistemas que precisam de cobrança online.

Exemplo:

````tsx
import Stripe from "stripe";
const stripe = new Stripe("SUA_CHAVE_SECRETA");

const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000, // em centavos (R$20,00)
  currency: "brl",
});
````

## configurações iniciais do projeto
### ✨iniciar o projeto
````bash
npm init -y
````

### ✨instalar as bibliotecas e recursos

````bash
npm i express cors bcryptjs zod uuid stripe
npm i -D @types/cors @types/express @types/node prisma typescript tsx
````

1. configurar o script do package.json
2. adicionar o type "module" no package.json

````bash
npx tsc --init
````

- Criar o arquivo de rotas src/routes/main.ts
- Configurar o arquivo src/server.ts para receber as rotas
- Configurar o src/routes/main.ts

1. criar o .gitignore
2. criar o .env
3. configurar o tsconfig para remover o que não precisa
4. configurar o dockerfile para utilizar como banco local
    a. instalar e inicializar o docker(caso ainda não o tenha)
    
    b. criar o arquivo dockerfile, exemplo simples:

      ````yml
      version: '3.8'

      services:
        postgres:
          image: postgres:latest
          container_name: postgres-app-store
          environment:
            POSTGRES_USER: admin
            POSTGRES_PASSWORD: postgres
            POSTGRES_DB: app-store-db
          ports:
            - "5432:5432"
          volumes:
            - pgdata:/var/lib/postgresql/data

        pgweb:
          image: sosedoff/pgweb
          container_name: pgweb
          ports:
            - "8081:8081"
          environment:
            PGWEB_DATABASE_URL: postgres://admin:postgres@postgres:5432/app-store-db?sslmode=disable
          depends_on:
            - postgres

      volumes:
        pgdata:
      ````
    
    c. criar variavel de banco no .env
      ````
        DATABASE_URL="postgresql://admin:postgres@localhost:5432/app-store-db?schema=public"
      ````
    
    d. inicializar o container:
      ````bash
        docker-compose up -d
        docker start postgres-app-store
      ````
    
    e. caso queira visualizar o banco basta executar o comando
      ````bash
        docker start pgweb
      ````
5. instalação e configuração do prisma

    a. Instalar e inicializar as configurações padrões pelo prisma

      ````bash
      npx prisma init
      npx prisma generate
      ````

    b. Outra alternativa para instalação
    - instalar o Prisma Client e a CLI

      ````bash
        npm install prisma --save-dev
        npm install @prisma/client
      ````

    - criar a pasta e o arquivo prisma/schema.prisma com o conteúdo básico, exemplo:

      ````js
      generator client {
        provider = "prisma-client-js"
        output = "../src/generated/prisma"
      }

      datasource db {
        provider = "postgresql" // ou mysql/sqlite/etc
        url      = env("DATABASE_URL")
      }
      ````
    
    Após a instalação do prisma vamos agora para o prisma estabelecer conexão
    - cirar pasta e arquivo src/libs/prisma.tsx
    - a conexão pode ser encontrada na documentação disponível no site prisma (https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections)
6. instalar e configurar o ZOD
7. instalar e configurar o swagger
    a.instalar o swagger

    ````bash
    npm install zod-to-openapi swagger-ui-express
    ````

    b. criar e configurar o arquivo src/libs/swagger.ts, exemplo:

    ````ts
    // swagger.tsx
    import { OpenApiGeneratorV3 } from 'zod-to-openapi';
    import {
      UserCreateSchema,
      UserResponseSchema,
      UserUpdateSchema,
    } from './zod/user';

    const generator = new OpenApiGeneratorV3([
      UserCreateSchema,
      UserResponseSchema,
      UserUpdateSchema,
    ]);

    const openApiDocument = generator.generateDocument({
      openapi: '3.0.0',
      info: {
        title: 'Minha API',
        version: '1.0.0',
      },
      paths: {
        '/users': {
          post: {
            summary: 'Criar usuário',
            requestBody: {
              content: {
                'application/json': {
                  schema: generator.getSchemaRef(UserCreateSchema),
                },
              },
              required: true,
            },
            responses: {
              '201': {
                description: 'Usuário criado',
                content: {
                  'application/json': {
                    schema: generator.getSchemaRef(UserResponseSchema),
                  },
                },
              },
            },
          }
        },
      },
    });
    ````

    c. no arquivo src/server.ts onde fica a api, adicionar o swagger da seguinte maneira:

    ````tsx
    // index.ts
    import express from 'express';
    import swaggerUi from 'swagger-ui-express';
    import openApiDocument from './swagger';

    const app = express();
    app.use(express.json());

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

    app.listen(3000, () => {
      console.log('🚀 Server running on http://localhost:4000');
      console.log('📘 Swagger: http://localhost:3000/api-docs');
    });
    ````

## passos para rodar o projeto

````bash
npm i
docker-compose up -d
docker start postgres-app-store
npm run dev
````

## passos para criar o banco de dados com prisma

````bash
npx prisma migrate dev
````

## url de apoio
dashboard.stripe.com/test/dashboard