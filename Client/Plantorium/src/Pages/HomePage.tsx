import homePageImage from "../Assests/BannerImage-lightTheme.png";
import StartFarmButton from "../Components/StartFarmButton";
import { useAppSelector } from "../store/Hook";

const HomePage = () => {
  const { hasFarm } = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-10 py-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-12 mt-6 md:mt-16 items-center md:items-center">
        <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-6xl font-poppins text-center leading-tight">
          Backyard Farming 2.0
        </h1>

        
        <ul className="text-sm sm:text-lg md:text-lg lg:text-xl font-poppins list-disc list-outside space-y-2 pl-4 sm:pl-6 md:pl-10 text-center md:text-left">
          <li>Track growth, update logs, and follow smart suggestions.</li>
          <li>Ask the AI chatbot now for instant farming advice.</li>
          <li>Submit your farm details and let us analyze your setup.</li>
          <li>Get a personalized report with tailored recommendations!</li>
        </ul>

      
        {!hasFarm && (
          <div className="flex justify-center md:justify-end mt-4 w-full md:w-[80%] lg:w-[70%]">
            <StartFarmButton
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-lg underline bg-black text-white rounded-full"
              text="Start Farm"
            />
          </div>
        )}
      </div>

      <img
        src={homePageImage}
        className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] object-cover mt-8 md:mt-0 transition-all duration-300 ease-in-out"
        alt="Home Page Banner"
        loading="lazy"
      />
    </div>
  );
};

export default HomePage;
