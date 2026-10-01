# SkillMatch Web

O **SkillMatch Web** é uma aplicação web que compara o perfil de um candidato com vagas de Front-end.

A aplicação analisa as habilidades informadas pelo usuário, calcula a porcentagem de compatibilidade com cada vaga, classifica os resultados e identifica a vaga mais compatível.

Além disso, o sistema informa quais habilidades o candidato já possui, quais ainda precisa desenvolver e gera uma recomendação de estudo.

---

## Objetivo do projeto

O SkillMatch Web foi desenvolvido como evolução do projeto **SkillMatch JS**, que inicialmente funcionava apenas no terminal.

Nesta versão, o motor de compatibilidade foi transformado em uma aplicação web utilizando HTML, CSS e JavaScript puro.

O objetivo do projeto é colocar em prática os principais conteúdos estudados durante o Módulo 01 do curso.

---

## Funcionalidades

- Cadastro do perfil do candidato.
- Nome do candidato.
- Área de interesse.
- Lista de habilidades.
- Tempo de experiência.
- Validação dos campos do formulário.
- Feedback de erro acessível.
- Carregamento das vagas através de `fetch`.
- Tratamento do estado de carregamento.
- Tratamento de catálogo de vagas vazio.
- Tratamento de erros durante o carregamento.
- Cálculo da compatibilidade entre candidato e vaga.
- Identificação das habilidades encontradas.
- Identificação das habilidades faltantes.
- Cálculo da porcentagem de compatibilidade.
- Classificação das vagas em Alta, Média ou Baixa compatibilidade.
- Verificação da área de interesse.
- Verificação da experiência mínima.
- Ordenação dos resultados pela porcentagem.
- Identificação da vaga mais compatível.
- Recomendação de habilidades para estudo.
- Cards de vagas gerados dinamicamente pelo JavaScript.
- Persistência do perfil utilizando `localStorage`.
- Recuperação automática do perfil ao reabrir a página.
- Contador de análises utilizando closure.
- Uso de callback no fluxo da aplicação.
- Layout responsivo mobile-first.
- Navegação acessível por teclado.
- Estrutura semântica e recursos de SEO.

---

## Classificação de compatibilidade

As vagas são classificadas de acordo com o percentual de habilidades compatíveis:

- **Alta:** 80% a 100%
- **Média:** 50% a 79%
- **Baixa:** 0% a 49%

---

## Como funciona a análise

O usuário informa suas habilidades no formulário.

As habilidades são separadas e transformadas em um array JavaScript.

Por exemplo:

```text
javascript, html, css
```

é transformado em:

```js
["javascript", "html", "css"]
```

Depois disso, o sistema compara as habilidades do candidato com os requisitos de cada vaga.

A porcentagem de compatibilidade é calculada da seguinte forma:

```text
habilidades encontradas ÷ total de requisitos × 100
```

Exemplo:

```text
2 habilidades encontradas
3 requisitos da vaga

2 ÷ 3 × 100 = 67%
```

O sistema também separa as habilidades em:

- habilidades encontradas;
- habilidades faltantes.

A área de interesse e a experiência também são verificadas, mas não alteram diretamente a porcentagem de compatibilidade das habilidades.

---

## Melhor vaga

Depois de analisar todas as vagas, o sistema utiliza o método `reduce()` para encontrar a vaga com maior porcentagem de compatibilidade.

A vaga selecionada é destacada na interface.

O sistema também utiliza as habilidades faltantes dessa vaga para gerar uma recomendação de estudo.

Exemplo:

```text
Recomendamos estudar: React, Git.
```

---

## Programação Orientada a Objetos

O projeto utiliza Programação Orientada a Objetos para representar as vagas.

Foi criada a classe:

```text
Vaga
```

Ela possui:

- `constructor`;
- atributos;
- métodos;
- uso de `this`.

Também foi criada a classe:

```text
VagaFrontEnd
```

que herda de `Vaga` utilizando:

