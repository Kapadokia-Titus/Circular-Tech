import React from "react";
import Image from "../assets/img/optimal-electrical-logo.png";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineCopyright,
} from "react-icons/ai";

const Footer = () => {
  const styles = {
    icons: "text-3xl",
  };
  return (
    <footer className="mt-10 bg-[#f0f0ef] p-4 bottom-0">
      <div className="flex flex-col items-center">
        <img src={Image} alt="logo" className="h-10" />
        <h6 className="font semi-bold">Circular-tech</h6>
        <div className="flex">
          <span className={styles.icons}>
            <AiFillFacebook />
          </span>
          <span className={styles.icons}>
            <AiFillTwitterCircle />
          </span>
          <span className={styles.icons}>
            <AiFillLinkedin />
          </span>
          <span className={styles.icons}>
            <AiFillInstagram />
          </span>
        </div>
        <div className="mt-4">
          <h2 className="text-[#B95E09] text-lg font-bold">
            <span className="text-xl text-yellow-500">|</span>Contact us
          </h2>
          <ol>
            <li>Address: 123 Ave, Mombasa City, Kenya</li>
            <li>Phone:+700000000</li>
            <li>Email: info@circular-tech.com</li>
          </ol>
        </div>
      </div>
      <div className=" flex items-center justify-center mb-0 mt-3 text-xs">
        <AiOutlineCopyright />
        <p>2022 Circular-Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
