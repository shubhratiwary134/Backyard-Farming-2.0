import HowDoesItWork from "../Components/LandingPageComponents/HowDoesItWork";
import Quote from "../Components/LandingPageComponents/Quote";
import TeamVision from "../Components/LandingPageComponents/TeamVision";
import WhatsIncluded from "../Components/LandingPageComponents/WhatsIncluded";

const LandingPage = () => {
  return (
    <div className="px-10 flex flex-col items-center ">
      <HowDoesItWork />
      <Quote />
      
      <WhatsIncluded />
      <TeamVision />
    </div>
  );
};

export default LandingPage;
