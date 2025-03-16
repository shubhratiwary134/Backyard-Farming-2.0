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
    <motion.div className=" w-full flex items-center h-[75%] lg:h-[95%]  gap-5 text-white font-poppins">
      <div className="w-full relative flex flex-col  items-center ">
        <div className=" text-7xl lg:text-[2.3rem] pl-10 text-center lg:p-4 xl:text-[2.8rem] 2xl:text-[3.8rem] xl:tracking-[18px] tracking-[16px]">
          FARM FRESH, BACKYARD GROWN
        </div>
        <SignedIn>
          <StartFarmButton
            className="mt-20 text-xl py-2 px-4 xl:text-2xl tracking-[3px] border-x-2  border-white"
            text="Start Your Farm"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-5 items-center tracking-[3px] xl:tracking-[8px]">
            <SignUpButton>
              <button className="text-xl py-2 px-4 xl:text-2xl">Sign Up</button>
            </SignUpButton>
            <hr className="w-[2px] h-[40px] bg-white border-none" />
            <SignInButton>
              <button className="text-xl  py-2 px-4 xl:text-2xl">Log In</button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </motion.div>
  );
};

export default BannerImage;
