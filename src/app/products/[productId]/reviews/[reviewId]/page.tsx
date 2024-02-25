import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      Review {params.reviewId} about product {params.productId}
    </h1>
  );
}
