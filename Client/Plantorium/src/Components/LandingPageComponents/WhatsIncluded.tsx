import { motion } from "motion/react";
import photo1 from "../../Assests/photo1.avif";
import photo2 from "../../Assests/photo2.avif";
import photo3 from "../../Assests/photo3.avif";
import photo4 from "../../Assests/photo4.avif";

const WhatsIncluded = () => {
  return (
    <div
      className="w-screen h-[180vh]
    flex flex-col items-center   p-10 "
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{
          amount: 0.5,
          once: false,
        }}
        className="text-zinc-900 text-7xl event-Heading font-poppins"
      >
        What's Included !!!
      </motion.div>
      <div className="w-full h-3/4 grid-container grid grid-cols-12 grid-rows-12 gap-4 mt-20">
        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          className="col-span-6 row-span-6 overflow-hidden flex justify-center items-center rounded-2xl  "
        >
          <img
            src={photo1}
            className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
          ></img>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.5,
            once: true,
          }}
          className="col-span-6 row-span-12  rounded-2xl overflow-hidden"
        >
          <img
            src={photo2}
            className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
          ></img>
        </motion.div>

        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="col-span-3 row-span-6  rounded-2xl overflow-hidden"
        >
          <img
            src={photo3}
            className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
          ></img>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="col-span-3 row-span-6  overflow-hidden rounded-2xl"
        >
          <img
            src={photo4}
            className="w-full h-full object-cover rounded-2xl hover:scale-110 duration-300"
          ></img>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
