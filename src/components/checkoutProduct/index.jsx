import React from "react";
import {
  StyledCheckoutProductContainer,
  StyledCheckoutProductDescription,
  StyledCheckoutProductDetail,
  StyledCheckoutProductImage,
  StyledCheckoutProductName,
  StyledCheckoutProductQuantitySelector,
  StyledCrossIcon,
} from "./checkoutProduct.styled";
import { CROSS_ICON } from "@/constants";

const CheckoutProduct = ({
  imageURL,
  productName,
  productDescription,
  size,
  originalPrice,
  discountedPercentage,
  discountedPrice,
  deleteOnClick,
  handleQuantityChange,
  selectedQuantity, 
}) => {
  return (
    <StyledCheckoutProductContainer>
      <StyledCheckoutProductImage src={imageURL} alt={productName} />
      <StyledCheckoutProductDescription>
        <StyledCheckoutProductName>{productName}</StyledCheckoutProductName>
        <StyledCheckoutProductDetail>
          {productDescription}
        </StyledCheckoutProductDetail>
        <label>
          Quantity:{" "}
          <StyledCheckoutProductQuantitySelector
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option value="" disabled>
              Select Quantity
            </option>
            {[...Array(10).keys()].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </StyledCheckoutProductQuantitySelector>
        </label>
        <span>Size: {size}</span>
        <span>
          Payable Amount: <s>₹{originalPrice}</s>
          {"  "} <strong>₹{discountedPrice}</strong>
        </span>
        <span>Discount: {discountedPercentage}%</span>
      </StyledCheckoutProductDescription>
      <StyledCrossIcon src={CROSS_ICON} onClick={deleteOnClick} />
    </StyledCheckoutProductContainer>
  );
};

export default CheckoutProduct;
