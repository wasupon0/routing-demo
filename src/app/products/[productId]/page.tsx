import React from "react";

export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product params {params.productId}</h1>;
}
