import BannerImage from "../Components/BannerImage";
import SubscriptionPlans from "../Components/HomePageComponents/SubscriptionPlans";
import VideosCarousel from "../Components/HomePageComponents/VideosCarousel";

const HomePage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <BannerImage />
      {/* <FamousCropsLists /> */}
      <VideosCarousel />
      <SubscriptionPlans />
    </div>
  );
};

export default HomePage;
