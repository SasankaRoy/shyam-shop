import React from "react";

import StateIcon from "../assets/stateIcon.svg";
import HaflStateIcon from "../assets/HaflStateIcon.svg";
import BoatBTSpeaker from "../assets/BoatBTSpeaker.png";
import Headphone from "../assets/headphone1.png";
import Macbook from "../assets/MacLaptopImg.png";
import Smartwatch from "../assets/SmatwatchImg.png";
import Airpods from "../assets/AirpodsImg.png";
import BTSpeaker from "../assets/BTSpeakerImg.png";
import MIVIpods from "../assets/MIVIpods.png";

const stateList = [StateIcon, StateIcon, StateIcon, StateIcon, HaflStateIcon];

const DealLists = [
  {
    title: "DB-pulse Headphones",
    price: 15,
    imageURL: Headphone,
  },
  {
    title: "Macbook air M2",
    price: 1000,
    imageURL: Macbook,
  },
  {
    title: "Firebolt smartwatch",
    price: 20,
    imageURL: Smartwatch,
  },
  {
    title: "Noise Buds tws",
    price: 10,
    imageURL: Airpods,
  },
  {
    title: "boAt Stone 352",
    price: 22,
    imageURL: BTSpeaker,
  },
  {
    title: "Mivi DuoPods A750 TWS",
    price: 15,
    imageURL: MIVIpods,
  },
];

export const BestDeals = () => {
  return (
    <div className="my-10">
      <div className="w-[90%] h-full mx-auto p-3 my-5">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl ">
          Today’s Best Deals
        </h2>
        <div className="w-full h-[60%] flex justify-center items-center gap-4 my-5">
          <div className="w-[40%] flex justify-center items-center bestDealLinearBg">
            <div>
              <h2 className="Exo2__font font-[700] text-xl text-[#000] my-2">
                boAt Stone 1200
              </h2>
              <div className="flex justify-start items-center my-1">
                {stateList.map((state, id) => (
                  <img
                    className="h-4 w-4"
                    src={state}
                    alt={`Product stateImg-${id}`}
                  />
                ))}
              </div>
              <p className="Exo2__font text-lg font-[400] text-[#000]">
                Just for <span className="text-[#EA0E68] font-[700]">$80</span>
              </p>
              <button className="px-4 py-2 text-[#fff] bg-[#000] my-3 rounded-[58px] Exo2__font text-sm font-[700]">
                Buy Now!
              </button>
            </div>
            <div>
              <img className="h-64 w-68" src={BoatBTSpeaker} alt="productImg" />
            </div>
          </div>
          <div className="w-[60%] grid grid-cols-3 gap-3">
            {DealLists.map((cur, id) => (
              <div key={id} className="flex justify-center items-center w-full bg-[#E9E9E9] py-2 px-4">
                <div className=" flex-1 p-2">
                  <h3 className="text-md text-[#000] font-[700] Exo2__font ">
                    {cur.title}
                  </h3>
                  <p className="Exo2__font text-sm font-[500] text-[#000] mt-2">
                    Just for{" "}
                    <span className="text-[#EA0E68] font-[700]">${cur.price}</span>
                  </p>
                </div>
                <div className=" flex-1 flex justify-center items-center">
                  <img src={cur.imageURL} alt="productImg" className="h-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="ProductListBtnlinearBg shadow-md text-[#fff] text-md font-[700] my-5 px-4 py-2 rounded-[52px] Exo2__font">
          Show all
        </button>
      </div>
    </div>
  );
};
