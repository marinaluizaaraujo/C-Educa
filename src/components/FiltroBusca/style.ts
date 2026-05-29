import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-left: 30px;
  
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 12px;
    color: #222;
  }

  input {
    width: 280px;
    height: 42px;
    border: none;
    border-radius: 10px;
    background: #d9d9d9;
    padding: 0 42px 0 14px;
    font-size: 16px;
    outline: none;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 42px;
  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: #d9d9d9;

  font-size: 16px;
  cursor: pointer;

  color: #8a8a8a;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 320px;
  background: white;
  border-radius: 12px;
  padding: 20px;
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ApplyButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #3633a8;
  color: white;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #d9d9d9;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;