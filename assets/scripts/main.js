import { carregarVagas } from "./dados.js";

import { analisarCompatibilidade } from "./motor.js";

import { mostrarResultados } from "./ui.js";

const form = document.querySelector("#profile-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
 const data = new FormData(form);
const values = Object.fromEntries(data);

const profile = {
  name: values.name.trim(),
  area: values.area.trim(),
  skills: values.skills.split(",").map((skill) => skill.trim().toLowerCase()),
  experience: Number(values.experience),
};

console.log(profile);

const vagas = await carregarVagas();
console.log(vagas);

const resultados = vagas.map((vaga) =>
  analisarCompatibilidade(profile, vaga)
);
console.log(resultados);

mostrarResultados(resultados);
});