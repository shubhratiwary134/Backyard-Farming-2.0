import { SignInButton, SignUpButton } from "@clerk/clerk-react";

import { motion } from "motion/react";
const BannerImage = () => {
  return (
    <motion.div className=" w-full flex items-center h-[75%] lg:h-[95%]  gap-5 text-white font-poppins">
      <div className="w-full relative flex flex-col  items-center ">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-7xl lg:text-[2.3rem] pl-10 text-center lg:p-4 xl:text-[2.8rem] 2xl:text-[3.8rem] xl:tracking-[18px] tracking-[16px]"
        >
          FARM FRESH, BACKYARD GROWN
        </motion.div>

        <div className="mt-20 flex gap-20 items-center tracking-[3px] xl:tracking-[5px]">
          <SignUpButton>
            <button className="text-xl py-2 px-4 xl:text-2xl border-2 hover:border-green-300 duration-150 hover:text-green-300 hover:px-10">
              Sign Up
            </button>
          </SignUpButton>

          <SignInButton>
            <button className="text-xl  py-2 px-4 xl:text-2xl border-2 hover:border-green-300 duration-150 hover:text-green-300 hover:px-10">
              Log In
            </button>
          </SignInButton>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerImage;
