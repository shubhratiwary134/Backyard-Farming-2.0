import { motion } from "motion/react";
import photo1 from "../../Assests/photo1.avif";
import photo2 from "../../Assests/photo2.avif";
import photo3 from "../../Assests/photo3.avif";
import photo4 from "../../Assests/photo4.avif";
import { useState } from "react";

const WhatsIncluded = () => {
  const [hovered, setHovered] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  });
  return (
    <div className="w-screen mb-20 p-10 font-poppins">
      <div className="w-full h-3/4 grid-container grid grid-cols-12 grid-rows-12 gap-4 mt-20">
        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          animate={{
            backgroundColor: hovered.box1 ? "#fff" : "transparent",
            border: hovered.box1 ? "2px solid black" : "",
          }}
          exit={{ backgroundColor: "transparent" }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          onHoverStart={() => setHovered((prev) => ({ ...prev, box1: true }))}
          onHoverEnd={() => setHovered((prev) => ({ ...prev, box1: false }))}
          className={`relative col-span-6 row-span-6 overflow-hidden flex justify-center items-center rounded-2xl`}
        >
          <motion.img
            src={photo1}
            animate={{
              opacity: hovered.box1 ? 0 : 1,
              scale: hovered.box1 ? 1.4 : 1,
            }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full object-cover rounded-lg`}
          />
          <div className="absolute text-white top-4 text-6xl">
            Personalized Farm Report
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.5,
            once: true,
          }}
          className="relative col-span-6 row-span-12 flex justify-center  rounded-2xl overflow-hidden"
        >
          <img
            src={photo2}
            className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
          />
          <div className="absolute text-white top-4 text-6xl">
            Adaptive Weekly Roadmap
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="relative col-span-3 row-span-6 flex justify-center rounded-2xl overflow-hidden"
        >
          <img
            src={photo3}
            className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
          />
          <div className="left-2 absolute text-white top-4 text-6xl">
            Crop-Specific AI Chatbot
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="relative col-span-3 row-span-6 flex justify-center  overflow-hidden rounded-2xl"
        >
          <img
            src={photo4}
            className="w-full h-full object-cover rounded-2xl hover:scale-110 duration-300"
          />
          <div className="absolute text-white top-4 left-4 text-6xl">
            Marketplace
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
