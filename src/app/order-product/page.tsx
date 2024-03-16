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

      <button
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Place order
      </button>
    </>
  );
};

export default OrderProduct;
