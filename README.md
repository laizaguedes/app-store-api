# app-store
## Bibliotecas e Recursos

- prisma → facilita a comunicação entre a aplicação e o banco de dados 
- express → servidor web.
- cors → permite o frontend falar com o backend.
- bcryptjs → segurança de senhas.
- zod → validação de dados.
- uuid → gera IDs únicos.
- stripe → pagamentos online.

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

## criação das estruturas de pasta


## passos para configuração dos arquivos
- Criar o arquivo de rotas src/routes/main.ts
- Configurar o arquivo src/server.ts para receber as rotas
- Configurar o src/routes/main.ts


## passos para rodar o projeto

````bash
npm run dev
````