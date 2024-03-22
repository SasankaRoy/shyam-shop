import React from "react";
import { motion } from "framer-motion";

// images import....
import CatagoryImg1 from "../assets/catagoryImg1.png";
import CatagoryImg2 from "../assets/catagoryImg2.png";
import CatagoryImg3 from "../assets/catagoryImg3.png";
import CatagoryImg4 from "../assets/catagoryImg4.png";

const catagoryImgList = [
  {
    imageURL: CatagoryImg1,
    delay: 0.3,
    subTitle: "Headphones",
  },
  {
    imageURL: CatagoryImg2,
    delay: 0.6,
    subTitle: "Laptops",
  },
  {
    imageURL: CatagoryImg3,
    delay: 0.9,
    subTitle: "Smartwatches",
  },
  {
    imageURL: CatagoryImg4,
    delay: 1.2,
    subTitle: "Smartphones",
  },
];

export const CatagoryList = () => {
  return (
    <div className="h-[53dvh] mt-20">
      <div className="w-[90%] h-full mx-auto p-3 my-5">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl ">
          Shop by catagory
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-7 w-full h-[80%]">
          {catagoryImgList.map((item, id) => (
            <motion.div
              key={id}
              initial={{
                y: -140,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: item.delay,ease:'backOut'  }}
              className="relative w-full h-full"
            >
              <img
                className="w-full h-full absolute"
                src={item.imageURL}
                alt={item.subTitle}
              />
              <div className="absolute z-10 w-full h-full flex justify-center items-center">
                <div className="h-[80%] w-[80%] flex justify-center items-end">
                  <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.9,ease:'backOut'}} className=" text-[#fff] text-[1.25rem] Exo2__font text-center font-[700]">{item.subTitle}</motion.h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
