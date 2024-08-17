"use client";
import { React } from "react";
import {
  StyledProductContainer,
  StyledProductDescriptionContainer,
  StyledProductImageContainer,
} from "./product.styled";

const ProductContainer = () => {
  return (
    <StyledProductContainer>
      <StyledProductImageContainer>
        <StyledProductImage />
      </StyledProductImageContainer>
      <StyledProductDescriptionContainer></StyledProductDescriptionContainer>
    </StyledProductContainer>
  );
};

export default ProductContainer;
