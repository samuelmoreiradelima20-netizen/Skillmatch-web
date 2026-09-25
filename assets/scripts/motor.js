export function analisarCompatibilidade(profile, vaga) {
  const habilidadesCompativeis = vaga.requisitos.filter((requisito) =>
    profile.skills.includes(requisito)
  );

  const porcentagem = Math.round(
    (habilidadesCompativeis.length / vaga.requisitos.length) * 100
  );

const areaCompativel = profile.area === vaga.area;
const experienciaSuficiente = profile.experience >= vaga.experienciaMinima;

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    porcentagem,
    habilidadesCompativeis,
    areaCompativel,
    experienciaSuficiente,
  };
}