"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "@/constants/helperApi";
import ProductCard from "@/components/productCard";
import { StyledHomeContainer } from "./home.styled";

const HomeContainer = () => {
  const dispatch = useDispatch();

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
        />
      ))}
    </StyledHomeContainer>
  );
};

export default HomeContainer;
