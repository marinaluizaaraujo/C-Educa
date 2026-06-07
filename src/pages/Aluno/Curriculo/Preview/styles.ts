import { FileArrowDownIcon } from "@phosphor-icons/react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PencilSimpleLine, Trash } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
margin-left: 25%;
margin-top: 1.5rem;
background-color: ${({ theme }) => theme.colors.background};
border-radius: 12px;
width: 70%;
height: 95vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

export const Box = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.backgroundNav};
width: 100%;
height: 5rem;
padding: 1rem;
border-radius: 12px 12px 0 0;
`

export const DownloadButton = styled(PDFDownloadLink)`
text-decoration: none;
color: white;
`

export const VisualizacaoPDF = styled(PDFViewer)`
height: 85%;
width: 50%;
`

export const Alinhar = styled.div`
gap: 10px;
display: flex;
align-items: center;

`

export const IconeCurriculo = styled(FileArrowDownIcon)`
color: ${({ theme }) => theme.colors.textPrimary};
width: 20px;
height: 20px;
`

export const IconeEditar = styled(PencilSimpleLine)`
color: ${({ theme }) => theme.colors.textPrimary};
width: 20px;
height: 20px;
`

export const IconeDelete = styled(Trash)`
color: ${({ theme }) => theme.colors.textPrimary};
width: 20px;
height: 20px;
`