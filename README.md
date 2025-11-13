# ProjetoIndividual

Projeto simples em Node.js que serve uma aplicação estática/servidor localizada na pasta `site`.

## Descrição

Este projeto contém os arquivos do site e um back-end mínimo em Node.js. A pasta `site` tem o arquivo principal `app.js` e os assets públicos (HTML, CSS, JS, imagens).

## Stack

- Node.js
- (Possível uso de Express no `site/app.js`)

## Pré-requisitos

- Node.js 14+ e npm

## Instalação

Na raiz do projeto:

```bash
npm install
```

O script `postinstall` no `package.json` já roda `npm install` dentro da pasta `site` automaticamente.

## Como executar

Para iniciar a aplicação a partir da raiz:

```bash
npm start
```

Isso executa `node ./site/app.js` conforme definido no `package.json` na raiz.

Alternativamente, você pode rodar manualmente dentro da pasta `site`:

```bash
cd site
npm install
node app.js
```

## Estrutura do projeto

- `site/`
  - `app.js` - ponto de entrada do servidor/site
  - `public/` - arquivos estáticos (HTML, CSS, imagens, JS)
- `src/` - controllers, models e rotas do back-end
  - `controllers/`
  - `models/`
  - `routes/`
- `package.json` - scripts e dependências de nível raiz

## Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Faça commits claros e atômicos
4. Abra um pull request

## Licença

Este projeto está sem uma licença explícita definida. Se quiser, adicione um arquivo `LICENSE` com a licença desejada (por exemplo, MIT).

---

Se quiser que eu inclua instruções específicas (por exemplo variáveis de ambiente, como usar um banco de dados, testes ou uma licença), diga quais detalhes quer que eu adicione e eu atualizo o README.
# projetoPessoal
Meu projeto pessoal para a sprint da minha faculdade, onde pretendo criar um site usando HTML, CSS e JS.
