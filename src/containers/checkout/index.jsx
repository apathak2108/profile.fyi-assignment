import React from "react";
import {
  StyledCheckoutContainer,
  StyledEmptyCartMessage,
} from "./checkout.styled";
import CheckoutProduct from "@/components/checkoutProduct";
import { useDispatch, useSelector } from "react-redux";
import { STRINGS } from "@/constants";
import { PRODUCTS } from "@/constants/helperApi";
import {
  removeCartItem,
  setSelectedQuantity,
} from "@/store/actions/checkoutActions";
import PaymentSummary from "@/components/paymentSummary";

const CheckoutContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.checkout?.cartProductIds);
  const selectedQuantities = useSelector(
    (state) => state?.checkout?.selectedQuantities
  );
  const cartProducts = cartItems.map((productId) => {
    const product = PRODUCTS.find((product) => product.itemID === productId);
    const quantity = selectedQuantities[productId] || 1;
    return { ...product, quantity };
  });

  const subtotal = cartProducts.reduce(
    (acc, product) => acc + product.discountedPrice * product.quantity,
    0
  );

  const tax = +(subtotal * 0.12).toFixed(2);
  const discount = 0;
  const total = +(subtotal + tax - discount).toFixed(2);

  const handleDelete = (productId) => {
    const confirmDelete = window.confirm(STRINGS.DELETE_CART_ITEM_CONFIRMATION);
    if (confirmDelete) {
      dispatch(removeCartItem(productId));
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(setSelectedQuantity(productId, quantity));
  };

  return (
    <StyledCheckoutContainer>
      {cartItems.length === 0 ? (
        <StyledEmptyCartMessage>
          {STRINGS.EMPTY_CART_MESSAGE}
        </StyledEmptyCartMessage>
      ) : (
        cartItems.map((productId) => {
          const product = PRODUCTS.find(
            (product) => product.itemID === productId
          );
          const quantity = selectedQuantities[productId] || 1;

          return (
            product && (
              <CheckoutProduct
                key={product.itemID}
                imageURL={product.imageURL}
                productName={product.productName}
                productDescription={product.productDescription}
                originalPrice={product.originalPrice}
                discountedPercentage={product.discountedPercentage}
                discountedPrice={product.discountedPrice}
                deleteOnClick={() => handleDelete(product.itemID)}
                handleQuantityChange={(quantity) =>
                  handleQuantityChange(product.itemID, quantity)
                }
                quantity={quantity}
              />
            )
          );
        })
      )}
      {!cartItems.length == 0 && (
        <PaymentSummary
          subtotal={subtotal}
          tax={tax}
          discount={discount}
          total={total}
        />
      )}
    </StyledCheckoutContainer>
  );
};

export default CheckoutContainer;
