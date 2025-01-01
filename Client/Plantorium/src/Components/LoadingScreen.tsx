import LoadingGif from "../Assests/LoadingScreen.gif";
const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen bg-[#FBFBFB] flex justify-center items-center">
      <img src={LoadingGif} className="object-contain" />
    </div>
  );
};

export default LoadingScreen;
