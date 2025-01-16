import BannerImage from "../Components/BannerImage";
import VideosCarousel from "../Components/HomePageComponents/VideosCarousel";

const HomePage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <BannerImage />
      {/* <FamousCropsLists /> */}
      <VideosCarousel />
    </div>
  );
};

export default HomePage;
