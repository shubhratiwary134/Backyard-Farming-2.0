const TeamVision = () => {
  return (
    <div className="h-screen w-screen bg-black text-white ">
      <div className="flex flex-col p-20">
        <div className="w-full flex justify-between font-poppins">
          <div className="flex flex-col items-start">
            <p className="text-5xl ">
              The <br></br>
              <span className="text-8xl text-yellow-300 tracking-widest font-poppins">
                Creative
              </span>
              <br></br>
            </p>
            <p className="text-5xl self-end">Team</p>
          </div>
          <div className="self-end w-[55%]">
            <p className="text-center text-xl text-gray-400">
              At Backyard Farming 2.0, we dream of a future where every backyard
              transforms into a flourishing, sustainable haven. Our mission is
              to empower individuals to cultivate their own green spaces by
              blending the magic of nature with the precision of AI. Together,
              we're making farming smarter, simpler, and more rewarding.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TeamVision;
