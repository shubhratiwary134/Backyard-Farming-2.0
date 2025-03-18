import homePageImage from "../Assests/BannerImage-lightTheme.png";
const HomePage = () => {
  return (
    <div className="flex justify-between px-10 ">
      <div className="w-1/2 flex flex-col gap-20 mt-20">
        <div className="text-7xl font-poppins text-center">
          Backyard Farming 2.O
        </div>
        <div className="text-3xl font-poppins text-center"></div>
      </div>
      <img src={homePageImage} className="w-[30%] object-cover" />
    </div>
  );
};

export default HomePage;
