import React from "react";
import type { CardProps } from "./props";
import { Box, Container } from "./styles";
import { Text } from "../../../../components/Text/style";

export default function Card({ titulo, icone, quantidade }: CardProps) {
    return (
        <Container>
            <div>
                <Text type="Primary" color="textPrimary" size="paragraph" as={"h2"}>
                    {titulo}
                </Text>
            </div>
            <Box>
                <Text type="Primary" color="textPrimary" size="title" as={"p"}>
                    {quantidade}
                </Text>
                <div>
                    {React.createElement(icone)}
                </div>
            </Box>
        </Container>
    )
}
