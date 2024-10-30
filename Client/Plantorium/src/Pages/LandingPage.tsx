import { SignInButton } from "@clerk/clerk-react";
import BannerImage from "../Components/LandingPageComponents/BannerImage";
import HowDoesItWork from "../Components/LandingPageComponents/HowDoesItWork";

const LandingPage = () => {
  return (
    <div>
      <BannerImage />
      <HowDoesItWork />
      <SignInButton />
    </div>
  );
};

export default LandingPage;
