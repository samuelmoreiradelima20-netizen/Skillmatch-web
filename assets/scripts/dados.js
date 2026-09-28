export async function carregarVagas() {
  const resposta = await fetch("./assets/data/vagas.json");

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar as vagas.");
  }

  return resposta.json();
}