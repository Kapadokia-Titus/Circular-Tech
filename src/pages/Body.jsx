import React from "react";
import Image from "../assets/img/Services___Powell_Contracting-removebg-preview.png";
import CoreValues from "../components/CoreValues";
import Re from "../components/Re";
import trash from "../assets/img/trash.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseConfig";
import How from "../components/How";
import Team from "../components/Team";
const Body = () => {
  const [user] = useAuthState(auth);
  return (
    <main className="p-4 xl:mx-40 ">
      <section className="grid place-items-center md:grid-cols-2">
        <div className="grid place-items-center">
          <h1 className="text-4xl xl:text-6xl font-bold text-[#B95E09]">
            Circular-tech
          </h1>
          <h2 className="text-2xl text-[#B95E09]">curbing e-waste</h2>
        
            {user ? (
              <Link to="Create">  <button className="w-40 mt-4 border-2 rounded border-black h-10 bg-[#B95E09] text-white md:h-16 md:w-48 text-2xl md:rounded font-bold"> Repair Now</button></Link>
            ) : (
              <Link to="RepairShop"> <button className="w-40 mt-4 border-2 rounded border-black h-10 bg-[#B95E09] text-white md:h-16 md:w-48 text-2xl md:rounded font-bold">Repair Now</button></Link>
            )}
          
          <p className="text-center mt-2">
            A platform that connects users of electronics and electrical
            appliances to technicians around their area.
          </p>
          <p className="text-center">
            You can visit repair shops with a click of a button at the comfort
            in your home!!! Welcome to circular Tech...
          </p>
        </div>

        <img src={Image} alt="" />
      </section>
      <section className="grid place-items-center mt-4 lg:mt-16 md:grid-cols-2 ">
        <div className="hidden md:block">
          <img src={trash} alt="pic1" className=" h-[400px] rounded-lg " />
        </div>

        <div>
          <h2 className="text-2xl text-center font-bold text-[#B95E09]">
            E-WASTE
          </h2>
          <p className="mt-6 text-center">
            E-waste is simply waste from disposal of electrical or electronic
            waste. Examples of this electrical or electronic devices include
            refrigerators, mobile phones, microwaves, desktops etc. At most
            times we use this device until they get to their end life, sell them
            at a cheaper price and eventually they land in landfills, various
            toxic parts are burnt and dumped behind informal sector workshops or
            in their backyard for home appliances.
          </p>
          <p className="text-center mt-2">
            Electronic scrap components, such as CPUs, contain potentially
            harmful materials such as lead, cadmium, beryllium or brominated
            flame retardants. Recycling and disposal of e-waste may involve
            significant risk to the health of workers and their communities.
          </p>
        </div>
      </section>
      <Re />
      <How />
      <Team />
      <CoreValues />
     <div className="grid place-items-center  mt-12">
       
        <p className="text-base text-center">
          Join our community of technicians and get paid when you finish your tasks. You can work from anywhere and choose job that interests you.
          We believe everyone deserves an oportunity to support themselves, even if their schedule doesn'll allow for a 9-5 routine.
        </p>
        <Link to="/Registration"> <button className="w-64 mt-4 border-2 rounded border-black h-10 bg-[#B95E09] text-white md:h-16 md:w-48 text-2xl md:rounded font-bold">Register Now</button></Link>
        </div>
      
    </main>
  );
};

export default Body;
