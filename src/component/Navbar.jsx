import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/searchIcon.png";
import LikeIcon from "../assets/likeIcon.png";
import CartIcon from "../assets/cartIcon.png";

export const Navbar = () => {
  const [screenPositionY, setScreenPositionY] = useState(0);

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
    <nav className={`fixed w-screen transition-all duration-200 delay-100 ease-in-out ${screenPositionY >= 5 ? 'backdrop-blur-md bg-white shadow-md':'bg-transparent'} z-50`}>
      <div className="flex justify-center items-center">
        <div className="flex-1 flex justify-center items-center">
          <div>
            <img src={Logo} className="cursor-pointer" alt="logo" />
          </div>
          <div>
            <ul className="flex justify-center items-center gap-4">
              {["Home", "Shop", "About Us", "Contact Us", "Blogs"].map(
                (cur, id) => (
                  <li key={id}>
                    <a href="#" className="Exo2__font text-lg font-[500]">
                      {cur}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-3 px-3 py-2 rounded-3xl border border-[#9E9E9E]">
              <input
                placeholder="Search...."
                className="border-none outline-none px-1 bg-transparent"
              />
              <img src={SearchIcon} alt="SearchIcon" />
            </div>
            <div className="flex justify-center items-center gap-6">
              <button>
                <img src={LikeIcon} />
              </button>
              <button>
                <img src={CartIcon} />
              </button>
              <button className="bg-[#0EEA90] text-white  px-5 py-2 rounded-3xl Exo2__font font-[700]">
                Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
