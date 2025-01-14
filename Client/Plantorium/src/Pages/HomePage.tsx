import BannerImage from "../Components/BannerImage";
import SubscriptionPlans from "../Components/HomePageComponents/SubscriptionPlans";

const HomePage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <BannerImage />
      {/* <FamousCropsLists /> */}
      <SubscriptionPlans />
    </div>
  );
};

export default HomePage;
