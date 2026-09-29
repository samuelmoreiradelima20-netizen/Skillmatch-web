export function analisarCompatibilidade(profile, vaga) {
  const habilidadesCompativeis = vaga.requisitos.filter((requisito) =>
    profile.skills.includes(requisito)
  );

  const porcentagem = Math.round(
    (habilidadesCompativeis.length / vaga.requisitos.length) * 100
  );

  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !profile.skills.includes(requisito)
  );

  const areaCompativel = profile.area === vaga.area;
  const experienciaSuficiente =
    profile.experience >= vaga.experienciaMinima;

    let classificacao;

if (porcentagem >= 80) {
  classificacao = "Alta";
} else if (porcentagem >= 50) {
  classificacao = "Média";
} else {
  classificacao = "Baixa";
}

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    porcentagem,
    classificacao,
    habilidadesCompativeis,
    areaCompativel,
    experienciaSuficiente,
    habilidadesFaltantes,
  };
}