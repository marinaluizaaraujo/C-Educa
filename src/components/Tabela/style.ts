import { FileArrowDownIcon, PencilSimpleLine } from "@phosphor-icons/react";
import { Trash } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  width: 63rem;
  margin: 30px;
  margin-left: 22%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.backgroundNav};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    padding: 20px;
`;

export const Espaco = styled.h3`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: #F3F3F3;
  
`;

export const Row = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  margin: 20px;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f3f4f6;
  color: #333;
  font-weight: 600;
  border-bottom: 2px solid #ddd;
  font-size: 20px;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f9fafb;
  }
`;

export const EditButton = styled.button`
  border: none;
  width: 100%;
  background: transparent;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconeEditar = styled(PencilSimpleLine)`
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 25px;
  height: 25px;
    transition: color 0.3s ease;

    &:hover {
    color: ${({ theme }) => theme.colors.linha}; 
  }
`

export const IconeDelete = styled(Trash)`
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 25px;
  height: 25px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.delete}; 
  }
`

export const IconeCurriculo = styled(FileArrowDownIcon)`
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 25px;
  height: 25px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.linha}; 
  }
`
