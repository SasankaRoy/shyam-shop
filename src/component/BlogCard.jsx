import React from "react";
import {motion} from 'framer-motion';
   // hello
export const BlogCard = ({ cur, id }) => {
  return (
    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:cur.duration,ease:'backOut',delay:.5}} key={id} className="flex flex-col gap-3 border border-[#ccc]">
      <img src={cur.img} alt="BlogImg1" />
      <div className="flex flex-col gap-2 p-3">
        <h3 className="Exo2__font font-[700] text-md">{cur.title}</h3>
        <p className="text-[15px] Exo2__font text-[#000] font-[500]">
          {cur.desc}
        </p>
        <a
          href={cur.link}
          className="text-[16px]  Exo2__font font-[700] text-[#000] underline underline-offset-2"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};
