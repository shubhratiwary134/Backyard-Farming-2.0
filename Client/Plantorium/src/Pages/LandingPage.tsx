import { SignInButton } from "@clerk/clerk-react";
import BannerImage from "../Components/LandingPageComponents/BannerImage";

const LandingPage = () => {
  return (
    <div>
      <BannerImage />
      <SignInButton />
    </div>
  );
};

export default LandingPage;
