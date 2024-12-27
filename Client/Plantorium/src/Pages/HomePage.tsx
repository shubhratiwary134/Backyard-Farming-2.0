import FamousCropsLists from "../Components/FamousCropsLists";
import BannerImage from "../Components/BannerImage";

const HomePage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <BannerImage />
      <FamousCropsLists />
    </div>
  );
};

export default HomePage;
