import { SignInButton } from "@clerk/clerk-react";
import BannerImage from "../Components/LandingPageComponents/BannerImage";
import HowDoesItWork from "../Components/LandingPageComponents/HowDoesItWork";
import WhatsIncluded from "../Components/LandingPageComponents/WhatsIncluded";

const LandingPage = () => {
  return (
    <div className="px-40 flex flex-col items-center ">
      <BannerImage />
      <HowDoesItWork />
      <WhatsIncluded />
      <SignInButton />
    </div>
  );
};

export default LandingPage;
