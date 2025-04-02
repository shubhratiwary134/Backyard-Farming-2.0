import { useFormikContext } from "formik";
import { FaPlus } from "react-icons/fa";
import { FarmFormValues } from "../../Types/FarmFormTypes";
import { IoMdRemoveCircle } from "react-icons/io";
import { motion } from "motion/react";

const Step3 = () => {
  const { values, setFieldValue } = useFormikContext<FarmFormValues>();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const updatedPhotos = [...(values.Photos || []), ...files];
      setFieldValue("Photos", updatedPhotos.slice(0, 4)); // Limit to 5 files
    }
  }
  function handleRemove(index) {
    const updatedPhotos = values.Photos?.filter((_, i) => i !== index);
    setFieldValue("Photos", updatedPhotos);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-10"
    >
      <p className="text-xl font-poppins">Upload Soil Images</p>
      <div className="grid grid-cols-4 gap-10 ">
        {values.Photos?.map((image, index) => {
          return (
            <div className="relative border-2 w-60 h-60 rounded-lg shadow-md hover:border-black group  ">
              <img
                src={URL.createObjectURL(image)}
                alt={image.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemove(index)}
                className="absolute opacity-0 group-hover:opacity-100 duration-300 -right-4 -top-6 "
              >
                <IoMdRemoveCircle size={32} />
              </button>
            </div>
          );
        })}
        {values.Photos.length < 4 && (
          <div className="flex flex-col items-center justify-center w-60 h-60  bg-gray-100 rounded-lg shadow-md">
            {/* Hidden File Input */}
            <input
              type="file"
              name="Photos"
              id="customFileInput"
              className="hidden w-full h-full"
              accept="image/*"
              onChange={handleFileChange}
            />

            <label
              htmlFor="customFileInput"
              className="w-full h-full  flex justify-center items-center bg-gray-100 text-black rounded cursor-pointer"
            >
              <FaPlus size={32} />
            </label>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Step3;
