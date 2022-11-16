import React from "react";
import { AiOutlineStop } from "react-icons/ai";
import { MdBatterySaver } from "react-icons/md";
import { SiCreativecommons } from "react-icons/si";
import { GiClockwork } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";

import { MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";

const CoreValues = () => {
  const textAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.5 },
    },
  };
  const iconAnimate = {
    offscreen: { x: -100 },
    onscreen: { x: 0, rotate: 360 },
    transition: {
      type: "spring",
      bounce: 1,
      duration: 1,
    },
  };

  const styles = {
    cards: "rounded-lg border-2 border-black",
  };

  return (
    <div className="mt-16 ">
      <h1 className="text-2xl text-center font-bold text-[#B95E09]">
        our core values
      </h1>
      <motion.section
        className=" md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 hidden sm:block"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">STOP</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span className="">
                <AiOutlineStop size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <motion.p variants={textAnimate}>
                Stop throwing around your electronic waste. You want to dispose
                it, well do it here.
              </motion.p>
            </div>
          </div>
        </motion.div>
        {/*card 2 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">SAVE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdBatterySaver size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                Save the environment, it needs your care for a peaceful
                co-existence with other organisms
              </p>
            </div>
          </div>
        </motion.div>
        {/*card 3 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">CREATIVE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <SiCreativecommons size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                We offer you a creative way and a win win situation of dealing
                with your damaged electrical appliances
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 4 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">WORK</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <GiClockwork size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                24/7 watch time to assist in any way possible about how you want
                to deal with yor damaged appliances.
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 5 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">CLEAN</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdOutlineCleaningServices size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                Clean water, clean food, clean house! clean-lean situation...
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 6 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">SECURE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdOutlineSecurity size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                A secure way of dealing with e-waste, and thus securing the
                future of our grandchildren.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:hidden"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount:0.1 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">STOP</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span className="">
                <AiOutlineStop size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <motion.p variants={textAnimate}>
                Stop throwing around your electronic waste. You want to dispose
                it, well do it here.
              </motion.p>
            </div>
          </div>
        </motion.div>
        {/*card 2 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">SAVE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdBatterySaver size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                Save the environment, it needs your care for a peaceful
                co-existence with other organisms
              </p>
            </div>
          </div>
        </motion.div>
        {/*card 3 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">CREATIVE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <SiCreativecommons size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                We offer you a creative way and a win win situation of dealing
                with your damaged electrical appliances
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 4 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">WORK</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <GiClockwork size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                24/7 watch time to assist in any way possible about how you want
                to deal with yor damaged appliances.
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 5 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">CLEAN</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdOutlineCleaningServices size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                Clean water, clean food, clean house! clean-lean situation...
              </p>
            </div>
          </div>
        </motion.div>
        {/**card 6 */}
        <motion.div className={styles.cards} variants={textAnimate}>
          <h4 className="text-xl font-bold text-center mt-3">SECURE</h4>
          <div className="grid grid-cols-2  p-2">
            <div className=" grid place-items-center">
              <span>
                <MdOutlineSecurity size={80} />
              </span>
            </div>
            <div className="grid place-items-center">
              <p>
                A secure way of dealing with e-waste, and thus securing the
                future of our grandchildren.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default CoreValues;
