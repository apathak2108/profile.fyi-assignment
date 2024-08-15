"use client";
import { increaseCounter } from "@/store/actions/homeActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "@/constants/helperApi";
import ProductCard from "@/components/productCard";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.home?.counter);
  const handleCounter = () => {
    dispatch(increaseCounter());
  };
  return (
    <>
      {PRODUCTS?.map((item) => (
        <ProductCard
          imageURL={item.imageURL}
          productName={item.productName}
          productDescription={item.productDescription}
          discountedPrice={item.discountedPrice}
          originalPrice={item.originalPrice}
          discountedPercentage={item.discountedPercentage}
        />
      ))}
    </>
  );
};

export default HomeContainer;
