import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";

import Logo from "../assets/logo.png";
import SearchIcon from "../assets/searchIcon.png";
import LikeIcon from "../assets/likeIcon.png";
import CartIcon from "../assets/cartIcon.png";
import ProductImg8 from "../assets/ProductImg8.png";

import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [screenPositionY, setScreenPositionY] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  // console.log(showCart);

  const variants = {
    opening: {
      opacity: [0, 1],
      y: [-500, 0],
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
    closing: {
      opacity: [1, 0],
      x: [0, 500],
    },
  };

  useEffect(() => {
    const listeOnScroll = () => {
      setScreenPositionY(window.scrollY);
    };

    window.addEventListener("scroll", listeOnScroll);

    return () => {
      window.removeEventListener("scroll", listeOnScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-screen transition-all duration-200 delay-100 ease-in-out ${
        screenPositionY >= 5
          ? "backdrop-blur-md bg-white shadow-md"
          : "bg-transparent"
      } z-50`}
    >
      <div className="flex justify-center items-center">
        <div className="flex-1 flex justify-center items-center ">
          <div>
            <img src={Logo} className="cursor-pointer" alt="logo" />
          </div>
          <div className="hidden lg:inline-flex">
            <ul className="flex justify-center items-center gap-4">
              {[{title:"Home",path:'/'}, {title:"Shop",path:'/shop'}, {title:"About Us",path:'/about-us'}, {title:"Contact Us",path:'/contact'}, {title:"Blogs",path:'/blogs'}].map(
                (cur, id) => (
                  <Link
                    key={id}
                    to={cur.path}
                    className="Exo2__font text-lg font-[500]"
                  >
                    {cur.title}
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center ">
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            <div className="flex justify-center items-center gap:1 lg:gap-3  px-3 py-2 rounded-3xl border border-[#9E9E9E]">
              <input
                placeholder="Search...."
                className="border-none outline-none px-1 bg-transparent"
              />
              <img className="w-4" src={SearchIcon} alt="SearchIcon" />
            </div>
            <div className="hidden lg:flex justify-center items-center gap:2 lg:gap-6">
              <button>
                <img src={LikeIcon} alt="LikeIcon" />
              </button>
              <button>
                <img src={CartIcon} alt="CartIcon" />
              </button>
              <button className="bg-[#0EEA90] text-white  px-5 py-2 rounded-3xl Exo2__font font-[700]">
                Account
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-evenly items-center lg:hidden">
          <button
            onClick={() => {
              setShowCart(!showCart);
              setShowMenu(false);
            }}
            className="cursor-pointer"
          >
            <img src={CartIcon} alt="CartIcon" />
          </button>

          <button
            onClick={() => {
              setShowMenu(!showMenu);
              setShowCart(false);
            }}
            className="cursor-pointer"
          >
            <MenuIcon className="text-3xl" />
          </button>
        </div>
      </div>

      {showCart && (
        <motion.div
          animate={showCart ? "opening" : `closing`}
          variants={variants}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="absolute h-screen bg-white w-full"
        >
          <Cart showCart={showCart} />
        </motion.div>
      )}

      {showMenu && (
        <motion.div
          animate={showMenu ? "opening" : `closing`}
          variants={variants}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="absolute min-h-max bg-white w-full py-5"
        >
          <Menu showMenu={showMenu} />
        </motion.div>
      )}
    </nav>
  );
};

const Cart = ({ showCart, setShowCart }) => {
  return (
    <>
      <motion.div className=" h-full w-full px-5 py-5">
        <div className="flex justify-center items-center gap-3 h-52 rounded-md ">
          <div className="w-[30%] h-full flex justify-center items-center bg-[#E9E9E9] rounded-md shadow-md">
            <img
              className="h-[90%] object-cover"
              src={ProductImg8}
              alt="productImg"
            />
          </div>
          <div className="w-[70%] h-full p-2">
            <h2 className="text-xl my-1 font-[500] text-[#000] Exo2__font line-clamp-2">
              Samsung Galaxy S24 Plus 5G Samsung Galaxy S24 Plus 5G Samsung
              Galaxy S24 Plus 5G Samsung Galaxy S24 Plus 5G
            </h2>

            <div className="flex justify-between items-center mt-3 px-3">
              <div className="flex-1">
                <p className="line-clamp-1">
                  <span className="text-md font-[400] text-[#303030] Exo2__font">
                    Ram :
                  </span>
                  <span className="text-lg font-[700]  Exo2__font"> 4 GD</span>
                </p>
              </div>

              <div className="flex-1">
                <p className="line-clamp-1 text-right">
                  <span className="text-md font-[400] text-[#303030] Exo2__font">
                    Rom :
                  </span>
                  <span className="text-lg font-[700]  Exo2__font">
                    {" "}
                    128 GD
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Menu = ({ showMenu, setShowCart }) => {
  return (
    <>
      <motion.div className=" h-full w-full flex flex-col justify-start gap-5">
        <ul className="flex flex-col justify-center items-center gap-2 mt-4">
          {["Home", "Shop", "About Us", "Contact Us", "Blogs"].map(
            (cur, id) => (
              <motion.li
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "backInOut" }}
                key={id}
                className=" py-2 px-5 w-[95%] hover:bg-gray-200 rounded-md"
              >
                <a href="/" className="Exo2__font text-2xl  font-[500]">
                  {cur}
                </a>
              </motion.li>
            )
          )}
        </ul>
        <button className="bg-[#0EEA90] w-[90%] mx-auto text-white px-5 py-3 rounded-2xl text-xl Exo2__font font-[700]">
          Account
        </button>
      </motion.div>
    </>
  );
};
