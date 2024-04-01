import React from "react";

import BlogImg1 from "../assets/BlogImg1.png";
import BlogImg2 from "../assets/BlogImg2.png";
import BlogImg3 from "../assets/BlogImg3.png";
import BlogImg4 from "../assets/BlogImg4.png";
import { BlogCard } from "./BlogCard";

const BlogData = [
  {
    img: BlogImg1,
    title: "How Hybrid active noise cancellation tech works",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh aliquet, eleifend metus in, scelerisque sapien.",
    link: "#",
    duration:.5
  },
  {
    img: BlogImg2,
    title: `Can’t decide which one to buy among 
    so many consoles`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh aliquet, eleifend metus in, scelerisque sapien.",
    link: "#",
    duration:.8
  },
  {
    img: BlogImg3,
    title: "How AI algorithms are helping humanity",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh aliquet, eleifend metus in, scelerisque sapien.",
    link: "#",
    duration:1.1
  },
  {
    img: BlogImg4,
    title: "Worlds first 600hz monitor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh aliquet, eleifend metus in, scelerisque sapien.",
    link: "#",
    duration:1.4
  },
];

export const BlogList = () => {
  return (
    <>
      <div className="w-[90%] mx-auto my-10 p-3">
        <h2 className="linearBg__Text Exo2__font font-[700] text-2xl">
          Our Blogs
        </h2>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {BlogData.map((cur, id) => (
            <>
              <BlogCard cur={cur} id={id} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
