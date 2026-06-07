
import { useNavigate } from "react-router-dom";
import FiltroBusca from "../FiltroBusca"
import { Container, EditButton, Espaco, Header, IconeCurriculo, IconeDelete, IconeEditar, Row, Table, TableContainer, Td, TdIcone, Th, TitleContainer, Tr, } from "./style"
import { useAlunos } from "../../contexts/AlunosContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CurriculoPDF } from "../CurriculoPDF";

export default function Tabela() {
    const { alunosFiltrados, removeAluno } = useAlunos()
    const navigate = useNavigate()

    return (

        <Container>
            <Header>
                <TitleContainer>
                    <Espaco> Lista de Alunos </Espaco>
                </TitleContainer>
            </Header>
            <Row>
                <FiltroBusca />
            </Row>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <Th>RA</Th>
                            <Th>Nome</Th>
                            <Th>Curso</Th>
                            <Th>Turno</Th>
                            <Th>Turma</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                            <Th>Curriculo</Th>
                        </tr>
                    </thead>

                    <tbody>
                        {alunosFiltrados.map((aluno) => (
                            <Tr key={aluno.ra}>
                                <Td>{aluno.ra}</Td>
                                <Td>{aluno.nome}</Td>
                                <Td>{aluno.curso}</Td>
                                <Td>{aluno.turno}</Td>
                                <Td>{aluno.turma}</Td>
                                <TdIcone>
                                    <EditButton onClick={() => navigate("/secretaria/alunos/editar", { state: aluno })}>
                                        <IconeEditar />
                                    </EditButton>
                                </TdIcone>
                                <TdIcone>
                                    <EditButton onClick={() => removeAluno(aluno.ra)}>
                                        <IconeDelete />
                                    </EditButton>
                                </TdIcone>

                                <TdIcone>
                                    {aluno.curriculo
                                        ? (
                                            <PDFDownloadLink
                                                document={<CurriculoPDF dados={aluno.curriculo} />}
                                                fileName={`curriculo-${aluno.nome.toLowerCase().replace(/\s+/g, "-")}.pdf`}
                                            >
                                                {({ loading }) => loading ? "..." : <IconeCurriculo/>}
                                            </PDFDownloadLink>
                                        )
                                        : <span></span>
                                    }
                                </TdIcone>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}
