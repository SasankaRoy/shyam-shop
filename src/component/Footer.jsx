import React from "react";

import FooterLogo from "../assets/Footerlogo.png";
import TikTokLogo from "../assets/tiktok.png";
import InstagramLogo from "../assets/insta.png";
import FaceBookLogo from "../assets/fb.png";

const SocialMediaLogoArr = [TikTokLogo, InstagramLogo, FaceBookLogo];

export const Footer = () => {
  return (
    <div className="footerBglinear flex justify-center items-center h-[60dvh]">
      <div className="w-[90%] flex flex-col justify-between gap-3 h-full mx-auto ">
        <div className="grid grid-cols-4 gap-4 w-full h-[90%]">
          <div className="flex flex-col justify-center items-center p-2">
            <div>
              <img src={FooterLogo} alt="footerLogo" />
            </div>
            <p className="text-sm font-[400] Exo2__font text-[#fff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec nibh aliquet, eleifend metus in, scelerisque sapien. Sed
              lectus tellus, elementum et mauris quis, rutrum molestie libero.
              Suspendisse vel urna sem.
            </p>
            <div className="flex self-start items-center gap-5 mt-3">
              {SocialMediaLogoArr.map((cur, id) => (
                <img
                  className="h-9 w-9"
                  key={id}
                  src={cur}
                  alt={`SocialMediaLogo-${id}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-start py-2 px-5 ">
            <h4 className="text-start font-[700] text-xl Exo2__font text-[#fff]">
              Menu
            </h4>
            <ul>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Home
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Shop
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                About us
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Blogs
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                contact us
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start py-2 px-5 ">
            <h4 className="text-start font-[700] text-xl Exo2__font text-[#fff]">
              Items
            </h4>
            <ul>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Headphones
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Smartphones
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Speakers
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Laptops
              </li>
              <li className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
                Monitors
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start py-2 px-5 ">
            <h4 className="text-start font-[700] text-xl Exo2__font text-[#fff]">
              Contact us
            </h4>
            <a
              href="#"
              className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]"
            >
              +1 232-323-4343
            </a>
            <p className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">
              Lorem ipsum dolor sit amet, conse ctetur adipisci
            </p>
          </div>
        </div>
        <div className=" border-t border-[#fff] h-[10%] flex justify-between items-center px-1">
          <span className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">2024 All right reserved</span>
          <span className="text-start font-[500] text-lg py-2 Exo2__font text-[#fff]">Designed by Kyptronix</span>
        </div>
      </div>
    </div>
  );
};
