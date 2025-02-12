import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import AnimatedLink from "./AnimatedLinkTag";
import { motion } from "motion/react";
import logo from "../Assests/logo_Backyard.png";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:px-5 lg:py-10 text-white"
    >
      <img src={logo} className="w-32 rounded-full" />

      <div className="flex flex-col justify-around items-center font-poppins text-2xl gap-20 md:flex-row md:text-[25px] md:items-center">
        <SignedOut>
          <AnimatedLink href="#">How It Works</AnimatedLink>
          <AnimatedLink href="/plans">Plans</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>
          <AnimatedLink href="#">FAQS</AnimatedLink>
          <div className="flex gap-5 ">
            <SignUpButton>
              <button className=" px-5 py-2 rounded-full">SignUp</button>
            </SignUpButton>
            <SignInButton>
              <button className=" px-5 py-2 rounded-full">Login</button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <AnimatedLink href="/CreateFarm">Start Farm</AnimatedLink>
          <AnimatedLink href="/myFarms">My Farm</AnimatedLink>
          <AnimatedLink href="/plans">Plans</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>

          <UserButton />
        </SignedIn>
      </div>
    </motion.div>
  );
};

export default Navbar;
