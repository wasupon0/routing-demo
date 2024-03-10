import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href={"/blog"}> Blog</Link>
      <br></br>
      <Link href={"/products"}> Products</Link>
    </>
  );
}
