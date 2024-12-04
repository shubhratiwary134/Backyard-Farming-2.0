import { FaPlus } from "react-icons/fa";

const Step3 = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-lg">Upload images</p>
      <div className="flex flex-col items-center justify-center w-60 h-60  bg-gray-100 rounded-lg shadow-md">
        {/* Hidden File Input */}
        <input
          type="file"
          id="customFileInput"
          className="hidden w-full h-full"
          accept="image/*"
        />

        {/* Custom Button */}
        <label
          htmlFor="customFileInput"
          className="w-full h-full  flex justify-center items-center bg-gray-100 text-black rounded cursor-pointer"
        >
          <FaPlus size={32} />
        </label>
      </div>
    </div>
  );
};

export default Step3;
