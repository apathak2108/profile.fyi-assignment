import React from "react";
import {
  StyledCheckoutContainer,
  StyledEmptyCartMessage,
} from "./checkout.styled";
import CheckoutProduct from "@/components/checkoutProduct";
import { useDispatch, useSelector } from "react-redux";
import { STRINGS } from "@/constants";

const CheckoutContainer = () => {
  const cartItems = useSelector((state) => state?.checkout?.cartProductIds);
  return (
    <StyledCheckoutContainer>
      {cartItems.length == 0 && (
        <StyledEmptyCartMessage>
          {STRINGS.EMPTY_CART_MESSAGE}
        </StyledEmptyCartMessage>
      )}
      {!cartItems.length == 0 && <CheckoutProduct />}
    </StyledCheckoutContainer>
  );
};

export default CheckoutContainer;
