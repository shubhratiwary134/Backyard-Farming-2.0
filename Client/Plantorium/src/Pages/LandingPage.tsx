import BannerImage from "../Components/BannerImage";

import HowDoesItWork from "../Components/LandingPageComponents/HowDoesItWork";
import TeamVision from "../Components/LandingPageComponents/TeamVision";
import WhatsIncluded from "../Components/LandingPageComponents/WhatsIncluded";

const LandingPage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <BannerImage />
      <TeamVision />
      <HowDoesItWork />
      <WhatsIncluded />
    </div>
  );
};

export default LandingPage;
