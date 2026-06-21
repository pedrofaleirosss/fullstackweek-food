<div align="center">

# 🍔 FSW Food

### Uma plataforma full stack de delivery inspirada no iFood

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-NeonDB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

[🌐 Acessar o projeto](https://fullstackweek-food.vercel.app/) •
[📂 Ver repositório](https://github.com/pedrofaleirosss/fullstackweek-food)

</div>

---

## 📖 Sobre o projeto

O **FSW Food (Full Stack Week Food)** é uma aplicação web full stack de delivery inspirada em plataformas como o iFood. O sistema permite navegar por restaurantes e categorias, visualizar produtos, montar uma sacola, realizar pedidos, acompanhar pedidos anteriores e favoritar restaurantes.

O projeto foi desenvolvido originalmente durante a **4ª edição da Full Stack Week**, evento ministrado por [**Felipe Rocha**](https://github.com/felipemotarocha), no qual uma aplicação completa foi construída ao longo de uma semana de lives no YouTube.

Essa experiência teve um papel importante na minha evolução como desenvolvedor e despertou meu interesse em continuar estudando por meio do [**Full Stack Club**](https://www.fullstackclub.com.br/ecossistema).

Depois da conclusão do evento, retomei o projeto para aplicar melhorias próprias, como:

- adaptação do layout para diferentes tamanhos de tela;
- melhorias na experiência de navegação;
- ajustes em funcionalidades existentes;
- refinamentos visuais e de usabilidade;
- organização do projeto para apresentação em portfólio.

Este também foi um dos meus primeiros projetos utilizando **Next.js, TypeScript e Tailwind CSS**, o que tornou seu desenvolvimento especialmente importante para a construção dos meus conhecimentos em aplicações full stack modernas.

---

## 🖥️ Demonstração

### Desktop

<img width="1917" height="951" alt="Página inicial do FSW Food no desktop" src="https://github.com/user-attachments/assets/7d388e36-a2ce-407a-b151-a965c2cb75ac" />
<img width="1917" height="952" alt="Página de uma categoria do FSW Food no desktop" src="https://github.com/user-attachments/assets/1b5db0e8-ee90-4c4d-9f86-79001199672c" />
<img width="1918" height="951" alt="Página de produto do FSW Food no desktop" src="https://github.com/user-attachments/assets/c6937cd1-8b90-426a-b73f-d65e3ba49f1d" />
<img width="1920" height="954" alt="Página de restaurante do FSW Food no desktop" src="https://github.com/user-attachments/assets/91887f83-3230-470a-8a3d-99f8f5842f68" />

### Mobile

<img width="24%" alt="Página inicial do FSW Food no celular" src="https://github.com/user-attachments/assets/ea215970-930d-4ed0-a792-59779f168714" />
<img width="24%" alt="Página inicial do FSW Food no celular com o rodapé" src="https://github.com/user-attachments/assets/6b6923aa-533c-44e8-9f60-e8430eb4aab8" />
<img width="24%" alt="Menu lateral do FSW Food no celular" src="https://github.com/user-attachments/assets/2d40ca45-9239-4f0e-a4e0-d0dc5d669324" />
<img width="24%" alt="Página de restaurantes encontrados" src="https://github.com/user-attachments/assets/4b56b246-d28c-4609-8636-23cd36fe82f6" />
<img width="24%" alt="Página de uma categoria do FSW Food no celular" src="https://github.com/user-attachments/assets/6687c12a-6bfc-4cc3-9e5a-e8fe97e67d4b" />
<img width="24%" alt="Página de produto do FSW Food no celular" src="https://github.com/user-attachments/assets/1e7ae755-5860-48e8-b4cb-ef6f11ee74af" />
<img width="24%" alt="Sacola do FSW Food no celular" src="https://github.com/user-attachments/assets/877e7439-dc5b-46dc-9734-f55ba749f410" />
<img width="24%" alt="Página de restauntante" src="https://github.com/user-attachments/assets/bf334894-1a98-45cd-ba80-dc37ab781be9" />
<img width="24%" alt="Página de meus pedidos" src="https://github.com/user-attachments/assets/cf73e3b1-e78b-4630-85dd-0363407e9dc1" />
<img width="24%" alt="Página de restaurantes favoritos" src="https://github.com/user-attachments/assets/cf4f4a38-1d55-4885-8fa7-0c288bf02d51" />

---

## ✨ Funcionalidades

### 🏠 Navegação e descoberta

- página inicial com categorias de produtos;
- banners promocionais;
- listagem de produtos recomendados;
- listagem de restaurantes recomendados;
- navegação para produtos por categoria;
- busca de restaurantes por nome;
- visualização detalhada de cada restaurante;
- visualização detalhada de cada produto.

### 🛒 Sacola e pedidos

- adição de produtos à sacola;
- alteração da quantidade dos itens;
- remoção de produtos;
- cálculo de subtotal, taxa de entrega, descontos e total;
- confirmação antes de substituir produtos de restaurantes diferentes;
- finalização do pedido;
- listagem do histórico de pedidos;
- opção de refazer pedidos concluídos.

### ❤️ Restaurantes favoritos

- favoritar e desfavoritar restaurantes;
- página dedicada aos restaurantes favoritos;
- persistência das informações no banco de dados.

### 🔐 Autenticação

- login com conta Google;
- autenticação e sessão utilizando NextAuth;
- associação de pedidos e favoritos ao usuário autenticado;
- proteção de páginas que exigem autenticação.

### 📱 Interface

- layout mobile-first;
- adaptação para tablets e desktops;
- componentes reutilizáveis;
- feedbacks visuais por meio de dialogs, sheets e toasts;
- navegação responsiva com menu lateral;
- interface inspirada em aplicativos modernos de delivery.

---

## 🧰 Tecnologias utilizadas

### Front-end

- **Next.js 14** — framework React utilizado na construção da aplicação;
- **React 18** — criação da interface por componentes;
- **TypeScript** — tipagem estática e maior segurança durante o desenvolvimento;
- **Tailwind CSS** — estilização e responsividade;
- **shadcn/ui e Radix UI** — componentes acessíveis de interface;
- **Lucide React** — biblioteca de ícones;
- **Sonner** — exibição de notificações e feedbacks;
- **Next Themes** — suporte à estrutura de temas.

### Back-end e banco de dados

- **Next.js Server Actions e Server Components** — execução de regras e consultas no servidor;
- **PostgreSQL** — banco de dados relacional;
- **NeonDB** — hospedagem do banco PostgreSQL;
- **Prisma ORM** — modelagem, consultas e integração com o banco;
- **NextAuth.js** — autenticação com Google;
- **Prisma Adapter** — persistência dos dados de autenticação.

### Qualidade e produtividade

- **ESLint** — análise e padronização do código;
- **Prettier** — formatação automática;
- **Prettier Plugin Tailwind CSS** — ordenação das classes do Tailwind;
- **Husky** — execução de verificações antes dos commits;
- **lint-staged** — validações somente nos arquivos alterados;
- **Conventional Commits** — padronização das mensagens de commit;
- **Vercel** — hospedagem e deploy da aplicação.

---

## 🏗️ Arquitetura e organização

A aplicação utiliza o **App Router do Next.js**, com separação entre páginas, componentes, ações de servidor, helpers, hooks, contextos e configurações.

Uma estrutura resumida do projeto:

```text
fullstackweek-food/
├── app/
│   ├── _actions/           # Server Actions
│   ├── _components/        # Componentes reutilizáveis
│   ├── _context/           # Contextos, como a sacola
│   ├── _helpers/           # Funções auxiliares
│   ├── _hooks/             # Hooks personalizados
│   ├── _lib/               # Prisma, autenticação e configurações
│   ├── categories/         # Produtos por categoria
│   ├── my-favorite-restaurants/
│   ├── my-orders/
│   ├── products/
│   ├── restaurants/
│   └── page.tsx            # Página inicial
├── prisma/
│   ├── schema.prisma       # Modelagem do banco
│   └── seed.ts             # Dados iniciais
├── public/                 # Imagens e arquivos estáticos
└── package.json
```

> A estrutura acima é uma visão resumida e pode variar conforme a versão atual do projeto.

---

## 🗃️ Banco de dados

O projeto utiliza **PostgreSQL hospedado no NeonDB**, com acesso realizado por meio do **Prisma ORM**.

O Prisma é responsável por:

- definir os modelos da aplicação;
- criar e manter os relacionamentos;
- realizar consultas ao banco;
- gerar o Prisma Client;
- popular o ambiente de desenvolvimento por meio do seed.

Entre os principais dados gerenciados estão:

- usuários e contas de autenticação;
- restaurantes;
- categorias;
- produtos;
- pedidos;
- itens dos pedidos;
- restaurantes favoritos.

---

## 🔑 Autenticação

A autenticação é realizada com o **Google**, utilizando NextAuth.js e o Prisma Adapter.

O fluxo permite que o usuário:

1. acesse a plataforma sem autenticação para navegar pelos produtos;
2. faça login com o Google ao acessar recursos protegidos;
3. mantenha seus pedidos e favoritos associados à sua conta;
4. encerre a sessão pelo menu da aplicação.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- [Node.js](https://nodejs.org/);
- npm, yarn, pnpm ou bun;
- uma instância PostgreSQL;
- credenciais OAuth do Google.

### 1. Clone o repositório

```bash
git clone https://github.com/pedrofaleirosss/fullstackweek-food.git
```

### 2. Entre na pasta do projeto

```bash
cd fullstackweek-food
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua-url-do-postgresql"
NEXTAUTH_SECRET="sua-chave-secreta"
GOOGLE_CLIENT_ID="seu-client-id"
GOOGLE_CLIENT_SECRET="seu-client-secret"
```

> Os nomes das variáveis devem permanecer de acordo com a configuração utilizada no arquivo de autenticação do projeto.

### 5. Gere o Prisma Client

```bash
npx prisma generate
```

### 6. Sincronize o banco de dados

De acordo com o fluxo utilizado no projeto, execute:

```bash
npx prisma db push
```

### 7. Popule o banco com os dados iniciais

```bash
npx prisma db seed
```

### 8. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

## 📜 Scripts disponíveis

| Comando              | Descrição                                |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Inicia o ambiente de desenvolvimento     |
| `npm run build`      | Gera a versão de produção                |
| `npm run start`      | Inicia a aplicação em produção           |
| `npm run lint`       | Executa a análise do ESLint              |
| `npm run prepare`    | Configura o Husky e gera o Prisma Client |
| `npx prisma db seed` | Popula o banco com dados iniciais        |

---

## 📐 Responsividade

O projeto foi inicialmente desenvolvido com foco em dispositivos móveis. Posteriormente, o layout foi aprimorado para se adaptar também a telas maiores.

A estratégia utilizada foi **mobile-first**, aproveitando os breakpoints do Tailwind CSS para:

- reorganizar grids de produtos e restaurantes;
- limitar a largura máxima do conteúdo;
- adaptar imagens e banners;
- ajustar espaçamentos;
- transformar listas horizontais em grids no desktop;
- preservar a experiência original no celular.

---

## ✅ Boas práticas adotadas

- componentes reutilizáveis;
- tipagem com TypeScript;
- consultas ao banco com Prisma;
- separação entre componentes de cliente e servidor;
- proteção de rotas autenticadas;
- responsividade mobile-first;
- mensagens de commit em inglês;
- padrão Conventional Commits;
- formatação automatizada com Prettier;
- organização de classes Tailwind;
- validações com ESLint;
- deploy contínuo pela Vercel.

---

## 📚 Aprendizados

O desenvolvimento do FSW Food contribuiu para consolidar conhecimentos importantes, como:

- criação de aplicações com Next.js;
- utilização do App Router;
- desenvolvimento com TypeScript;
- estilização mobile-first com Tailwind CSS;
- construção de componentes reutilizáveis;
- gerenciamento global da sacola com Context API;
- integração entre front-end, back-end e banco de dados;
- modelagem e consultas com Prisma ORM;
- autenticação OAuth com Google;
- criação de fluxos de pedidos e favoritos;
- uso de Server Components e Client Components;
- organização de commits e versionamento;
- publicação de aplicações na Vercel;
- manutenção e evolução de um projeto após sua primeira versão.

Mais do que uma aplicação de estudo, este projeto representa uma etapa importante da minha evolução no desenvolvimento full stack.

---

## 🌐 Deploy

A aplicação está publicada na Vercel:

### [Acessar o FSW Food](https://fullstackweek-food.vercel.app/)

---

## 🎓 Créditos

O projeto foi iniciado durante a **4ª edição da Full Stack Week**, evento promovido por [**Felipe Rocha**](https://github.com/felipemotarocha).

Após a conclusão da semana, o projeto recebeu melhorias e adaptações próprias, especialmente relacionadas à responsividade, experiência do usuário e apresentação para portfólio.

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Faleiros**.

[![GitHub](https://img.shields.io/badge/GitHub-pedrofaleirosss-181717?style=for-the-badge&logo=github)](https://github.com/pedrofaleirosss)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pedro_Faleiros-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-faleiros123/)

---

<div align="center">

⭐ Caso tenha gostado do projeto, considere deixar uma estrela no repositório!

</div>
