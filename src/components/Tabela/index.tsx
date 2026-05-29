
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom";
import FiltroBusca from "../FiltroBusca"
import { Container, EditButton, Espaco, Header, Row, Table, TableContainer, Td, Th, TitleContainer, Tr, } from "./style"

export default function Tabela() {
    const alunos = [
        { ra: "1234567891", nome: "Ana Silva", turno: "Manhã", turma: "ADM" },
        { ra: "6789807785", nome: "João Souza", turno: "Tarde", turma: "TI" },
    ]

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
                            <Th>Turno</Th>
                            <Th>Turma</Th>
                            <Th>Editar</Th>
                        </tr>
                    </thead>

                    <tbody>
                        {alunos.map((aluno) => (
                            <Tr key={aluno.ra}>
                                <Td>{aluno.ra}</Td>
                                <Td>{aluno.nome}</Td>
                                <Td>{aluno.turno}</Td>
                                <Td>{aluno.turma}</Td>
                                <Td>
                                    <EditButton>
                                        <Link to="/secretaria/alunos/editar">
                                            <FaEdit />
                                        </Link>

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
