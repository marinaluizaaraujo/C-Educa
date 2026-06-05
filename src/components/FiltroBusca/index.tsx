import { useState } from "react";
import Input from "../Input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Container, SearchContainer, FilterButton, ModalOverlay, ModalContent, ModalTitle, Label, Options, Actions, ApplyButton, CancelButton } from "./style";
import { useAlunos } from "../../contexts/AlunosContext";

const CURSOS = [
  { label: "Administração", value: "adm" },
  { label: "Programação", value: "programacao" },
  { label: "Confeitaria", value: "confeitaria" },
]

const TURNOS = [
  { label: "Manhã", value: "manha" },
  { label: "Tarde", value: "tarde" },
  { label: "Noite", value: "noite" },
]

function FiltroAlunos() {
  const {
    busca, setBusca,
    cursosSelecionados, setCursosSelecionados,
    turnosSelecionados, setTurnosSelecionados,
  } = useAlunos()

  const [modalAberto, setModalAberto] = useState(false);

  const [cursosTemp, setCursosTemp] = useState<string[]>(cursosSelecionados)
  const [turnosTemp, setTurnosTemp] = useState<string[]>(turnosSelecionados)

  function toggle(
    valor: string,
    lista: string[],
    setLista: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    setLista(lista.includes(valor)
      ? lista.filter(i => i !== valor)
      : [...lista, valor]
    )
  }

  function abrirModal() {
    setCursosTemp(cursosSelecionados)
    setTurnosTemp(turnosSelecionados)
    setModalAberto(true)
  }

  function aplicar() {
    setCursosSelecionados(cursosTemp)
    setTurnosSelecionados(turnosTemp)
    setModalAberto(false)
  }

  function cancelar() {
    setCursosTemp(cursosSelecionados)
    setTurnosTemp(turnosSelecionados)
    setModalAberto(false)
  }

  const totalFiltros = cursosSelecionados.length + turnosSelecionados.length
  const textoFiltro = totalFiltros > 0
    ? `${totalFiltros} filtro${totalFiltros > 1 ? "s" : ""} aplicado${totalFiltros > 1 ? "s" : ""}`
    : "Filtrar Turmas e Turnos"

  return (
    <Container>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Pesquisar Aluno"
          size="large"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Search size={22} />
      </SearchContainer>

      <FilterButton type="button" onClick={abrirModal}>
        <SlidersHorizontal size={20} />
        {textoFiltro}
      </FilterButton>

      {modalAberto && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Cursos</ModalTitle>

            <Options>
              {CURSOS.map(({ label, value }) => (
                <Label key={value}>
                  <input
                    type="checkbox"
                    checked={cursosTemp.includes(value)}
                    onChange={() => toggle(value, cursosTemp, setCursosTemp)}
                  />
                  {label}
                </Label>
              ))}
            </Options>

            <ModalTitle>Turnos</ModalTitle>

            <Options>
              {TURNOS.map(({ label, value }) => (
                <Label key={value}>
                  <input
                    type="checkbox"
                    checked={turnosTemp.includes(value)}
                    onChange={() => toggle(value, turnosTemp, setTurnosTemp)}
                  />
                  {label}
                </Label>
              ))}
            </Options>

            <Actions>
              <CancelButton type="button" onClick={cancelar}>
                Cancelar
              </CancelButton>

              <ApplyButton type="button" onClick={aplicar}>
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