import { useState } from "react";
import Input from "../Input";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Container,
  SearchContainer,
  FilterButton,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Label,
  Options,
  Actions,
  ApplyButton,
  CancelButton,
} from "./style";

function FiltroAlunos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [cursos, setCursos] = useState<string[]>([]);
  const [turnos, setTurnos] = useState<string[]>([]);

  const textoFiltro =
    [...cursos, ...turnos].length > 0
      ? [...cursos, ...turnos].join(", ")
      : "Filtrar Turmas e Turnos";

  function marcarFiltro(
    valor: string,
    lista: string[],
    setLista: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (lista.includes(valor)) {
      setLista(lista.filter((item) => item !== valor));
    } else {
      setLista([...lista, valor]);
    }
  }

  return (
    <Container>
      <SearchContainer>
        <Input type="text" placeholder="Pesquisar Aluno" size="large" />
        <Search size={22} />
      </SearchContainer>

      <FilterButton type="button" onClick={() => setModalAberto(true)}>
        <SlidersHorizontal size={20} />
        {textoFiltro}
      </FilterButton>

      {modalAberto && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Cursos</ModalTitle>

            <Options>
              {["ADM", "TI", "Confeitaria"].map((curso) => (
                <Label key={curso}>
                  <input
                    type="checkbox"
                    checked={cursos.includes(curso)}
                    onChange={() => marcarFiltro(curso, cursos, setCursos)}
                  />
                  {curso}
                </Label>
              ))}
            </Options>

            <ModalTitle>Turnos</ModalTitle>

            <Options>
              {["Manhã", "Tarde", "Noite"].map((turno) => (
                <Label key={turno}>
                  <input
                    type="checkbox"
                    checked={turnos.includes(turno)}
                    onChange={() => marcarFiltro(turno, turnos, setTurnos)}
                  />
                  {turno}
                </Label>
              ))}
            </Options>

            <Actions>
              <CancelButton type="button" onClick={() => setModalAberto(false)}>
                Cancelar
              </CancelButton>

              <ApplyButton type="button" onClick={() => setModalAberto(false)}>
                Aplicar
              </ApplyButton>
            </Actions>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default FiltroAlunos;