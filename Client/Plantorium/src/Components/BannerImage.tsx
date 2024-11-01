import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import BannerPic from "../Assests/BannerFinal.jpg";
const BannerImage = () => {
  return (
    <div className="pt-5 pb-20 w-full h-dvh flex justify-center relative">
      <img src={BannerPic} className="w-full  object-cover rounded-2xl" />
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
    </div>
  );
};

export default BannerImage;
