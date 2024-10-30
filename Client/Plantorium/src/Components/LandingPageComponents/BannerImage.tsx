import BannerPic from "../../Assests/banner.jpg";
const BannerImage = () => {
  return (
    <div className="pt-5 w-full h-screen flex justify-center relative">
      <img src={BannerPic} className="w-5/6 h-5/6 object-cover rounded-2xl" />
      <button className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700">
        Call to Action
      </button>
    </div>
  );
};

export default BannerImage;
