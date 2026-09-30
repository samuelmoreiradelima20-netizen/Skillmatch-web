import { carregarVagas } from "./dados.js";

import {
  VagaFrontEnd,
  encontrarMelhorVaga,
  gerarRecomendacao,
  criarContadorAnalises,
} from "./motor.js";

import { mostrarResultados, mostrarMelhorVaga } from "./ui.js";

const form = document.querySelector("#profile-form");
const contadorAnalises = criarContadorAnalises();

const perfilSalvo = JSON.parse(localStorage.getItem("skillmatch-profile"));

if (perfilSalvo) {
  form.elements.namedItem("name").value = perfilSalvo.name;
  form.elements.namedItem("area").value = perfilSalvo.area;
  form.elements.namedItem("skills").value = perfilSalvo.skills.join(", ");
  form.elements.namedItem("experience").value = perfilSalvo.experience;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const values = Object.fromEntries(data);

  const profile = {
    name: values.name.trim(),
    area: values.area.trim().toLowerCase(),
    skills: values.skills
      .split(",")
      .map((skill) => skill.trim().toLowerCase())
      .filter((skill) => skill !== ""),
    experience: Number(values.experience),
  };

  if (!profile.name || !profile.area) {
    document.querySelector("#results").textContent =
      "Informe seu nome e sua área de interesse.";
    return;
  }

  if (profile.skills.length === 0) {
    document.querySelector("#results").textContent =
      "Informe pelo menos uma habilidade.";
    return;
  }

  localStorage.setItem("skillmatch-profile", JSON.stringify(profile));

  console.log(profile);

  document.querySelector("#results").textContent = "Carregando vagas...";

  try {
    const vagasCarregadas = await carregarVagas();

    const vagas = vagasCarregadas.map(
      (vaga) =>
        new VagaFrontEnd(
          vaga.id,
          vaga.empresa,
          vaga.cargo,
          vaga.area,
          vaga.requisitos,
          vaga.experienciaMinima
        )
    );

    console.log(vagas);

    const resultados = vagas
      .map((vaga) => vaga.analisarCompatibilidade(profile))
      .sort((a, b) => b.porcentagem - a.porcentagem);

    console.log(resultados);

    const melhorVaga = encontrarMelhorVaga(resultados);
    const recomendacao = gerarRecomendacao(melhorVaga);
    const numeroAnalise = contadorAnalises();

    function executarCallback(resultados, callback) {
    callback(resultados);
  }

    console.log("Análise número:", numeroAnalise);
    console.log("Recomendação:", recomendacao);
    console.log("Melhor vaga:", melhorVaga);

    executarCallback(resultados, mostrarResultados);
    mostrarMelhorVaga(melhorVaga, recomendacao);
  } catch (erro) {
    document.querySelector("#results").textContent = erro.message;
  }
});