import FamousCropsLists from "../Components/FamousCropsLists";
import StartFarmButton from "../Components/StartFarmButton";
import BannerImage from "../Components/BannerImage";

const HomePage = () => {
  return (
    <div className="px-40 flex flex-col items-center ">
      <BannerImage />
      <StartFarmButton className="" />
      <FamousCropsLists />
    </div>
  );
};

export default HomePage;
