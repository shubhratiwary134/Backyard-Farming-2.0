import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import AnimatedLink from "./AnimatedLinkTag";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-5 py-2 flex justify-between "
    >
      <div className="text-xl">Backyard Farming 2.O</div>
      <div className="flex justify-around items-center w-1/3 font-Montserrat text-md">
        <SignedOut>
          <AnimatedLink href="#">How It Works</AnimatedLink>
          <AnimatedLink href="#">Plans</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>
          <AnimatedLink href="#">FAQS</AnimatedLink>
          <div className="flex gap-5 ">
            <SignUpButton>
              <button className="bg-[#FFC645] text-black px-5 py-2 rounded-full">
                SignUp
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="bg-[#e9f2e6]  text-black px-5 py-2 rounded-full">
                Login
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <AnimatedLink href="/CreateFarm">Start Farm</AnimatedLink>
          <AnimatedLink href="/myFarms">My Farm</AnimatedLink>
          <AnimatedLink href="#">View Updates</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>
          <UserButton />
        </SignedIn>
      </div>
    </motion.div>
  );
};

export default Navbar;
