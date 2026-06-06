import { Button } from "../../../../components/Button/style";
import { Text } from "../../../../components/Text/style";
import { Box, Container, Links } from "./styles";

export default function AcoesRapidas() {
    return (
        <Container>
            <div>
                <Text type="Primary" color="textPrimary" size="paragraph" as={"h2"}>
                    Ações Rápidas
                </Text>
            </div>
            <Box>
                <Button >
                    <Links to="/secretaria/alunos/cadastrar">
                        <Text type="Primary" color="textPrimary" size="paragraph" as={"p"}>
                            Adicionar Aluno
                        </Text>
                    </Links>
                </Button>
                <Button >
                    <Text type="Primary" color="textPrimary" size="paragraph" as={"p"}>
                        Adicionar Professor
                    </Text>
                </Button>
                <Button >
                    <Text type="Primary" color="textPrimary" size="paragraph" as={"p"}>
                        Adicionar secretário
                    </Text>
                </Button>
            </Box>
        </Container>
    )
}
