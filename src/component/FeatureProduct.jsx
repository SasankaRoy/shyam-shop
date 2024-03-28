import React from "react";

import TabletPen from "../assets/TabletPen3.png";
import CoolEarphones from "../assets/CoolEarphones.png";
import StateIcon from "../assets/stateIcon.svg";
import HaflStateIcon from "../assets/HaflStateIcon.svg";
import ProductImg7 from "../assets/ProductImg7.png";
import ProductImg8 from "../assets/ProductImg8.png";

const stateList = [StateIcon, StateIcon, StateIcon, StateIcon, HaflStateIcon];

const ProductImgList = [
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

export const FeatureProduct = () => {
  return (
    <div className="my-3 py-3 ">
      <div className="w-[90%] h-full mx-auto flex justify-center items-start gap-4 ">
        <div className="w-[50%] h-full flex flex-col justify-center items-center gap-5">
          <div className="w-full h-[75%] flex flex-col justify-center items-center productPreviewBg">
            <div className="flex justify-center items-center h-[80%] w-full">
              <img
                className="w-[60%] object-contain"
                alt="productPreview"
                src={TabletPen}
              />
            </div>
            <div className="h-[20%] w-full">
              <div className="w-[80%] mx-auto py-5">
                <div className="flex justify-between items-center">
                  <h2 className="Exo2__font font-[700] text-2xl text-[#000]">
                    Samsung galaxy tab3
                  </h2>

                  <button className="Exo2__font font-[700] text-md text-[#fff] bg-[#000] rounded-[58px] px-4 py-2">
                    Buy Now!
                  </button>
                </div>

                <div className="flex justify-between items-center mt-3 w-[95%]">
                  <div className="flex justify-start items-center">
                    {stateList.map((state, id) => (
                      <img src={state} alt={`Product stateImg-${id}`} />
                    ))}
                  </div>

                  <h2 className="Exo2__font font-[700] text-2xl text-[#000] text-center">
                    $500
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-[25%]">
            {ProductImgList.map((cur, id) => (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-[70%] bg-[#E9E9E9] flex justify-center items-center">
                  <div className="w-[80%] h-[80%]  flex justify-center items-center">
                    <img
                      className="h-48 w-48 object-contain"
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
        </div>

        {/* <div className="w-[50%]  bg-cyan-500">the right div</div> */}
        <div className="w-[50%] h-full flex flex-col justify-center items-center gap-5">
          <div className="grid grid-cols-2 gap-4 w-full h-[25%]">
            {ProductImgList.map((cur, id) => (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-[70%] bg-[#E9E9E9] flex justify-center items-center">
                  <div className="w-[80%] h-[80%]  flex justify-center items-center">
                    <img
                      className="h-48 w-48 object-contain"
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
          <div className="w-full h-[75%] flex flex-col justify-center items-center productPreviewBg2">
            <div className="flex justify-center items-center h-[80%] w-full">
              <img
                className="w-[60%] object-contain"
                alt="productPreview"
                src={CoolEarphones}
              />
            </div>
            <div className="h-[20%] w-full">
              <div className="w-[80%] mx-auto py-5">
                <div className="flex justify-between items-center">
                  <h2 className="Exo2__font font-[700] text-2xl text-[#000]">
                    Samsung galaxy tab3
                  </h2>

                  <button className="Exo2__font font-[700] text-md text-[#fff] bg-[#000] rounded-[58px] px-4 py-2">
                    Buy Now!
                  </button>
                </div>

                <div className="flex justify-between items-center mt-3 w-[95%]">
                  <div className="flex justify-start items-center">
                    {stateList.map((state, id) => (
                      <img src={state} alt={`Product stateImg-${id}`} />
                    ))}
                  </div>

                  <h2 className="Exo2__font font-[700] text-2xl text-[#000] text-center">
                    $500
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
