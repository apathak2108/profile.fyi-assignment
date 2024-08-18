import styled from "styled-components";

export const StyledCheckoutProductContainer = styled.article`
  width: 60%;
  position: relative;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 5%;
  padding: 8px;

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

export const StyledCheckoutProductImage = styled.img`
  width: 18%;
  border-radius: 3px;
`;

export const StyledCheckoutProductDescription = styled.section`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const StyledCheckoutProductName = styled.h3`
  margin: 0;
`;

export const StyledCheckoutProductDetail = styled.span``;

export const StyledCheckoutProductQuantitySelector = styled.select`
  height: 28px;
  width: 96px;
`;

export const StyledCrossIcon = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;
