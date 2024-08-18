import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  background-color: #2874f0;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1;
  align-content: center;
`;

export const StyledHeaderItemsContainer = styled.main`
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const StyledLogo = styled.span`
  cursor: pointer;
`;

export const StyledCartIconContainer = styled.div`
  position: relative;
`;

export const StyledCartItemsCount = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  position: absolute;
  top: -6px;
  right: -6px;
`;
