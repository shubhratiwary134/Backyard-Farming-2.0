import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

import StartFarmButton from "./StartFarmButton";
import { motion } from "motion/react";
const BannerImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" w-full flex items-center h-[95%]  gap-5 text-white font-poppins"
    >
      <div className="w-full relative flex flex-col  items-center ">
        <div className="text-[70px] tracking-[21px] ">
          FARM FRESH, BACKYARD GROWN
        </div>
        <SignedIn>
          <StartFarmButton
            className="py-5 text-2xl px-2"
            text="Start Your Farm"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-5 items-center tracking-[8px]">
            <SignUpButton>
              <button className="text-3xl py-2 px-4">Sign Up</button>
            </SignUpButton>
            <hr className="w-[2px] h-[40px] bg-white border-none" />
            <SignInButton>
              <button className="text-3xl  py-2 px-4 ">Log In</button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </motion.div>
  );
};

export default BannerImage;
