export function mostrarResultados(resultados) {
  const areaResultados = document.querySelector("#results");
 areaResultados.textContent = "";

resultados.forEach((resultado) => {
  const item = document.createElement("p");
  item.textContent = `${resultado.empresa}: ${resultado.porcentagem}%`;
  areaResultados.appendChild(item);
});
}