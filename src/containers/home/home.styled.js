import styled from "styled-components";

export const StyledHomeContainer = styled.main`
  display: flex;
  column-gap: 5%;
  justify-content: center;
  align-text: center;
  flex-wrap: wrap;
  padding: 24px 0;

  @media (max-width: 768px) {
    column-gap: 6px;
    row-gap: 8px;
  }
`;
