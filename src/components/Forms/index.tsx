
import { Container, FormContainer, Header, Select, Espaco, TitleContainer, Subtitle, Row, InputDate, Linha, TextArea, ButtonContainer, Btn, ReadonlyField } from "./styles";
import Input from "../Input";
import type { BtnProps, FormProps } from "./props"
import { useNavigate } from "react-router-dom"
import { formConfigByRole } from "./fields"
import type { FieldConfig } from "./fields"
import { useAlunos, type Aluno } from "../../contexts/AlunosContext";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function renderField(field: FieldConfig,
    register: ReturnType<typeof useForm>["register"],
    modo: "cadastro" | "editar") {

    const isLocked = field.readonly && modo === "editar"

    if (isLocked) {
        return (
            <ReadonlyField key={field.name}>
                <span>{field.placeholder}</span>
                <input {...register(field.name)} readOnly tabIndex={-1} />
            </ReadonlyField>
        )
    }

    if (field.type === "select") {
        return (
            <Select key={field.name} {...register(field.name)}>
                <option value="" disabled>{field.placeholder}</option>
                {field.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </Select>
        )
    }

    if (field.type === "textarea") {
        return <TextArea key={field.name}{...register(field.name)} placeholder={field.placeholder} />
    }

    if (field.type === "date") {    
        return (
            <InputDate
                key={field.name}
                {...register(field.name)}
                type="text"
                placeholder={field.placeholder}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => { if (!e.target.value) e.target.type = "text" }}
            />
        )
    }

    return (
        <Input
            key={field.name}
            {...register(field.name)}
            size="large"
            type={field.type}
            placeholder={field.placeholder}
        />
    )
}

export function Button({ campoTexto }: BtnProps) {

    const navigate = useNavigate()

    return (
        <Btn
            type={campoTexto === "cancelar" ? "button" : "submit"}
            onClick={() => campoTexto === "cancelar" && navigate(-1)}
        >
            {campoTexto === "cadastro"
                ? "Cadastrar"
                : campoTexto === "editar"
                    ? "Salvar Alterações"
                    : "Cancelar"}
        </Btn>
    )
}

export default function Form({ modo = "cadastro", role = "aluno", dadosIniciais }: FormProps) {
    const sections = formConfigByRole[role]
    const { addAluno, editAluno } = useAlunos()
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (dadosIniciais) {
            reset(dadosIniciais)
        }
    }, [dadosIniciais, reset])

    function onSubmit(data: Record<string, string>) {
        if (role === "aluno") {
            if (modo === "cadastro") {
                addAluno(data as Omit<Aluno, "ra">)
                navigate("/secretaria/alunos")
            } else if (modo === "editar" && dadosIniciais) {
                editAluno({ ...data, ra: dadosIniciais.ra } as Aluno)
                navigate("/secretaria/alunos")
            }
        }
    }

    return (
        <Container>
            <Header>
                <TitleContainer>
                    <Espaco> </Espaco>
                </TitleContainer>
            </Header>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                {sections.map((section, si) => (
                    <React.Fragment key={`section-${si}`}>
                        {si > 0 && <Linha key={`linha-${si}`} />}
                        <Subtitle key={`title-${si}`}>{section.title}</Subtitle>

                        {section.fields.map((row, ri) => (
                            <Row key={`row-${si}-${ri}`}>
                                {row.map(field => renderField(field, register, modo))}
                            </Row>
                        ))}
                    </React.Fragment>
                ))}

                <ButtonContainer>
                    <Button campoTexto="cancelar" />
                    <Button campoTexto={modo} />
                </ButtonContainer>
            </FormContainer>
        </Container>
    )
}

