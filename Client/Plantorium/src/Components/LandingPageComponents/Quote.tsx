import quoteImage from "../../Assests/your-image.png"
import backgroundImage from "../../Assests/frame1.2.png"

const Quote = () => {
  return (
    <div className="w-screen bg-[#f8e6c8] text-black  px-10 pt-10 pb-20 font-poppins bg cover bg centre"
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize:"cover",
      //backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
       }}>
     <div className="flex  gap-5 space-x-4 mx-4">
      {/*image*/}
        <img
          src={quoteImage}
          alt="Quote Image"
          className="w-44 h-64 object-cover rounded-lg"
          />
      {/*Quote*/}
      <div className="text-[40px] pt-5 text-center">
        <p>
        " Backyard farming is more than just growing food it's about{" "}
          <span className="text-black font-bold">Cultivating</span> a sustainable future,
          <span className="text-black font-bold"> Nurturing</span> the earth, and
          <span className="text-black font-bold"> Reconnecting</span> with the simple joys
      of nature. "
        </p>
      </div>
    </div>
    </div>
  );
};

export default Quote;
