import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import arin from "../../Assests/ARIN.png";
import shreya from "../../Assests/SHREYA.png";
import shubhra from "../../Assests/SHUBHRA.png";
import shubhraHover from "../../Assests/Shubhra_Bg.png";
import arinHover from "../../Assests/arin_bg.png";
import shreyaHover from "../../Assests/shreya_hover_bg.png";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TeamVision = () => {
  const [hovered, setHovered] = useState({
    shape1: false,
    shape2: false,
    shape3: false,
  });
  return (
    <div className="2xl:min-h-screen xl:h-[90vh] lg:h-[80vh] w-screen bg-black text-white  ">
      <div className="flex flex-col justify-between h-full pt-10 px-20">
        <div className="w-full flex justify-between ">
          <div className="flex flex-col items-start ">
            <p>
              <motion.span
                initial={{ x: 80 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className="2xl:text-5xl xl:text-4xl lg:text-3xl inline-block "
              >
                THE
              </motion.span>
              <br></br>
              <motion.span
                initial={{ y: -90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="2xl:text-8xl xl:text-7xl lg:text-6xl text-yellow-300 tracking-widest font-bold inline-block"
              >
                CREATIVE
              </motion.span>
              <br></br>
            </p>
            <motion.p
              initial={{ x: -40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl self-end inline-block"
            >
              TEAM
            </motion.p>
          </div>
          <div className="self-end w-[55%]">
            <p className="text-center lg:text-md xl:text-lg 2xl:text-xl text-[#e9e9e9] mb-3">
              At Backyard Farming 2.0, we dream of a future where every backyard
              transforms into a flourishing, sustainable haven. Our mission is
              to empower individuals to cultivate their own green spaces by
              blending the magic of nature with the precision of AI. Together,
              we're making farming smarter, simpler, and more rewarding.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-2/3 2xl:h-[70vh] xl:h-[60vh] lg:h-[40vh] flex items-end"
          >
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, shape1: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, shape1: false }))
              }
              className="bg-[#a8d1d1]  2xl:h-[49vh] xl:h-[42vh] lg:h-[28vh] w-96 rounded-t-full flex flex-col items-center justify-between"
            >
              <div className="mt-20 text-black text-2xl">
                {" "}
                Arin Zingade
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.shape1 ? "hidden" : ""
                  }`}
                >
                  <a
                    href="https://github.com/arinzingade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arin-zingade-783381274/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="h-2/3 flex">
                <img src={hovered.shape1 ? arinHover : arin} />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, shape2: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, shape2: false }))
              }
              className="bg-[#f9ed85] 2xl:h-[63vh] xl:h-[54vh] lg:h-[36vh]  w-96 rounded-t-full flex flex-col items-center justify-between "
            >
              <div className="mt-20 text-black text-2xl tracking-wide">
                Shubhra Tiwary
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.shape2 ? "hidden" : ""
                  }`}
                >
                  <a
                    href="https://github.com/shubhratiwary134"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shubhra-tiwary/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="h-2/3 flex">
                <img src={hovered.shape2 ? shubhraHover : shubhra} />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, shape3: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, shape3: false }))
              }
              className="  bg-[#f197c0] 2xl:h-[56vh] xl:h-[42vh] lg:h-[32vh] w-96 rounded-t-full flex flex-col items-center justify-between "
            >
              <div className="mt-20 text-black text-2xl">
                Shreya Soni
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.shape3 ? "hidden" : ""
                  }`}
                >
                  <a
                    href="https://github.com/i-shreya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreya-soni-ss23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="h-2/3 flex ">
                <img src={hovered.shape3 ? shreyaHover : shreya} />
              </div>
            </motion.div>
          </motion.div>
          <div className="flex flex-col 2xl:text-3xl  xl:text-2xl items-center self-end gap-10 p-10">
            <div className="hover:bg-white hover:text-black px-10 py-2 hover:py-4 rounded-3xl cursor-pointer duration-200">
              Blogs
            </div>
            <div className="hover:bg-white hover:text-black px-10 py-2 hover:py-4 rounded-3xl cursor-pointer duration-200">
              FAQs
            </div>
            <div className="hover:bg-white hover:text-black px-10 py-2 hover:py-4 rounded-3xl cursor-pointer duration-200">
              Reports
            </div>
            <button className="px-5 py-5 bg-[#888888] rounded-full flex items-center  underline decoration-white hover:bg-white hover:text-black hover:decoration-black  duration-200 hover:py-6">
              Know More <MdOutlineArrowOutward size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamVision;
