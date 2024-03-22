import React from "react";

// images imports....
import ProductImg1 from "../assets/productImg1.png";
import ProductImg2 from "../assets/ProductImg2.png";
import ProductImg3 from "../assets/ProductImg3.png";
import ProductImg4 from "../assets/ProductImg4.png";
import ProductImg5 from "../assets/ProductImg5.png";
import ProductImg6 from "../assets/ProductImg6.png";
import ProductImg7 from "../assets/ProductImg7.png";
import ProductImg8 from "../assets/ProductImg8.png";

import StateIcon from "../assets/stateIcon.svg";
import HaflStateIcon from "../assets/HaflStateIcon.svg";

const stateList = [StateIcon, StateIcon, StateIcon, StateIcon, HaflStateIcon];

const ProductImgList = [
  {
    imageURL: ProductImg1,
    title: "Anl-esport bluetooth controller",
    newPrice: 20,
    oldPrice: 30,
  },
  {
    imageURL: ProductImg2,
    title: "Iphone 14 pro max",
    newPrice: 599,
    oldPrice: 899,
  },
  {
    imageURL: ProductImg3,
    title: "Firebolt smartwatch V3",
    newPrice: 50,
    oldPrice: 100,
  },
  {
    imageURL: ProductImg4,
    title: "OnePlus Nord Buds 2 TWS",
    newPrice: 70,
    oldPrice: 120,
  },
  {
    imageURL: ProductImg5,
    title: "Noise Buds VS104 tws",
    newPrice: 20,
    oldPrice: 25,
  },
  {
    imageURL: ProductImg6,
    title: "Senhiesser cx-150",
    newPrice: 599,
    oldPrice: 899,
  },
  {
    imageURL: ProductImg7,
    title: "Apple 20W USB-C Power Adapter",
    newPrice: 15,
    oldPrice: 20,
  },
  {
    imageURL: ProductImg8,
    title: "Samsung Galaxy S24 Plus 5G",
    newPrice: 1499,
    oldPrice: 1799,
  },
];

export const ProductList = () => {
  return (
    <div className="h-screen">
      <div className="w-[90%] h-full mx-auto p-3 my-5">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl ">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-4 gap-3 mt-5 h-[92%]">
          {ProductImgList.map((cur, id) => (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full h-[70%] bg-[#E9E9E9] flex justify-center items-center">
                <div className="w-[80%] h-[80%]  flex justify-center items-center">
                  <img
                    className="h-52 w-52 object-contain"
                    alt={`Product Image-${id}`}
                    src={cur.imageURL}
                  />
                </div>
              </div>
              <div className="w-full h-[30%] p-2">
                <div className="flex justify-start items-center">
                  {stateList.map((state, id) => (
                    <img src={state} alt={`Product stateImg-${id}`} />
                  ))}
                </div>
                <h3 className="text-sm my-1 font-[400] text-[#000] Exo2__font">
                  {cur.title}
                </h3>
                <div className="flex justify-start items-center gap-3">
                  <h2 className="text-md font-[700] text-[#000] Exo2__font">
                    ${cur.newPrice}
                  </h2>
                  <h2 className="text-md font-[400] text-[#303030] Exo2__font odlerPrice">
                    ${cur.oldPrice}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
