import React from "react";
import {
  StyledAddToCardButton,
  StyledDiscountedPrice,
  StyledProductCardContainer,
  StyledProductDescription,
  StyledProductDiscountedPrice,
  StyledProductImage,
  StyledProductInfoContainer,
  StyledProductName,
  StyledProductOriginalPrice,
  StyledProductPriceContainer,
} from "./productCard.styled";
import { STRINGS } from "@/constants";

const ProductCard = ({
  imageURL,
  productName,
  productDescription,
  discountedPrice,
  originalPrice,
  discountedPercentage,
  addToCardClick,
}) => {
  return (
    <StyledProductCardContainer>
      <StyledProductImage src={imageURL} alt={productName} />
      <StyledProductInfoContainer>
        <StyledProductName>{productName}</StyledProductName>
        <StyledProductDescription>
          {productDescription}
        </StyledProductDescription>
        <StyledProductPriceContainer>
          <span>
            <StyledProductDiscountedPrice>
              ₹{discountedPrice}
            </StyledProductDiscountedPrice>
            <StyledProductOriginalPrice>
              ₹{originalPrice}
            </StyledProductOriginalPrice>
          </span>
          <span>
            <StyledDiscountedPrice>
              {discountedPercentage} % OFF
            </StyledDiscountedPrice>
          </span>
        </StyledProductPriceContainer>
      </StyledProductInfoContainer>
      <StyledAddToCardButton onClick={addToCardClick}>
        {STRINGS.ADD_TO_CART}
      </StyledAddToCardButton>
    </StyledProductCardContainer>
  );
};

export default ProductCard;
