import { SignInButton } from "@clerk/clerk-react";
import FamousCropsLists from "../Components/FamousCropsLists";

const LandingPage = () => {
  return (
    <div>
      <SignInButton />
      <FamousCropsLists />
    </div>
  );
};

export default LandingPage;
