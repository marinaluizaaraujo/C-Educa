import Card from "./components/Card";
import { Text } from "../../components/Text/style";
import { Cards, Container, Title } from "./styles";
import type { CardProps } from "./components/Card/props";
import AcoesRapidas from "./components/AcoesRapidas";
import { useAlunos } from "../../contexts/AlunosContext";
import { IconeAlunos, IconeJovemAprendiz, IconTurmas } from "./components/Card/styles";

export function Secretaria() {

    const { alunos } = useAlunos();

    const cards = [
        {
            id: 1,
            titulo: "Total de Alunos",
            icone: IconeAlunos,
            quantidade: alunos.length,
        },
        {
            id: 2,
            titulo: "Turmas Ativas",
            icone: IconTurmas,
            quantidade: 8,
        },
        {
            id: 3,
            titulo: "Jovens Aprendizes",
            icone: IconeJovemAprendiz,
            quantidade: 25,
        },
    ];
    
    return (
        <Container>
            <Title>
                <Text type="Primary" color="textSecundary" size="title" as={"h1"} > Ola gestor </Text>
            </Title>

            <Cards>
                {cards.map((card: CardProps) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        titulo={card.titulo}
                        icone={card.icone}
                        quantidade={card.quantidade}
                    />
                ))}
            </Cards>
            <AcoesRapidas />
        </Container>
    );
}