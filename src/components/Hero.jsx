import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { CPU } from "./canvas";
import { MotionText } from "./others/MotionText";
import aviraltext from "../assets/logos/aviraltext.svg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [myname, setMyname] = useState(false);
  const nameRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY;

  //     if (scrolled >= 124.99) {
  //       // Set the top CSS property to fix the position of the element at the top of the page
  //       nameRef.current.style.top = `0px`;
  //       setMyname(true);
  //     }
  // Adjust the same for different screens. 
  //     // else if (scrolled > 6774) {
  //     //   const myName = document.querySelector(".myname");

  //     //   myName?.classList.add("visible");
  //     // }
  //     else {
  //       setMyname(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className={`relative w-[104%] h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* text-[#915EFF] */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white mb-14`}>
            Hi, I'm
            <span
              ref={nameRef}
              className={`${
                myname ? "myname" : ""
              } absolute left-[190px] top-[50px] w-[100px] xs:left-[240px] xs:top-[65px] xs:w-[120px]  h-0 flex mynamemd:left-[250px] mynamelg:left-[290px] mynamelg:w-[160px] mynamelg:top-[72px] mynamexl:left-[400px] mynamexl:top-[95px] mynamexl:w-[260px]`}
            >
              {/* left-[300px] top-[90px]  h-0  w-[207px] */}
              <MotionText />
              {/* <motion.img src={aviraltext} className="" /> */}
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <CPU />

      {/* <div className="flex flex-row">
        <ComputersCanvas />
      </div> */}

      {/* Will not be using xs:bottom-10 bottom-32  in the below div */}
      {/* Original was `` border-secondary of that capsule shape border color `` */}
      <div className="absolute w-full xs:bottom-10 bottom-32  flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]  rounded-3xl border-4 border-blue-600 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-purple-700 mb-1"
            />
            {/* bg-secondary for above class ball infinity */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
