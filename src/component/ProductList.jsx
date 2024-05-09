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
import { ProductImgList } from "../dummyData";

const stateList = [StateIcon, StateIcon, StateIcon, StateIcon, HaflStateIcon];



export const ProductList = ({ title }) => {
  return (
    <div className="h-screen">
      <div className="w-[90%] h-full mx-auto p-3 my-5">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl ">
          {title}
        </h2>
        <div className="grid grid-cols-4 gap-3 mt-5 h-[80%]">
          {ProductImgList.map((cur, id) => (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full h-[70%] bg-[#E9E9E9] flex justify-center items-center">
                <div className="w-[80%] h-[80%]  flex justify-center items-center">
                  <img
                    className="h-48 w-48 object-contain"
                    alt={`Product-${id}`}
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
                <h3 className="text-md my-1 font-[500] text-[#000] Exo2__font">
                  {cur.title}
                </h3>
                <div className="flex justify-start items-center gap-2">
                  <h2 className="text-md font-[700] text-[#000] Exo2__font">
                    ${cur.newPrice}
                  </h2>
                  <h2 className="text-md font-[400] text-[#303030] Exo2__font odlerPrice">
                    <del>${cur.oldPrice}</del>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        {title == "Explore Our Products" && (
          <button className="ProductListBtnlinearBg shadow-md text-[#fff] text-md font-[700] my-5 px-4 py-2 rounded-[52px] Exo2__font">
            Show more
          </button>
        )}
      </div>
    </div>
  );
};
