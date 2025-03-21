import homePageImage from "../Assests/BannerImage-lightTheme.png";
import StartFarmButton from "../Components/StartFarmButton";

const HomePage = () => {
  return (
    <div className="flex justify-between px-10 ">
      <div className="w-1/2 flex flex-col gap-20 mt-20">
        <div className="text-7xl font-poppins text-center">
          Backyard Farming 2.O
        </div>

        <ul className="text-2xl font-poppins list-disc list-outside space-y-2 pl-10">
          <li> Track growth, update logs, and follow smart suggestions.</li>
          <li> Ask the AI chatbot now for instant farming advice.</li>
          <li> Submit your farm details and let us analyze your setup.</li>
          <li> Get a personalized report with tailored recommendations!</li>
        </ul>
        <div className="flex justify-center mt-4 ml-10">
          <StartFarmButton
            className="flex items-center justify-center gap-3 w-40 px-3 text-lg underline py-4 bg-black text-white rounded-full"
            text="Start Farm"
          ></StartFarmButton>
        </div>
      </div>
      <img src={homePageImage} className="w-[30%] object-cover" />
    </div>
  );
};

export default HomePage;
