

import React from "react";
import Image from "next/image";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <div className="w-full h-[461px] pt-[140px] pb-[32px] px-[220px] gap-[200px] bg-[#043873] text-white">
      <div className="w-[1480px] h-[289px] gap-[100px] flex">
        <div className="w-[295px] h-[169px] gap-[15px]">
          <Image src={logo} alt="logo" className="w-[191px] h-[34px]" />
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mt-4">
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>
        <div className="w-[295px] h-[127px] gap-[15px]">
          <h4 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]">
            Products
          </h4>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div className="w-[295px] h-[130px] gap-[16px]">
          <h4 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]">
            Resources
          </h4>
          <ul>
            <li>Blogs</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>
        <div className="w-[295px] h-[130px] gap-[16px]">
          <h4 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]">
            Company
          </h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media Kits</li>
          </ul>
        </div>
      </div>
      <div className="w-[1600px] h-[20px] flex justify-between text-center mt-8 text-white bg-[#043873]">
        <p className="font-normal text-lg leading-[20px] tracking-[-0.02em] text-center">
          ©2021 Whitespace LLC.
        </p>
      </div>
    </div>
  );
}

export default Footer;

