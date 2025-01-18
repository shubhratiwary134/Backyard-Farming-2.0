import RandomPic from "../../Assests/LeafBackground.jpg";
const TeamVision = () => {
  return (
    <div className="w-screen bg-[#486B4A] flex justify-center gap-40 p-20">
      <div className="w-1/3 flex gap-10">
        <img
          src={RandomPic}
          className="object-contain max-w-full w-1/4  rounded-2xl "
        />
        <img
          src={RandomPic}
          className="object-contain max-w-full w-1/4 rounded-2xl "
        />
      </div>
      <div className="flex flex-col items-center gap-10 text-white w-1/3">
        <div className="font-heading text-7xl w-full">Meet The Team</div>

        <div className="font-Montserrat text-xl text-center w-full ">
          At Backyard Farming 2.0, we dream of a future where every backyard
          transforms into a flourishing, sustainable haven. Our mission is to
          empower individuals to cultivate their own green spaces by blending
          the magic of nature with the precision of AI. Together, we're making
          farming smarter, simpler, and more rewarding.
        </div>
      </div>
    </div>
  );
};

export default TeamVision;
