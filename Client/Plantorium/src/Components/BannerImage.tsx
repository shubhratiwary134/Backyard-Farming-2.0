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
      <div className="w-1/2 relative mt-5 ml-5 mb-10 flex flex-col gap-10">
        <div className="text-9xl text-[#3ba944] font-heading">
          Backyard Farming 2.0
        </div>
        <div className="text-4xl text-[#336937]  font-dancing">
          Unlock your backyard’s potential with custom roadmaps. Sustainable
          living starts here with Backyard Farming 2.0!
        </div>
        <SignedIn>
          <StartFarmButton
            className="mt-20 text-xl  py-2 px-16 border-[#3ba944] border-y-2 "
            text="Get Started"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-80">
            <SignUpButton>
              <button className="text-xl  py-2 px-16 border-[#3ba944] border-y-2 ">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="text-xl  py-2 px-16 border-[#3ba944] border-y-2 ">
                Log In
              </button>
            </SignInButton>
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
