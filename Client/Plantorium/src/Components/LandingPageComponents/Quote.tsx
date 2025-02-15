import backgroundImage from "../../Assests/mitti.jpg";
import { motion } from "motion/react";

const Quote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-screen text-white px-10 pt-10 pb-20 font-poppins"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",

        //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="  text-center flex ">
        <p className="text-[2.8rem]">
          " Backyard farming is more than just growing food it's about{" "}
          <span className="text-[#] font-bold px-10  rounded-full">
            Cultivating
          </span>
          a sustainable future,
          <span className="text-[#] font-bold px-10  rounded-full">
            Nurturing
          </span>
          the earth, and
          <span className="text-[#] font-bold px-5 rounded-full">
            Reconnecting
          </span>{" "}
          with the simple joys of nature. "
        </p>
      </div>
    </motion.div>
  );
};

export default Quote;
