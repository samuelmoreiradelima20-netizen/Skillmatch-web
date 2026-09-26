import { carregarVagas } from "./dados.js";

import { analisarCompatibilidade } from "./motor.js";

import { mostrarResultados } from "./ui.js";

const form = document.querySelector("#profile-form");

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
  skills: values.skills.split(",").map((skill) => skill.trim().toLowerCase()),
  experience: Number(values.experience),
};

localStorage.setItem("skillmatch-profile", JSON.stringify(profile));

console.log(profile);

document.querySelector("#results").textContent = "Carregando vagas...";

try {
  const vagas = await carregarVagas();
  console.log(vagas);

  const resultados = vagas.map((vaga) =>
    analisarCompatibilidade(profile, vaga)
  );
  console.log(resultados);

  mostrarResultados(resultados);
} catch (erro) {
  document.querySelector("#results").textContent = erro.message;
}

});