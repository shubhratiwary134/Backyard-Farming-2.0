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
            backgroundColor: hovered.box1 ? "#b6cfb7" : "transparent",
            border: hovered.box1 ? "2px solid black" : "",
          }}
          exit={{ backgroundColor: "transparent" }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          onHoverStart={() => setHovered((prev) => ({ ...prev, box1: true }))}
          onHoverEnd={() => setHovered((prev) => ({ ...prev, box1: false }))}
          className={`relative col-span-6 row-span-6 overflow-hidden flex flex-col justify-center items-center rounded-2xl`}
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
          <div
            className={`absolute top-5 lg:text-[2rem] xl:text-[2.6rem] 2xl:text-[3.6rem] text-center ${
              hovered.box1 ? "text-black" : "text-white"
            }`}
          >
            Personalized Farm Report
          </div>
          <div
            className={`absolute p-5 lg:text-[0.9rem] xl:text-[1.2rem] 2xl:text-[1.8rem]  text-center text-zinc-700 ${
              !hovered.box1 ? "hidden" : ""
            }`}
          >
            After a farm is created and its details are entered, a comprehensive
            Personalized Farm Report is generated. This report provides expert
            recommendations on best farming practices, suitable pesticides, and
            essential precautions to enhance productivity. With data-driven
            insights, every farm stays healthy, efficient, and well-maintained
            for optimal results.
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          animate={{
            backgroundColor: hovered.box2 ? "#b6cfb7" : "transparent",
            border: hovered.box2 ? "2px solid black" : "",
          }}
          exit={{ backgroundColor: "transparent" }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.5,
            once: true,
          }}
          onHoverStart={() => setHovered((prev) => ({ ...prev, box2: true }))}
          onHoverEnd={() => setHovered((prev) => ({ ...prev, box2: false }))}
          className="relative col-span-6 row-span-12 flex justify-center  rounded-2xl overflow-hidden"
        >
          <motion.img
            animate={{
              opacity: hovered.box2 ? 0 : 1,
              scale: hovered.box2 ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
            src={photo2}
            className="w-full h-full object-cover rounded-lg "
          />
          <div
            className={`absolute  top-14 text-6xl text-center ${
              hovered.box2 ? "text-black" : "text-white"
            }`}
          >
            Adaptive Weekly Roadmap
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          animate={{
            backgroundColor: hovered.box3 ? "#b6cfb7" : "transparent",
            border: hovered.box3 ? "2px solid black" : "",
          }}
          exit={{ backgroundColor: "transparent" }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          onHoverStart={() => setHovered((prev) => ({ ...prev, box3: true }))}
          onHoverEnd={() => setHovered((prev) => ({ ...prev, box3: false }))}
          className="relative col-span-3 row-span-6 flex justify-center rounded-2xl overflow-hidden"
        >
          <motion.img
            animate={{
              opacity: hovered.box3 ? 0 : 1,
              scale: hovered.box3 ? 1.4 : 1,
            }}
            transition={{ duration: 0.5 }}
            src={photo3}
            className="w-full h-full object-cover rounded-lg "
          />
          <div
            className={`absolute  top-14 text-6xl text-center ${
              hovered.box3 ? "text-black" : "text-white"
            }`}
          >
            Crop-Specific AI Chatbot
          </div>
          <div
            className={`absolute bottom-10 p-10 text-2xl text-center text-zinc-700 ${
              !hovered.box3 ? "hidden" : ""
            }`}
          >
            Get real-time, tailored advice on plant diseases, irrigation, and
            soil health with the Crop-Specific AI Chatbot, ensuring better crop
            management and higher productivity.
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          animate={{
            backgroundColor: hovered.box4 ? "#b6cfb7" : "transparent",
            border: hovered.box4 ? "2px solid black" : "",
          }}
          exit={{ backgroundColor: "transparent" }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          onHoverStart={() => setHovered((prev) => ({ ...prev, box4: true }))}
          onHoverEnd={() => setHovered((prev) => ({ ...prev, box4: false }))}
          className="relative col-span-3 row-span-6 flex justify-center  overflow-hidden rounded-2xl"
        >
          <motion.img
            animate={{
              opacity: hovered.box4 ? 0 : 1,
              scale: hovered.box4 ? 1.4 : 1,
            }}
            transition={{ duration: 0.5 }}
            src={photo4}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div
            className={`absolute  top-14 text-6xl ${
              hovered.box4 ? "text-black" : "text-white"
            }`}
          >
            Marketplace
          </div>
          <div
            className={`absolute bottom-10 p-10 text-xl text-center text-zinc-700 ${
              !hovered.box4 ? "hidden" : ""
            }`}
          >
            Access to high-quality farming products is essential for a thriving
            farm. The Marketplace connects farmers with trusted suppliers,
            offering a selection of organic seeds, fertilizers, pesticides, and
            farming tools. This platform ensures that every farm gets the best
            resources at competitive prices, making procurement seamless and
            efficient.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
