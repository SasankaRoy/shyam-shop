import React from "react";
import {motion} from 'framer-motion';


import DbPuseBg1 from "../assets/DB-PULSE2.png";
import DbPuseBg2 from "../assets/DB-PULSE3.png";
import DbPuseBg3 from "../assets/DB-PULSE4.png";
import BannerHeadphoneImg from "../assets/BannerHeadphoneImg.png";

export const Banner = () => {
  return (
    <div className="h-[45dvh] my-5">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.6,ease:"backOut"}} className="w-[90%] relative h-full mx-auto bannerLinearBg ">
        <div className="flex justify-between items-center w-full h-full ">
          <div className="w-[49%] h-full relative">
            <motion.img
            initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:'backOut',
                delay:.5
            }}
              src={DbPuseBg3}
              className="absolute top-[8%] left-10 w-[70%]"
              alt="DbPuseBg3"
            />
            <motion.img
            initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
                
            }}
            transition={{
                duration:1,
                ease:'backOut',
                delay:.5
            }}
              src={DbPuseBg1}
              className="absolute top-[38%] left-10 w-[70%]"
              alt="DbPuseBg1"
            />
            <motion.img
            initial={{
                y:100,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:'backOut',
                delay:.5
            }}
              src={DbPuseBg2}
              className="absolute top-[70%] left-10 w-[70%]"
              alt="DbPuseBg2"
            />

            <motion.img initial={{y:250,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.9,ease:'backOut',delay:.9}}
              src={BannerHeadphoneImg}
              className="absolute -top-24 left-8 w-[70%] dropShadowCustom"
              alt="BannerHeadphoneImg"
            />
          </div>
          <div className="w-[49%] relative h-full flex justify-start items-center overflow-x-hidden hideScrollBar">
            <motion.div initial={{opacity:0}} whileInView={{opacity:.2}} transition={{duration:.8,ease:"backOut",delay:.8}} className="bg-transparent border-[40px] border-[#FFBCD7] opacity-20 absolute -top-40 -right-40 w-[57%] h-full rounded-full" />
            <motion.div initial={{y:250,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.9,ease:'backOut',delay:.9}} className="w-[45%]">
              <h3 className="text-[#fff] my-3 Exo2__font font-[600] ">
                DB-PULSE
              </h3>
              <h2 className="text-[#fff] my-1 Exo2__font font-[700] text-5xl">
                Winter sale
              </h2>
              <p className="text-[#fff] my-3  Exo2__font font-[300] text-[14px]">
                A sleek, Bluetooth headset with record-breaking battery life (up
                to 40 hours) and the latest in noise cancellation and
                voice-assist technology.
              </p>
              <button className="bg-[#fff] rounded-[52px] shadow-md px-4 py-2 my-2 Exo2__font font-sm font-[700]">
                Shop Now!
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
