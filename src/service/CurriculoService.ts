import type { DadosCurriculo } from "../contexts/CurriculoContext"

export const curriculoService = {
    salvar: (dados: DadosCurriculo): Promise<DadosCurriculo> =>
        Promise.resolve(dados),

    // salvar: (dados: DadosCurriculo) =>
    //   api.post<DadosCurriculo>("/curriculo", dados).then(r => r.data),
}