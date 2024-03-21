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

const stateList = [StateIcon, StateIcon, StateIcon, StateIcon,HaflStateIcon];

const ProductImgList = [
    ProductImg1,
    ProductImg2,
    ProductImg3,
    ProductImg4,
    ProductImg5,
    ProductImg6,
    // ProductImg7,
    ProductImg8
]

export const ProductList = () => {
  return (
    <div>
      <div className="w-[90%] h-full mx-auto p-3 my-5">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl ">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-7">
        {
            ProductImgList.map((img,id)=>(

          <div key={id}>
            <div className="bg-[#E9E9E9] flex justify-center items-center py-10">
              <img
                className="w-[60%]"
                src={img}
                alt="Product Image-1"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-start items-center">
                {stateList.map((item, index) => (
                  <img src={item} key={index} />
                ))}               
              </div>
              <h3 className="text-sm my-1 font-[400] text-[#000] Exo2__font">Anl-esport bluetooth controller</h3>
              <div className="flex justify-start items-center gap-3">
                <h2 className="text-md font-[700] text-[#000] Exo2__font">$20</h2>
                <h2 className="text-md font-[400] text-[#303030] Exo2__font odlerPrice">$20</h2>
              </div>
            </div>
          </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};
