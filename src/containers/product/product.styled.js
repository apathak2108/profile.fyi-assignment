import styled from "styled-components";

export const StyledProductContainer = styled.main`
  display: flex;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

export const StyledProductImageContainer = styled.section`
  width: 55%;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 98%;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const StyledProductDescriptionContainer = styled.section`
  width: 60%;
  margin: 15px 0;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

export const StyledProductImage = styled.img`
  height: 510px;
`;

export const StyledProductDetailsContainer = styled.article`
  height: 90%;
  width: 90%;
`;

export const StyledProductSpecsContainer = styled.article`
  margin-top: 15px;
  width: 40%;
  margin-left: 22px;
`;

export const StyledPrimaryHeading = styled.h1`
  color: #282c3f;
  margin-top: 0px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-left: 10px;
`;

export const StyledSecondaryHeading = styled.h2`
  color: #8d9e9e;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
`;

export const StyledStrongText = styled.strong`
  color: #282c3f;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  margin-left: 10px;
`;

export const StyledProductOriginalPrice = styled.span`
  margin-left: 12px;
  font-size: 20px;
  line-height: 1.2;
  color: #8d9e9e;
`;

export const StyledProductDiscountedPrice = styled.span`
  margin-left: 12px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ff905a;
`;

export const StyledProductTaxStatement = styled.span`
  color: #03a685;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  margin: 5px 0 0 10px;
`;

export const StyledTernaryHeading = styled.h4`
  margin-left: 10px;
`;

export const StyledSizeButtonsContainer = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

export const StyledSizeButton = styled.div`
  background-color: transparent;
  border-radius: 35px;
  border: 1px solid darkgray;
  font-size: 14px;
  font-weight: 500;
  color: #282c3f;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.selected &&
    `color: #2874f0;
     border-color: #2874f0;`}
  &:hover {
    border: 1px solid #2874f0;
    color: #2874f0;
    cursor: pointer;
  }
`;

export const StyledAddToCartButton = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  background-color: #2874f0;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  height: 41px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    background-color: #1e5dc2;
  }
`;

export const StyledProductExtraDetailsContainer = styled.article`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const StyledSpecsText = styled.p`
  margin: 0;
  margin-left: 10px;
  margin-bottom: 2px;
`;

export const StyledErrorMessage = styled.span`
  color: #f16565;
  font-size: 14px;
  margin-left: 10px;
`;

export const StyledUnselectedProductError = styled.h3`
  margin: auto;
  margin-top: 24px;
`;
