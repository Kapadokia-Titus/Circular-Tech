import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import image1 from "../assets/img/doctor.jpg";
import image2 from "../assets/img/tech1.jpg";
import image3 from "../assets/img/bugs.jpg";
import image4 from "../assets/img/bugs2.jpg";
import image5 from "../assets/img/bugs3.jpg";
const Team = () => {
  return (
    <div className="mt-12 grid place-items-center">
      <h1 className="text-2xl text-center font-bold text-[#B95E09]">
        MEET OUR TEAM
      </h1>

      <Splide
        options={{
          type: "loop",
          focus: "center",
          perPage: 3,
          gap: "0.2rem",
          arrows: false,
          pagination: false,
          drag: "free",
          breakpoints: {
            1500: {
              perPage: 3,
            },
            1150: {
              perPage: 2,
            },
            720: {
              perPage: 1,
            },
          },
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide className="grid place-items-center">
          <img src={image1} alt="Image 1" className="h-[250px] rounded-lg" />
          <h2 className="text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-black font-semibold text-base ">
            Medical Practitioners
          </h2>
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" className="h-[250px] rounded-lg" />
          <Gradient />
          <h2 className="text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-black font-semibold text-base ">
            Environmental programmes
          </h2>
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Image 2" className="h-[250px] rounded-lg" />
          <h2 className="text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-black font-semibold text-base ">
            Consultancy
          </h2>
        </SplideSlide>
        <SplideSlide>
          <img src={image4} alt="Image 2" className="h-[250px] rounded-lg" />
          <h2 className="text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-black font-semibold text-base  ">
            Human Relations
          </h2>
        </SplideSlide>
        <SplideSlide>
          <img src={image5} alt="Image 2" className="h-[250px] rounded-lg" />
          <h2 className="text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-black font-semibold text-base ">
            Developers
          </h2>
        </SplideSlide>
      </Splide>
    </div>
  );
};
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Team;
