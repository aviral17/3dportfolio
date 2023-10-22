import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc";
import "./others/footer.css";
// import logo1 from "../assets/logos/newlogo3.svg";
import logo1 from "../assets/logos/aviral5.svg";
import linkedin from "../assets/logos/linkedin1.png";
import bgblur from "../assets/tripguide.png";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const scales = useTransform(scrollYProgress, [0, 1], [0, 2.9]);

  return (
    <div>
      <div className="opacity-layer"></div>
      <div>
        <footer className="new_footer_area bg_color pt-[200px]">
          <div className="flex flex-col">
            <div className="relative -top-[180px] left-[30px] footersm:left-[50px] footersm:-top-[50px] footersm:w-[100px] footersm:h-[100px]">
              <motion.div className="absolute inset-0 opacity-80 w-[200px] h-[200px]  footersm:w-[250px] footersm:h-[250px]">
                <motion.img src={logo1} className="w-full h-full" />
              </motion.div>
            </div>
            <div className="flex flex-col footersm:flex-row">
              <div className="relative z-30 p-6 left-[50px] top-[50px]  footersm:left-[350px] footersm:-top-[40px] border border-gray-900 rounded-2xl hover:bg-purple-700 w-[200px] hover:w-[250px] flex items-center justify-center h-[50px] bg-transparent cursor-pointer transition-all ease-in-out delay-400 duration-700">
                <a
                  className=""
                  href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
                >
                  <p
                    className={`text-white text-xl inline-block cursor-pointer text-underline-footer font-semibold`}
                  >
                    E-mail Me 📨
                  </p>
                </a>
              </div>
            </div>

            <div className="relative outline-none z-30 w-[60px] h-[60px]  p-2 left-[120px] top-[80px] footersm:left-[290px] footersm:ml-[350px] footersm:-top-[105px]">
              <a
                href={import.meta.env.VITE_APP_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  width: "60px",
                  height: "60px",
                }}
                className="outline-none"
              >
                {/* <button
                  onClick={() =>
                    window.open(import.meta.env.VITE_APP_LINKEDIN, "_blank")
                  }
                > */}
                <img src={linkedin} alt="linkedin" className="" />
                {/* </button> */}
              </a>
            </div>
          </div>

          <motion.div className="new_footer_top">
            <div className="footer_bg"></div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

// export default SectionWrapper(Footer, "footer");
export default Footer;
