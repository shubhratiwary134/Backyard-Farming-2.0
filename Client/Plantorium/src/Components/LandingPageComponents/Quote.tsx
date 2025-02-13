import quoteImage from "../../Assests/your-image.png";
import backgroundImage from "../../Assests/frame1.2.png";
import { motion } from "motion/react";

const Quote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-screen bg-[#f8e6c8] text-black px-10 pt-10 pb-20 font-dancing bg cover bg centre"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex p-10   gap-5 space-x-4 mx-4">
        {/*image*/}
        <img
          src={quoteImage}
          alt="Quote Image"
          className="w-44 h-64 object-cover rounded-lg"
        />
        {/*Quote*/}
        <div className="text-5xl pt-5 px-10 text-center">
          <p>
            " Backyard farming is more than just growing food it's about{" "}
            <span className="text-green-700 font-bold">Cultivating</span> a
            sustainable future,
            <span className="text-green-700  font-bold"> Nurturing</span> the
            earth, and
            <span className="text-green-700  font-bold">
              {" "}
              Reconnecting
            </span>{" "}
            with the simple joys of nature. "
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;
