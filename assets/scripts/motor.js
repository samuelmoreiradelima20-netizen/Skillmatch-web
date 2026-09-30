export class Vaga {
  constructor(id, empresa, cargo, area, requisitos, experienciaMinima) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.area = area;
    this.requisitos = requisitos;
    this.experienciaMinima = experienciaMinima;
  }

  calcularHabilidades(profile) {
    const habilidadesCompativeis = this.requisitos.filter((requisito) =>
      profile.skills.includes(requisito)
    );

    const habilidadesFaltantes = this.requisitos.filter(
      (requisito) => !profile.skills.includes(requisito)
    );

    return {
      habilidadesCompativeis,
      habilidadesFaltantes,
    };
  }

  calcularPorcentagem(habilidadesCompativeis) {
    return Math.round(
      (habilidadesCompativeis.length / this.requisitos.length) * 100
    );
  }

  classificarCompatibilidade(porcentagem) {
    if (porcentagem >= 80) {
      return "Alta";
    } else if (porcentagem >= 50) {
      return "Média";
    } else {
      return "Baixa";
    }
  }

  analisarCompatibilidade(profile) {
    const {
      habilidadesCompativeis,
      habilidadesFaltantes,
    } = this.calcularHabilidades(profile);

    const porcentagem = this.calcularPorcentagem(habilidadesCompativeis);
    const classificacao = this.classificarCompatibilidade(porcentagem);

    const areaCompativel = profile.area === this.area;
    const experienciaSuficiente =
      profile.experience >= this.experienciaMinima;

    return {
      empresa: this.empresa,
      cargo: this.cargo,
      porcentagem,
      classificacao,
      habilidadesCompativeis,
      areaCompativel,
      experienciaSuficiente,
      habilidadesFaltantes,
    };
  }
}

export class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, area, requisitos, experienciaMinima) {
    super(id, empresa, cargo, area, requisitos, experienciaMinima);

    this.stack = "Front-end";
  }

  analisarCompatibilidade(profile) {
    const resultado = super.analisarCompatibilidade(profile);

    return {
      ...resultado,
      stack: this.stack,
    };
  }
}

export function encontrarMelhorVaga(resultados) {
  return resultados.reduce((melhor, atual) => {
    return atual.porcentagem > melhor.porcentagem ? atual : melhor;
  });
}

export function gerarRecomendacao(melhorVaga) {
  if (melhorVaga.habilidadesFaltantes.length === 0) {
    return "Você já possui todas as habilidades exigidas para esta vaga.";
  }

  return `Recomendamos estudar: ${melhorVaga.habilidadesFaltantes.join(", ")}.`;
}

export function criarContadorAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}