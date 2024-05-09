import React from "react";
import { Navbar } from "./component/Navbar";

export const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="mt-32">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-around items-center">
            <button className="text-white w-[20%] py-4 shadow-md rounded-md font-semibold Exo2__font text-xl ProductListBtnlinearBg  transition-all duration-150 ease-in-out">
              Order Ouery
            </button>
            <button className="text-white w-[20%] py-4 shadow-md rounded-md font-semibold Exo2__font text-xl ProductListBtnlinearBg  transition-all duration-150 ease-in-out">Account Query</button>
            <button className="text-white w-[20%] py-4 shadow-md rounded-md font-semibold Exo2__font text-xl ProductListBtnlinearBg  transition-all duration-150 ease-in-out">returns & Exchange</button>
          </div>
        </div>
      </div>
    </>
  );
};
