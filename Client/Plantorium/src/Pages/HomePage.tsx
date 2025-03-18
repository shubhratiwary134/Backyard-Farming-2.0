import homePageImage from "../Assests/BannerImage-DarkTheme.jpg";
const HomePage = () => {
  return (
    <div className="flex justify-between ">
      <div></div>
      <img src={homePageImage} className="w-1/3 object-cover"></img>
    </div>
  );
};

export default HomePage;
