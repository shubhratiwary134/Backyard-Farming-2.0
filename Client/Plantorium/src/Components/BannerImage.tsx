import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import BannerPic from "../Assests/BannerImage-lightTheme.png";
import StartFarmButton from "./StartFarmButton";
const BannerImage = () => {
  return (
    <div className="pt-5 pb-20 w-full h-dvh flex justify-between">
      <div className="relative mt-20 ml-5  flex flex-col gap-20">
        <div className="text-8xl text-[#3ba944]">Backyard Farming 2.O</div>
        <div className="text-3xl text-[#336937] pr-40">
          Your Journey to Sustainable Living Starts Here – Backyard Farming Made
          Simple!
        </div>
        <SignedIn>
          <StartFarmButton
            className="absolute bottom-40 left-1/2 transform -translate-x-1/2   py-2 px-8  border-[#3ba944] border-y-2"
            text="Get Started"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-40">
            <SignInButton>
              <button className="  py-2 px-8 border-[#3ba944] border-y-2">
                Log In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className=" py-2 px-8 border-[#3ba944] border-y-2 ">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>

      <img
        src={BannerPic}
        className="object-cover rounded-2xl transform hover:scale-105 hover:translate-y-2 transition duration-500"
      />
    </div>
  );
};

export default BannerImage;