```js
extends
```

e:

```js
super()
```

A classe filha também sobrescreve o método responsável pela análise e acrescenta informações específicas de vagas Front-end.

Depois que as vagas são carregadas pelo `fetch`, os objetos do arquivo JSON são transformados em instâncias de `VagaFrontEnd`.

---

## Métodos de array utilizados

O projeto utiliza diferentes métodos de arrays.

### map()

Utilizado para transformar os objetos carregados do JSON em instâncias da classe e também para analisar as vagas.

### filter()

Utilizado para identificar:

- habilidades compatíveis;
- habilidades faltantes;
- habilidades vazias informadas pelo usuário.

### reduce()

Utilizado para identificar a vaga com maior compatibilidade.

### sort()

Utilizado para ordenar os resultados da maior para a menor porcentagem de compatibilidade.

---

## Callback

O projeto utiliza callback no fluxo da aplicação.

Uma função recebe outra função como argumento para controlar a exibição dos resultados.

A função `mostrarResultados` é passada como callback para outra função responsável por executá-la.

Isso demonstra que funções também podem ser utilizadas como valores no JavaScript.

---

## Closure

Foi criada uma closure para contar quantas análises foram realizadas durante a sessão.

A função mantém acesso a uma variável interna mesmo depois que a função responsável por criá-la termina sua execução.

Exemplo:

```text
Análise número: 1
Análise número: 2
Análise número: 3
```

---

## Persistência com localStorage

O perfil do usuário é armazenado no navegador utilizando `localStorage`.

São utilizados:

```js
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
```

Quando o usuário retorna à página, os dados salvos são utilizados para preencher novamente o formulário.

O projeto não armazena informações sensíveis.

---

## Carregamento das vagas

As vagas ficam armazenadas no arquivo:

```text
assets/data/vagas.json
```

Elas são carregadas utilizando:

```js
fetch()
```

junto com:

```js
async/await
```

O sistema trata diferentes situações durante o carregamento.

### Carregando

```text
Carregando vagas...
```

### Sucesso

Os cards das vagas são exibidos normalmente.

### Vazio

```text
Nada encontrado.
```

### Erro

Uma mensagem informa que não foi possível carregar as vagas.

Também são utilizados:

```js
try/catch
```

e a verificação:

```js
response.ok
```

---

## Organização do JavaScript

O JavaScript foi dividido em módulos ES para separar as responsabilidades da aplicação.

### main.js

Responsável pelo fluxo principal da aplicação:

- formulário;
- eventos;
- validações;
- criação do perfil;
- persistência;
- carregamento das vagas;
- controle da análise.

### motor.js

Responsável pelas regras da aplicação:

- classes;
- Programação Orientada a Objetos;
- cálculo de compatibilidade;
- classificação;
- melhor vaga;
- recomendação;
- closure.

### ui.js

Responsável pela interface:

- criação dos cards;
- manipulação do DOM;
- exibição dos resultados;
- destaque da melhor vaga.

### dados.js

Responsável pelo carregamento das vagas através do `fetch`.

---

## Estrutura do projeto

```text
Skillmatch-web/
│
├── index.html
├── README.MD
│
└── assets/
    │
    ├── data/
    │   └── vagas.json
    │
    ├── img/
    │   └── skillmatch.svg
    │
    ├── scripts/
    │   ├── main.js
    │   ├── motor.js
    │   ├── ui.js
    │   └── dados.js
    │
    └── styles/
        └── index.style.css
```

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

## Conceitos utilizados

Durante o desenvolvimento foram utilizados:

- tipos e operadores;
- condicionais;
- funções;
- arrow functions;
- arrays;
- objetos;
- `map`;
- `filter`;
- `reduce`;
- `sort`;
- classes;
- construtores;
- herança;
- `this`;
- `super`;
- callback;
- closure;
- Promise;
- `async/await`;
- Fetch API;
- DOM;
- eventos;
- `addEventListener`;
- `preventDefault`;
- `createElement`;
- `classList`;
- `localStorage`;
- módulos ES;
- `import`;
- `export`;
- Flexbox;
- responsividade mobile-first;
- acessibilidade;
- SEO.

