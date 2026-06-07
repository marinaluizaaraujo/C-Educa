import { useNavigate } from "react-router-dom"
import { useCurriculo } from "../../../../contexts/CurriculoContext"
import { CurriculoPDF } from "../../../../components/CurriculoPDF"
import { Alinhar, Box, Container, DownloadButton,IconeCurriculo,IconeDelete, IconeEditar, VisualizacaoPDF } from "./styles"
import { Button } from "../../../../components/Button/style"
import { Text } from "../../../../components/Text/style"
import { useAuth } from "../../../../contexts/AuthContext"
import { useAlunos } from "../../../../contexts/AlunosContext"

export function CurriculoPreview() {
    const { raAtivo } = useAuth()
    const { alunos, editAluno } = useAlunos()
    const { dados, setDados } = useCurriculo()
    const navigate = useNavigate()

    const alunoAtivo = alunos.find(a => a.ra === raAtivo)

    const curriculo = dados ?? alunoAtivo?.curriculo ?? null

    if (!curriculo) {
        navigate("/aluno/curriculo", { replace: true })
        return null
    }

    function handleExcluir() {
        if (alunoAtivo) {
            editAluno({ ...alunoAtivo, curriculo: undefined })
        }
        setDados(null)
        navigate("/aluno/curriculo", { replace: true })
    }

    return (
        <Container>
            <Box>
                <Button size="small">
                    <DownloadButton
                        document={<CurriculoPDF dados={curriculo} />}
                        fileName={`curriculo-${curriculo.nome.toLowerCase().replace(/\s+/g, "-")}.pdf`}
                    >
                        {({ loading }) => loading ? "Gerando PDF..." : [<Alinhar>
                            <IconeCurriculo/>
                            <Text type="Primary" color="textPrimary" size="button"> Baixar</Text>
                        </Alinhar>]}
                    </DownloadButton>
                </Button>

                <Button
                    size="small"
                    onClick={() => navigate("/aluno/curriculo/editar", { state: curriculo })}>
                        <IconeEditar/>
                    <Text type="Primary" color="textPrimary" size="button">
                        Editar
                    </Text>
                </Button>

                <Button size="small" onClick={handleExcluir}>
                    <IconeDelete /> 
                    <Text type="Primary" color="textPrimary" size="button">Excluir</Text>
                </Button>
            </Box>
            <VisualizacaoPDF showToolbar={false}>
                <CurriculoPDF dados={curriculo} />
            </VisualizacaoPDF>
        </Container>
    )
}