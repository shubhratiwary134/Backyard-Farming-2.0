import { UserButton } from "@clerk/clerk-react";
import FamousCropsLists from "../Components/FamousCropsLists";

const HomePage = () => {
  return (
    <div>
      <UserButton />
      <FamousCropsLists />
    </div>
  );
};

export default HomePage;
