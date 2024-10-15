import { UserButton } from "@clerk/clerk-react";
import FamousCropsLists from "../Components/FamousCropsLists";
import StartFarmButton from "../Components/StartFarmButton";

const HomePage = () => {
  return (
    <div>
      <UserButton />
      <StartFarmButton />
      <FamousCropsLists />
    </div>
  );
};

export default HomePage;
