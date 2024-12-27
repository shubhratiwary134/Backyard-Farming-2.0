import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import AnimatedLink from "./AnimatedLinkTag";

const Navbar = () => {
  return (
    <div className="px-5 py-2 flex justify-between ">
      <div className="text-xl">Backyard Farming 2.O</div>
      <div className="flex justify-around items-center w-1/3">
        <SignedOut>
          {/* <a href="#">How It Works</a>
          <a href="#">Plans</a>
          <a href="#">Team</a>
          <a href="#">FAQS</a> */}
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
          <AnimatedLink href="/myFarms">My Farms</AnimatedLink>
          <AnimatedLink href="#">View Progress</AnimatedLink>
          <AnimatedLink href="#">Team</AnimatedLink>
          <AnimatedLink href="#">FAQS</AnimatedLink>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
