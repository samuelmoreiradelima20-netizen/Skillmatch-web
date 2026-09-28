# SkillMatch Web

O SkillMatch Web é um simulador que compara o perfil de uma pessoa com vagas de tecnologia. Ele calcula a porcentagem de habilidades atendidas, informa se a área e a experiência correspondem à vaga e mostra as habilidades que faltam desenvolver.


## Funcionalidades

- Recebe nome, área de interesse, habilidades e anos de experiência.
- Carrega as vagas de um arquivo JSON com `fetch`.
- Calcula a compatibilidade das habilidades e ordena as vagas pela porcentagem.
- Mostra área, experiência e habilidades faltantes para cada vaga.
- Salva o perfil no navegador e preenche o formulário ao reabrir a página.
- Exibe mensagens durante o carregamento, em caso de erro ou quando não há vagas.


## Como executar

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**, caso ainda não a tenha.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Preencha o formulário e clique em **Analisar vagas**.

O projeto usa HTML, CSS e JavaScript com módulos ES. As vagas ficam em `assets/data/vagas.json`. Não é necessário instalar pacotes.


## Como funciona a análise

O formulário transforma as habilidades informadas em uma lista. Para cada vaga, o programa compara essa lista com os requisitos da vaga.

A porcentagem é calculada assim: **habilidades atendidas ÷ total de requisitos × 100**. Área de interesse e experiência são verificadas e exibidas separadamente; elas não entram nessa porcentagem. Os resultados são ordenados da maior para a menor porcentagem.

O código usa `map` para analisar todas as vagas, `filter` para encontrar habilidades atendidas e faltantes, e `sort` para ordenar os resultados.


## Navegador, servidor e internet

Ao acessar um site, o navegador (cliente) solicita arquivos a um servidor e usa HTML, CSS e JavaScript para apresentar a página. Na internet, essa comunicação costuma acontecer por HTTP ou HTTPS.

Neste projeto, o Live Server fornece os arquivos localmente. O navegador carrega `index.html` e o JavaScript usa `fetch` para solicitar `assets/data/vagas.json`. A função de carregamento usa `async/await` e informa um erro se a resposta não for bem-sucedida. O perfil preenchido é guardado no `localStorage` do navegador.


## Ferramentas

- VS Code com a extensão **Live Server** para executar o projeto localmente.
- Git e GitHub para registrar as alterações e organizar as branches.

## Links

- [Repositório do SkillMatch Web](https://github.com/samuelmoreiradelima20-netizen/Skillmatch-web)