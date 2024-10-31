const Navbar = () => {
  return (
    <div className="px-5 py-2 flex justify-between ">
      <div className="">Backyard Farming 2.O</div>
      <div className="flex justify-around items-center w-1/3">
        <a href="#">How It Works</a>
        <a href="#">Plans</a>
        <a href="#">Team</a>
        <a href="#">FAQS</a>
        <div className="flex gap-5 ">
          <button className="bg-green-400 text-black px-5 py-2 rounded-full">
            SignUp
          </button>
          <button className="bg-gray-300 text-black px-5 py-2 rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
