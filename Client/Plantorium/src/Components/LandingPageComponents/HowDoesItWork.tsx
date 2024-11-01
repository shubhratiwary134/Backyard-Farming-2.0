import image1 from "../../Assests/YellowTheme.jpg";
import image2 from "../../Assests/report.png";
import image3 from "../../Assests/BannerTry.avif";
const HowDoesItWork = () => {
  return (
    <div className="w-full">
      <div className=" text-5xl">How Does It Work ? </div>
      <div className="text-gray-500 mt-5">
        AI analyzes your unique backyard farm and provides personalized guidance
      </div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96  flex flex-col border-2 gap-5 border-gray-200 rounded-lg">
          <img src={image1} className="w-full rounded-lg h-2/3" />
          <div className="text-md mr-5 ml-2 text-neutral-900">
            Start by uploading pictures of your plants or the crops you want to
            grow. Don’t have photos? No problem! Select from a list of popular
            crops to get started.
          </div>
        </div>
        <div className="w-96  flex flex-col border-2 gap-5 border-gray-200 rounded-lg">
          <img src={image2} className="w-full rounded-lg h-2/3" />

          <div className="text-md mr-5 ml-2 text-neutral-900">
            Based on your plant choice, we’ll create a tailored weekly roadmap
            with all the steps you need to help your plants thrive.
          </div>
        </div>
        <div className="w-96  flex flex-col border-2 gap-5 border-gray-200 rounded-lg">
          <img src={image3} className="w-full rounded-lg h-2/3" />
          <div className="text-md mr-5 ml-2 text-neutral-900">
            Check off completed tasks each week, track your progress, and share
            tips and experiences with other backyard gardeners
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