---

## HTML semântico e acessibilidade

A página utiliza elementos semânticos como:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Também foram aplicados recursos de acessibilidade:

- `lang="pt-BR"`;
- apenas um `h1`;
- `label` associado aos campos através de `for`;
- imagem com atributo `alt`;
- foco visível para navegação por teclado;
- `role="alert"`;
- `aria-live`;
- navegação por teclado.

---

## SEO

Foram utilizados recursos básicos de SEO on-page:

- `<title>` descritivo;
- `meta description`;
- hierarquia de títulos;
- HTML semântico;
- atributo `lang`.

---

## Responsividade

O projeto utiliza a abordagem **mobile-first**.

O layout foi desenvolvido primeiro pensando em telas menores e depois adaptado para telas maiores utilizando `media queries`.

Também foram utilizados:

- Flexbox;
- `flex-wrap`;
- `gap`;
- unidades relativas;
- `max-width`;
- mídia fluida;
- media queries.

A aplicação foi testada utilizando o modo responsivo do DevTools.

---

## Navegador, servidor e internet

Quando uma página é acessada, o navegador funciona como cliente e solicita arquivos a um servidor.

Esses arquivos normalmente incluem:

- HTML;
- CSS;
- JavaScript;
- imagens;
- dados.

Na internet, essa comunicação normalmente acontece através dos protocolos HTTP ou HTTPS.

Neste projeto, o **Live Server** funciona como servidor local.

O navegador solicita o arquivo `index.html` e o JavaScript utiliza `fetch` para solicitar:

```text
assets/data/vagas.json
```

O `fetch` retorna uma Promise e o projeto utiliza `async/await` para trabalhar com essa operação assíncrona.

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/samuelmoreiradelima20-netizen/Skillmatch-web.git
```

### 2. Abrir a pasta

Abra a pasta `Skillmatch-web` no Visual Studio Code.

### 3. Instalar o Live Server

No VS Code, instale a extensão:

```text
Live Server
```

### 4. Executar o projeto

Clique com o botão direito no arquivo:

```text
index.html
```

e escolha:

```text
Open with Live Server
```

### 5. Utilizar a aplicação

Preencha:

- nome;
- área;
- habilidades;
- experiência.

Depois clique em:

```text
Analisar vagas
```

Não é necessário instalar pacotes ou dependências.

---

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

Foi utilizado o seguinte fluxo:

```text
main
  ↑
develop
  ↑
feature/*
```

As funcionalidades foram desenvolvidas em branches separadas e depois integradas à `develop`.

Entre as branches utilizadas estão:

```text
feature/motor-completo
feature/melhor-vaga
feature/poo-vagas
feature/callback-closure
feature/acessibilidade-seo
feature/validacao-formulario
feature/cards-dinamicos
feature/responsividade
feature/revisao-final
```

Ao final do desenvolvimento, a versão final será integrada à branch `main`.

---

## Kanban

As tarefas do projeto foram organizadas utilizando um quadro Kanban.

O quadro permite acompanhar atividades:

- pendentes;
- em desenvolvimento;
- concluídas.

---

## Possíveis melhorias futuras

Algumas melhorias que podem ser adicionadas futuramente:

- filtro de vagas;
- ordenação por diferentes critérios;
- filtro por modalidade;
- filtro por salário;
- tema claro e escuro;
- persistência de preferências;
- ampliação do catálogo de vagas;
- novas áreas de tecnologia;
- novos critérios de compatibilidade;
- publicação através do GitHub Pages.

---

## Repositório

[SkillMatch Web no GitHub](https://github.com/samuelmoreiradelima20-netizen/Skillmatch-web)

---
### Link do Kanban

ADICIONAR LINK DO KANBAN AQUI
