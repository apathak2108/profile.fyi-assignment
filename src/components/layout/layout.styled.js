import styled from "styled-components";

export const StyledLayout = styled.main`
  height: 100vh;
  width: 100vw;
  margin: -8px;
  font-family: Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
`;

export const StyledChildrenLayout = styled.main`
  position: relative;
  top: 64px;
  height: calc(100vh - 64px);
  width: 100%;
  overflow-y: scroll; 

  // @media (max-width: 768px) {
  //   top: 72px;
  //   row-gap: 8px;
  //   column-gap: 2%;
  //   padding-bottom: 12px;
  // }
`;
