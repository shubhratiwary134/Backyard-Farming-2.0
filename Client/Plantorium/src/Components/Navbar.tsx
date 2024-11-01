import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="px-5 py-2 flex justify-between ">
      <div className="">Backyard Farming 2.O</div>
      <div className="flex justify-around items-center w-1/3">
        <SignedOut>
          <a href="#">How It Works</a>
          <a href="#">Plans</a>
          <a href="#">Team</a>
          <a href="#">FAQS</a>
          <div className="flex gap-5 ">
            <SignUpButton>
              <button className="bg-[#66f542] text-black px-5 py-2 rounded-full">
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
          <a href="#">Start A Farm</a>
          <a href="#">View Progress</a>
          <a href="#">Team</a>
          <a href="#">FAQS</a>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
