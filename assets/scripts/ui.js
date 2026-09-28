export function mostrarResultados(resultados) {
  const areaResultados = document.querySelector("#results");
  areaResultados.textContent = "";

  if (resultados.length === 0) {
    areaResultados.textContent = "Nenhuma vaga disponível no momento.";
    return;
  }

  resultados.forEach((resultado) => {
    const item = document.createElement("p");
    const area = resultado.areaCompativel ? "compatível" : "diferente";
    const experiencia = resultado.experienciaSuficiente
      ? "suficiente"
      : "insuficiente";
    const faltantes = resultado.habilidadesFaltantes.length
      ? resultado.habilidadesFaltantes.join(", ")
      : "nenhuma";

    item.textContent = `${resultado.empresa}: ${resultado.porcentagem}% das habilidades | Área: ${area} | Experiência: ${experiencia} | Habilidades faltantes: ${faltantes}`;
    areaResultados.appendChild(item);
  });
}