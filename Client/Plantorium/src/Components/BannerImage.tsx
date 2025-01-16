import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/clerk-react";
import BannerPic from "../Assests/BannerImage-lightTheme.png";
import marketPic from "../Assests/market.jpg";
import BannerPic2 from "../Assests/farmer_enhanced.png";
import StartFarmButton from "./StartFarmButton";
import { motion } from "motion/react";
const BannerImage = () => {
  const { isSignedIn } = useAuth();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" w-full flex  mt-10 mb-20 gap-5"
    >
      <img src={marketPic} className="hidden xl:block object-contain w-1/4" />
      <div className="w-1/2 relative flex flex-col gap-10 items-center">
        <div className="hidden sm:block sm:text-6xl md:text-8xl lg:text-9xl lg:mt-10 xl:mt-0 xl:text-8xl 2xl:text-9xl text-center  text-[#3ba944] font-heading">
          Backyard Farming 2.0
        </div>
        <div className="text-md md:text-xl xl:text-xl 2xl:text-2xl text-[#296633] text-center font-Montserrat">
          Turn your backyard into a thriving ecosystem with personalized guides.
          Your sustainable journey begins now with Backyard Farming 2.O !!!
        </div>
        <SignedIn>
          <StartFarmButton
            className="mt-10 text-lg font-dancing lg:text-2xl xl:text-4xl bg-[#3ba944] hover:bg-[#246d27] duration-100 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2 lg:px-8"
            text="Start Your Farm"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-40">
            <SignUpButton>
              <button className="text-2xl  py-2 px-4 border-[#3ba944] border-y-2 font-dancing font-bold">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="text-2xl   px-4 border-[#3ba944] border-y-2 font-dancing  font-bold">
                Log In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>

      <img
        src={isSignedIn ? BannerPic2 : BannerPic}
        className=" object-contain w-1/2 xl:w-1/4"
      />
    </motion.div>
  );
};

export default BannerImage;
