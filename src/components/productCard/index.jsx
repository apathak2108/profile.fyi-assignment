import React from "react";
import {
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

const ProductCard = ({
  imageURL,
  productName,
  productDescription,
  discountedPrice,
  originalPrice,
  discountedPercentage,
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
    </StyledProductCardContainer>
  );
};

export default ProductCard;
