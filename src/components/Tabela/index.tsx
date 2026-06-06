
import { useNavigate } from "react-router-dom";
import FiltroBusca from "../FiltroBusca"
import { Container, EditButton, Espaco, Header, IconeCurriculo, IconeDelete, IconeEditar, Row, Table, TableContainer, Td, Th, TitleContainer, Tr, } from "./style"
import { useAlunos } from "../../contexts/AlunosContext";

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
                                <Td>
                                    <EditButton onClick={() => navigate("/secretaria/alunos/editar", { state: aluno })}>
                                        <IconeEditar />
                                    </EditButton>
                                </Td>
                                <Td>
                                    <EditButton onClick={() => removeAluno(aluno.ra)}>
                                        <IconeDelete />
                                    </EditButton>
                                </Td>
                                <Td>
                                    <EditButton >
                                        <IconeCurriculo />
                                    </EditButton>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </Container>

    )
}
