"use client";

import React from "react";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/ ");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
