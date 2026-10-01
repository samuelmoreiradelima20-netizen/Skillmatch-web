export function mostrarResultados(resultados) {
  const areaResultados = document.querySelector("#results");
  areaResultados.textContent = "";

  if (resultados.length === 0) {
    areaResultados.textContent = "Nenhuma vaga disponível no momento.";
    return;
  }

  resultados.forEach((resultado) => {
    const item = document.createElement("article");
    item.classList.add("vaga-card");
    const area = resultado.areaCompativel ? "compatível" : "diferente";
    const experiencia = resultado.experienciaSuficiente
      ? "suficiente"
      : "insuficiente";
    const faltantes = resultado.habilidadesFaltantes.length
      ? resultado.habilidadesFaltantes.join(", ")
      : "nenhuma";
     const encontradas = resultado.habilidadesCompativeis.length
  ? resultado.habilidadesCompativeis.join(", ")
  : "nenhuma"; 

    item.textContent = `${resultado.empresa}: ${resultado.porcentagem}% das habilidades | Classificação: ${resultado.classificacao} | Área: ${area} | Experiência: ${experiencia} | Habilidades faltantes: ${faltantes} | Habilidades encontradas: ${encontradas}`;
    areaResultados.appendChild(item);
  });
}

export function mostrarMelhorVaga(melhorVaga, recomendacao) {
  const areaResultados = document.querySelector("#results");

  const destaque = document.createElement("article");
 destaque.classList.add("vaga-card", "melhor-vaga");
  destaque.textContent =
    `Melhor vaga: ${melhorVaga.empresa} - ${melhorVaga.cargo} | ` +
    `${melhorVaga.porcentagem}% de compatibilidade | ${recomendacao}`;

  areaResultados.prepend(destaque);
}
