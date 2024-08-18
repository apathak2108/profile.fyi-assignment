import styled from 'styled-components';

export const StyledPaymentDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const StyledMessage = styled.h1`
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 20px;
`;

export const StyledTransactionDetails = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  background-color: #2874f0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #1e5bb8;
  }
`;
