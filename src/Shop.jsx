import React from "react";
import { Navbar } from "./component/Navbar";


import { ProductList } from "./component/ProductList";


export const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28">
        <ProductList title='All Products' />
      </div>
    </>
  );
};
