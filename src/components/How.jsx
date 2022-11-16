import React from "react";
import connection from "../assets/img/connection.png";
import help from "../assets/img/help.png";
import delivery_truck from "../assets/img/delivery-truck.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const How = () => {
  const iconAnimate = {
    offscreen: { x: -100 },
    onscreen: { x: 0, rotate: 360 },
    transition: {
      type: "spring",
      bounce: 1,
      duration: 1,
    },
  };
  return (
    <section className="grid place-items-center">
      <motion.div
        className="mt-10 p-2 grid md:grid-cols-3 xl:gap-4"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <div className=" xl:border-r-2 border-gray-400 p-2 grid place-items-center">
          <div className="mb-2">
            <motion.img
              src={connection}
              className="h-[120px]"
              variants={iconAnimate}
            />
          </div>
          <h1 className="text-xl text-[#B95E09] text-center">connection</h1>
          <p>
            To try and minimise the e-waste around us, we the
            circular tech group has come up with a platform to curb the menace
            of electronic waste. This platform connects you to electrical
            appliances technicians around your area area. You can also sell the
            equipment that you don't require to the technicians or to other
            consumers.
          </p>
        </div>
        <div className="xl:border-r-2 border-gray-400 p-2 grid place-items-center">
          <div className="mb-2">
            <motion.img
              src={help}
              className="h-[120px]"
              variants={iconAnimate}
            />
          </div>
          <h1 className="text-xl text-[#B95E09] text-center">Assistance</h1>
          <p>
            This platfrom also enables technicians to connect with their fellow
            technicians. This way they can easily acquire spare parts amongst
            themselves. In a case where on technician can not repair your
            equipment he can easily scroll through this platform and find
            another technician who deals with that specific equipment.
          </p>
        </div>

        <div className="grid place-items-center p-2">
          <div>
            <motion.img
              src={delivery_truck}
              className="h-[140px]"
              variants={iconAnimate}
            />
          </div>
          <h1 className="text-xl text-[#B95E09] text-center">Delivery</h1>
          <p>
            Transportation of faulty device from your location to repair shop
            and back home sometimes might be a challenge. This platform will
            cater for this as we have partnered with other delivery services
            around the specified area e.g. G4S, Pickup mtaani, DHL or a selected
            local bobaboda guys.
          </p>
        </div>
      </motion.div>
      <div>
        <button className="w-40 mt-4 border-2 rounded border-black h-10 bg-[#B95E09] text-white md:h-16 md:w-48 text-2xl md:rounded font-bold">
          <Link to="RepairShop"> Repair Now</Link>
        </button>
      </div>
      <hr className="text-gray-500 border-solid border-2" />
    </section>
  );
};

export default How;
