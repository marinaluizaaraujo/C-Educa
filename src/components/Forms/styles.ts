
import styled from "styled-components"

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
`;
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const FullWidth = styled.div`
    grid-column: span 2;    
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Select = styled.select`
    height: 40px;
    background-color: #D9D9D9;
    color: #333333;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 0 12px;
     
`;