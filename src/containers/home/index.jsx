"use client"
import { increaseCounter } from "@/store/actions/homeActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.home?.counter);
  const handleCounter = () => {
    dispatch(increaseCounter());
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={handleCounter}>Increment</button>
    </>
  );
};

export default HomeContainer;
