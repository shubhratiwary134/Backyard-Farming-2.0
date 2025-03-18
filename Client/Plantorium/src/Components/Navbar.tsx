import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import AnimatedLink from "./AnimatedLinkTag";
import { motion } from "motion/react";
import logo from "../Assests/logo_Backyard.png";
import { useAppSelector } from "../store/Hook";

const Navbar = () => {
  const { reportStatus } = useAppSelector((state) => state.report);
  const { isSignedIn } = useAuth();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col items-center gap-5 lg:flex-row lg:justify-between px-5 ${
        isSignedIn ? "text-black" : "text-white"
      }`}
    >
      <img src={logo} className="w-48 rounded-full p-2" />

      <div className="flex flex-col justify-around items-center font-poppins text-2xl gap-20 md:flex-row md:text-[18px] xl:text-[16px] md:items-center  ">
        <SignedOut>
          <AnimatedLink href="#">How It Works</AnimatedLink>
          <AnimatedLink href="/plans">Features</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>
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
          <AnimatedLink href="/myFarm">My Farm</AnimatedLink>
          {reportStatus === "generated" && (
            <AnimatedLink href="/report">Report</AnimatedLink>
          )}
          <AnimatedLink href="#">Support</AnimatedLink>
          <UserButton />
        </SignedIn>
      </div>
    </motion.div>
  );
};

export default Navbar;
