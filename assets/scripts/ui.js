export function mostrarResultados(resultados) {
  const areaResultados = document.querySelector("#results");
 areaResultados.textContent = "";

resultados.forEach((resultado) => {
  const item = document.createElement("p");
 const area = resultado.areaCompativel ? "compatível" : "diferente";
const experiencia = resultado.experienciaSuficiente ? "suficiente" : "insuficiente";
item.textContent = `${resultado.empresa}: ${resultado.porcentagem}% das habilidades | Área: ${area} | Experiência: ${experiencia}`;
  areaResultados.appendChild(item);
});
}