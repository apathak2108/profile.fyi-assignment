import Image from "next/image";
import styled from "styled-components";

export const StyledProductCardContainer = styled.article`
  height: 383px;
  background-color: white;
  margin: 10px;
  width: 210px;
  transition: transform 0.2s ease-in;
  border: 1px solid grey;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }

  @media (min-width: 360px) and (max-width: 768px) {
    width: calc(50% - 10px);
    margin: 0 0 1px 0;
  }
`;

export const StyledProductImage = styled.img`
  height: 280px;
  width: 100%;
`;

export const StyledProductInfoContainer = styled.section`
  height: 78px;
  display: flex;
  flex-flow: column;
  text-indent: 2px;
`;

export const StyledProductName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 6px;
`;

export const StyledProductDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const StyledProductPriceContainer = styled.div`
  line-height: 26px;
  display: flex;
`;

export const StyledProductDiscountedPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #282c3f;
`;

export const StyledProductOriginalPrice = styled.span`
  text-decoration: line-through;
  color: #7e818c;
  font-weight: 400;
  margin-left: 5px;
  font-size: 12px;
`;

export const StyledDiscountedPrice = styled.span`
  color: #ff905a;
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
`;

export const StyledAddToCardButton = styled.div`
  height: 33px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin-top: -12px;
  background-color: #2874f0;
  z-index: 1;

  &:hover
    background-color: #1f5dc2;
  }
`;
