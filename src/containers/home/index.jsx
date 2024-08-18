"use client";
import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "@/constants/helperApi";
import ProductCard from "@/components/productCard";
import { StyledHomeContainer } from "./home.styled";
import { setIsProductOpen, setSelectedProductId } from "@/store/actions/homeActions";
import { setCartItemsToCheckout } from "@/store/actions/checkoutActions";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleProductCardClick = (productId) => {
    dispatch(setSelectedProductId(productId));
    dispatch(setIsProductOpen(true));
    router.push("/product");
  };
  const handleAddToCartClick = (productId) => {
    dispatch(setCartItemsToCheckout(productId));
  };
  return (
    <StyledHomeContainer>
      {PRODUCTS?.map((item, index) => (
        <ProductCard
          key={index}
          imageURL={item.imageURL}
          productName={item.productName}
          productDescription={item.productDescription}
          discountedPrice={item.discountedPrice}
          originalPrice={item.originalPrice}
          discountedPercentage={item.discountedPercentage}
          onClick={() => handleProductCardClick(item.itemID)}
          addToCardClick={() => handleAddToCartClick(item.itemID)}
        />
      ))}
    </StyledHomeContainer>
  );
};

export default HomeContainer;
