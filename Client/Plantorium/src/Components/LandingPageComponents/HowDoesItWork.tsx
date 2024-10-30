import image1 from "../../Assests/PersonHoldingAPhone.jpg";
import image2 from "../../Assests/report.png";
import image3 from "../../Assests/BannerTry.avif";
const HowDoesItWork = () => {
  return (
    <div className="px-5">
      <div className=" text-3xl">How Does It Work ? </div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96 flex flex-col border-2 border-black rounded-lg">
          <div>Upload Your Plant Photos</div>
          <div>
            <img src={image1} className="w-full rounded-3xl" />
          </div>
          <div className="text-wrap">
            Start by uploading pictures of your plants or the crops you want to
            grow. Don’t have photos? No problem! Select from a list of popular
            crops to get started.
          </div>
        </div>
        <div className=" w-96 flex flex-col  border-2 border-black">
          <div>Receive Your Weekly Roadmap</div>
          <div>
            <img src={image2} className="w-full rounded-3xl" />
          </div>
          <div>
            Based on your plant choice, we’ll create a tailored weekly roadmap
            with all the steps you need to help your plants thrive.
          </div>
        </div>
        <div className=" w-96 flex flex-col  border-2 border-black">
          <div>Track Progress & Join the Community</div>
          <div>
            <img src={image3} className=" rounded-3xl" />
          </div>
          <div>
            Check off completed tasks each week, track your progress, and share
            tips and experiences with other backyard gardeners
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
