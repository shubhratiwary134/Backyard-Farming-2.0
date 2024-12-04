import { useFormikContext } from "formik";
import { FaPlus } from "react-icons/fa";
import { FarmFormValues } from "../../Types/FarmFormTypes";

const Step3 = () => {
  const { values, setFieldValue } = useFormikContext<FarmFormValues>();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const updatedPhotos = [...(values.Photos || []), ...files];
      setFieldValue("Photos", updatedPhotos.slice(0, 5)); // Limit to 5 files
    }
  }
  return (
    <div className="flex flex-col gap-10">
      <p className="text-lg">Upload images</p>
      <div className="flex gap-20">
        {values.Photos?.map((image, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col items-center justify-center w-60 h-60  bg-gray-100 rounded-lg shadow-md">
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-center w-60 h-60  bg-gray-100 rounded-lg shadow-md">
          {/* Hidden File Input */}
          <input
            type="file"
            id="customFileInput"
            className="hidden w-full h-full"
            accept="image/*"
            onChange={handleFileChange}
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
    </div>
  );
};

export default Step3;
