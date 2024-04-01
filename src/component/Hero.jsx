import { useState } from "react";

import HeroBg from "../assets/heroBg.png";
import Dbpulse from "../assets/DB-PULSE.png";
import CompassIcon from "../assets/compassIcon.png";

import EllipseOut from "../assets/EllipseOut.png";
import EllipseInner from "../assets/EllipseInner.png";
import HeadPhone1 from "../assets/headphone1.png";
import Shape1 from "../assets/shape1.png";

import EllipseOut2 from "../assets/EllipseOut2.png";
import EllipseInner2 from "../assets/EllipseInner2.png";
import HeadPhone2 from "../assets/headphone2.png";
import Shape2 from "../assets/shape2.png";

import EllipseOut3 from "../assets/EllipseOut3.png";
import EllipseInner3 from "../assets/EllipseInner3.png";
import HeadPhone3 from "../assets/headphone3.png";
// import Shape2 from "../assets/shape2.png";

import PreIcon from "../assets/PreIcon.png";
import NextIcon from "../assets/NextIcon.png";

import { motion, AnimatePresence } from "framer-motion";

const dummyData = [
  {
    EllipseOut,
    EllipseInner,
    HeadPhone: HeadPhone1,
    Shape: Shape1,
    color: "#F31220",
  },
  {
    EllipseOut: EllipseOut2,
    EllipseInner: EllipseInner2,
    HeadPhone: HeadPhone2,
    Shape: Shape2,
    color: "#00C072",
  },
  {
    EllipseOut: EllipseOut3,
    EllipseInner: EllipseInner3,
    HeadPhone: HeadPhone3,
    Shape: Shape2,
    color: "#D2D2D9",
  },
];



// const images = [HeadPhone1, HeadPhone2, HeadPhone3];

const ImageCarousel = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const handleNextClick = () => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevClick = () => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <AnimatePresence mode="wait" initial={false}>
        <div className="absolute top-0 left-0 z-40 w-full h-full">
          <div className="w-[90%] h-full mx-auto flex justify-center items-center">
            <motion.div
              key={selectedImageIndex}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{
                duration: 0.1,
              }}
              className="flex-1 h-full flex flex-col justify-center items-start"
            >
              <img src={Dbpulse} alt="Dbpulse" />
              <h1 className="font-[700] Exo2__font text-5xl my-6">
                The{" "}
                <span style={{ color: images[selectedImageIndex].color }}>
                  ultimate listening
                </span>{" "}
                experience
              </h1>
              <p className="Exo2__font font-[400] text-md my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                maximus arcu lobortis magna tempus placerat. In consectetur turpis
                at interdum facilisis. Nam sagittis neque id suscipit dapibus.
                Quisque imperdiet est sit amet libero auctor, ut convallis tortor
                egestas.
              </p>
              <div className="flex justify-between items-center w-[60%] my-3">
                <h2 className="Exo2__font font-[500] text-[19px]">
                  Active Noise Cancellation
                </h2>
                <h2 className="Exo2__font font-[500] text-[19px]">
                  40H Battery life
                </h2>
              </div>
              <button className="linearBg Exo2__font my-5 font-[700] text-[20px] flex justify-center items-center gap-4 px-4 py-2 shadow-md text-white rounded-3xl">
                Explore <img src={CompassIcon} alt="CompassIcon" />{" "}
              </button>
            </motion.div>
            <div className="flex-1 h-full relative">
              <motion.img
                key={`${selectedImageIndex}1`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className="w-[75%] left-[12%] top-[18%] z-10 absolute"
                src={images[selectedImageIndex].EllipseOut}
                alt="EllipseOut"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={`${selectedImageIndex}2`}
                className="absolute w-[65%] left-[17%] top-[22.5%] z-20"
                src={images[selectedImageIndex].EllipseInner}
                alt="EllipseInner"
              />
  
              <motion.img
                className="absolute w-[45%] left-[25%] top-[15%] z-30"
                src={images[selectedImageIndex].HeadPhone}
                alt="HeadPhone1"
                key={selectedImageIndex}
                initial={{ x: 150, y: -180 }}
                animate={{ x: 0, y: 0 }}
                exit={{ x: -150, y: 180 }}
              />
  
              <motion.img
                key={`${selectedImageIndex}3`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute w-[8%] right-[23%] top-[22%] z-40"
                src={images[selectedImageIndex].EllipseInner}
                alt="EllipseInnerSmall1"
              />
  
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={`${selectedImageIndex}4`}
                className="absolute w-[8%] left-[19%] bottom-[19%] z-40"
                src={images[selectedImageIndex].EllipseInner}
                alt="EllipseInnerSmall2"
              />
  
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={`${selectedImageIndex}5`}
                className="absolute  right-[1%] bottom-[5%] z-40"
                src={images[selectedImageIndex].Shape}
                alt="Shape1"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={`${selectedImageIndex}6`}
                className="absolute  left-[1%] top-[13%] z-40"
                src={images[selectedImageIndex].Shape}
                alt="Shape1"
              />
  
              <button
                onClick={handlePrevClick}
                className="absolute bottom-[3%] right-[30%]"
              >
                <img src={PreIcon} alt="PreIcon" />
              </button>
              <button
                onClick={handleNextClick}
                className="absolute bottom-[3%] right-[20%]"
              >
                <img src={NextIcon} alt="NextIcon" />
              </button>
            </div>
          </div>
        </div>
      </AnimatePresence>
    );
  };

export const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
      className="h-screen"
    >
      <div className="absolute top-0 left-0 z-40 w-full h-full">
        <div className="w-[90%] h-full mx-auto flex justify-center items-center">
          <ImageCarousel images={dummyData} />
        </div>
      </div>
    </div>
  );
};
