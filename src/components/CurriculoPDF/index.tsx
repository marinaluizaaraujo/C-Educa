import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import type { DadosCurriculo } from "../../contexts/CurriculoContext"

const s = StyleSheet.create({
    page: { padding: 40, fontFamily: "Helvetica", fontSize: 11, color: "#1a1a1a" },
    nome: { fontSize: 20, fontWeight: "bold", marginBottom: 2 },
    contato: { fontSize: 10, color: "#555", marginBottom: 16 },
    linha: { borderBottom: "1px solid #ddd", marginVertical: 10 },
    secTitle: { fontSize: 13, fontWeight: "bold", marginBottom: 6, color: "#2d2d2d" },
    texto: { lineHeight: 1.5, marginBottom: 8 },
    row: { flexDirection: "row", gap: 16 },
    col: { flex: 1 },
    label: { fontSize: 9, color: "#888", marginBottom: 2 },
})

interface Props { dados: DadosCurriculo }

export function CurriculoPDF({ dados }: Props) {
    const temExp = !dados.semExperiencia && dados.empresa

    return (
        <Document>
            <Page size="A4" style={s.page}>

                <Text style={s.nome}>{dados.nomeSocial || dados.nome}</Text>
                <Text style={s.contato}>
                    {[dados.telefone, dados.telefoneRecado].filter(Boolean).join("  ·  ")}
                    {"  ·  "}{dados.cidade}{"  ·  "}{dados.endereco}
                </Text>

                <View style={s.linha} />

                {dados.objetivo && (
                    <>
                        <Text style={s.secTitle}>Objetivo</Text>
                        <Text style={s.texto}>{dados.objetivo}</Text>
                    </>
                )}

                {dados.formacao && (
                    <>
                        <Text style={s.secTitle}>Formação Acadêmica</Text>
                        <Text style={s.texto}>{dados.formacao}</Text>
                    </>
                )}

                {temExp && (
                    <>
                        <View style={s.linha} />
                        <Text style={s.secTitle}>Experiência Profissional</Text>
                        <View style={s.row}>
                            <View style={s.col}>
                                <Text style={s.label}>Empresa</Text>
                                <Text style={s.texto}>{dados.empresa}</Text>
                            </View>
                            <View style={s.col}>
                                <Text style={s.label}>Cargo</Text>
                                <Text style={s.texto}>{dados.cargo}</Text>
                            </View>
                            <View style={s.col}>
                                <Text style={s.label}>Período</Text>
                                <Text style={s.texto}>{dados.expInicio} – {dados.expFim}</Text>
                            </View>
                        </View>
                        {dados.descricao && <Text style={s.texto}>{dados.descricao}</Text>}
                    </>
                )}

                {dados.qualificacoes && (
                    <>
                        <View style={s.linha} />
                        <Text style={s.secTitle}>Qualificações e Cursos Complementares</Text>
                        <Text style={s.texto}>{dados.qualificacoes}</Text>
                    </>
                )}

            </Page>
        </Document>
    )
}