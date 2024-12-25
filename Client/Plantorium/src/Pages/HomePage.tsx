import FamousCropsLists from "../Components/FamousCropsLists";
import BannerImage from "../Components/BannerImage";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center ">
      <BannerImage />
      <FamousCropsLists />
    </div>
  );
};

export default HomePage;
