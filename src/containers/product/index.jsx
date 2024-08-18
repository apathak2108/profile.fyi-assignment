"use client";
import { React, useEffect, useState } from "react";
import {
  StyledAddToCartButton,
  StyledErrorMessage,
  StyledPrimaryHeading,
  StyledProductContainer,
  StyledProductDescriptionContainer,
  StyledProductDetailsContainer,
  StyledProductDiscountedPrice,
  StyledProductImage,
  StyledProductImageContainer,
  StyledProductOriginalPrice,
  StyledProductSpecsContainer,
  StyledProductTaxStatement,
  StyledSecondaryHeading,
  StyledSizeButton,
  StyledSizeButtonsContainer,
  StyledSpecsText,
  StyledStrongText,
  StyledTernaryHeading,
  StyledUnselectedProductError,
} from "./product.styled";
import { PRODUCTS } from "@/constants/helperApi";
import { StyledProductPriceContainer } from "@/components/productCard/productCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSizeToCheckout } from "@/store/actions/productActions";
import { PRODUCT_SPECS, SIZES, STRINGS } from "@/constants";
import { setCartItemsToCheckout } from "@/store/actions/checkoutActions";
import { useRouter } from "next/router";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const selectedProductId = useSelector(
    (state) => state?.home?.selectedProductId
  );
  const isProductOpen = useSelector((state) => state?.home?.isProductOpen);
  const selectedProduct = PRODUCTS?.filter(
    (item) => item.itemID === selectedProductId
  )?.[0];
  const selectedSize = useSelector(
    (state) => state?.product?.selectedSizes[selectedProductId]
  );
  const handleSelectSize = (size) => {
    dispatch(setSelectedSizeToCheckout(selectedProductId, size));
  };
  const handleAddToCart = () => {
    if (selectedSize) {
      setErrorMessage("");
      dispatch(setCartItemsToCheckout(selectedProductId));
      router.push("/checkout");
    } else {
      setErrorMessage(STRINGS.SELECT_SIZE_ERROR);
    }
  };
  useEffect(() => {
    setErrorMessage("");
  }, [selectedSize]);

  return (
    <StyledProductContainer>
      {isProductOpen && (
        <>
          <StyledProductImageContainer>
            <StyledProductImage
              src={selectedProduct?.imageURL}
              alt={selectedProduct?.productName}
            />
          </StyledProductImageContainer>
          <StyledProductDescriptionContainer>
            <StyledProductDetailsContainer>
              <StyledPrimaryHeading>
                {selectedProduct?.productName}
              </StyledPrimaryHeading>
              <StyledSecondaryHeading>
                {selectedProduct?.productDescription}
              </StyledSecondaryHeading>
              <StyledProductPriceContainer>
                <StyledStrongText>
                  ₹ {selectedProduct?.discountedPrice}
                </StyledStrongText>
                <StyledProductOriginalPrice>
                  MRP <s>₹ {selectedProduct?.originalPrice}</s>
                </StyledProductOriginalPrice>
                <StyledProductDiscountedPrice>
                  {selectedProduct?.discountedPercentage}% OFF
                </StyledProductDiscountedPrice>
              </StyledProductPriceContainer>
              <StyledProductTaxStatement>
                {STRINGS.TAX_INCLUSIVE}
              </StyledProductTaxStatement>
              <StyledTernaryHeading>{STRINGS.SELECT_SIZE}</StyledTernaryHeading>
              <StyledSizeButtonsContainer>
                {SIZES.map((size) => (
                  <StyledSizeButton
                    key={size}
                    selected={selectedSize === size}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size}
                  </StyledSizeButton>
                ))}
              </StyledSizeButtonsContainer>
              {errorMessage && (
                <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
              )}
              <StyledAddToCartButton onClick={handleAddToCart}>
                {STRINGS.ADD_TO_CART}
              </StyledAddToCartButton>
              <hr />
              <div className="best-offers-container">
                <h4>{STRINGS.BEST_OFFERS}</h4>
                <ul>
                  <li>{STRINGS.BEST_PRICE}</li>
                  <li>{STRINGS.COUPUN_DISCOUNT}</li>
                  <li>{STRINGS.APPLICABLE_ON}</li>
                  <li>
                    Coupon code: <strong>{STRINGS.COUPON_CODE}</strong>
                  </li>
                </ul>
              </div>
            </StyledProductDetailsContainer>
          </StyledProductDescriptionContainer>
          <StyledProductSpecsContainer>
            <StyledTernaryHeading>
              {STRINGS.PRODUCT_DETAILS}
            </StyledTernaryHeading>
            {PRODUCT_SPECS.map((spec) => (
              <StyledSpecsText>{spec}</StyledSpecsText>
            ))}
          </StyledProductSpecsContainer>
        </>
      )}
      {!isProductOpen && (
        <StyledUnselectedProductError>
          {STRINGS.UNSELECTED_PRODUCT_ERROR}
        </StyledUnselectedProductError>
      )}
    </StyledProductContainer>
  );
};

export default ProductContainer;
