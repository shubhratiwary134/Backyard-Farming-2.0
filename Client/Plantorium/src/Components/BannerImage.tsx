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
      <div className="mt-20 ml-5 text-8xl text-[#3ba944] ">
        Backyard Farming 2.O
      </div>
      <SignedOut>
        <SignInButton>
          <button className="absolute bottom-40 left-40 transform -translate-x-1/2 bg-[#66f542]  py-2 px-8 rounded-xl shadow-lg ">
            Log In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="absolute bottom-40 left-1/3 transform -translate-x-1/2 bg-[#e9f2e6]  py-2 px-8 rounded-xl shadow-lg">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <StartFarmButton
          className="absolute bottom-40 left-1/3 transform -translate-x-1/2 bg-[#e9f2e6]  py-2 px-8 rounded-xl shadow-lg"
          text="Get Started"
        />
      </SignedIn>
      <img
        src={BannerPic}
        className="object-cover rounded-2xl transform hover:scale-105 hover:translate-y-2 transition duration-500"
      />
    </div>
  );
};

export default BannerImage;
