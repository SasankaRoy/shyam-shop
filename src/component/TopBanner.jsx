import React from "react";
import { motion } from "framer-motion";

export const TopBanner = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
        className="h-[85vh] relative bannerLinearBg flex justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.8, ease: "backInOut" }}
          className="absolute opacity-50 h-96 w-96 rounded-full border-[50px] -top-32 -left-52 border-gray-300 bg-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.8, ease: "backInOut" }}
          className="absolute opacity-50 h-96 w-96 rounded-full border-[50px] -bottom-32 -right-52 border-gray-300 bg-transparent"
        />
        <h1 className="text-6xl text-white font-semibold Exo2__font">
          About-us
        </h1>
      </motion.div>

      <div className="m-8">
        <div className=" w-[85%] mx-auto flex justify-between items-center">
          {/* <h2 className="text-5xl linearBg__Text text-center Exo2__font font-semibold">Our Story</h2> */}

          <div className="w-[50%]">
            <h2 className="text-4xl font-semibold Exo2__font linearBg__Text">
              Our Stroy
            </h2>
            <p className="text-base Exo2__font font-semibold my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus arcu lobortis magna tempus placerat. In consectetur turpis
              at interdum facilisis. Nam sagittis neque id suscipit dapibus.
              Quisque imperdiet est sit amet libero auctor, ut convallis tortor
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus maximus arcu lobortis magna tempus placerat. In
              consectetur turpis at interdum facilisis. Nam sagittis neque id
              suscipit dapibus. Quisque imperdiet est sit amet libero auctor, ut
              convallis tortor egestas.
            </p>
          </div>
          <div className="w-[50%]">
            <img />
          </div>

        </div>
      </div>
    </>
  );
};
