import backgroundImage from "../../Assests/mitti.jpg";
import { motion } from "motion/react";

const Quote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-screen text-white px-10 pt-10 pb-20 font-anakatoria"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",

        //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="  text-center flex ">
        <p className="text-[2.5rem] xl:text-[3rem]">
          " Backyard farming is more than just growing food it's about
          <span className="text-green-700 font-bold "> Cultivating </span>a
          sustainable future,
          <span className="text-green-700 font-bold  "> Nurturing </span>
          the earth, and
          <span className="text-green-700 font-bold "> Reconnecting</span> with
          the simple joys of nature. "
        </p>
      </div>
    </motion.div>
  );
};

export default Quote;
