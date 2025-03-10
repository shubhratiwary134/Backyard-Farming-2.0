import { useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";
import AddressInputField from "./AddressInputField";
import formImage from "../../Assests/FormImage.jpg";
import { motion } from "motion/react";
const Step1 = () => {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext<FarmFormValues>();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex  gap-10"
    >
      <div className="w-1/3 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="averageRainfall" className="px-1 text-lg font-mono ">
            Average Rainfall(mm)
          </label>
          <input
            type="number"
            name="averageRainfall"
            placeholder="Enter The Average Rainfall in mm"
            value={values.averageRainfall}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`focus:outline-none border-2 py-4 px-2 placeholder:text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-2xl ${
              values.averageRainfall === 0 ? "text-[#c8c9cc]" : "text-black"
            }`}
          />

          {errors.averageRainfall && touched.averageRainfall && (
            <div className="text-red-500">{errors.averageRainfall}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="soilType" className="px-1 text-lg font-mono">
            Soil Type
          </label>
          <select
            id="soilType"
            name="soilType"
            value={values.soilType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`py-4 px-2 bg-white placeholder:text-[#c8c9cc] font-bold border-2 rounded-xl ${
              values.soilType === "" ? "text-[#c8c9cc]" : ""
            }`}
          >
            <option
              value=""
              label="Select soil type"
              className="text-[#c8c9cc]"
            />
            <option value="Humus" label="Humus" className="text-black" />
            <option value="Loamy" label="Loamy" className="text-black" />
            <option value="Sandy" label="Sandy" className="text-black" />
            <option value="Alluvial" label="Alluvial" className="text-black" />
          </select>

          {errors.soilType && touched.soilType && (
            <div className="text-red-500">{errors.soilType}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="soilColor" className="px-1 text-lg font-mono">
            Soil Color
          </label>
          <select
            id="soilColor"
            name="soilColor"
            value={values.soilColor}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`py-4 px-2 bg-white placeholder:text-[#c8c9cc] font-bold border-2 rounded-xl ${
              values.soilColor === "" ? "text-[#c8c9cc]" : ""
            }`}
          >
            <option
              value=""
              label="Select soil Color"
              className="text-[#c8c9cc]"
            />
            <option value="Black" label="Black" className="text-black" />
            <option value="Brownish" label="Brownish" className="text-black" />
          </select>

          {errors.soilColor && touched.soilColor && (
            <div className="text-red-500">{errors.soilColor}</div>
          )}
        </div>
      </div>
      <div className="w-1/4 flex items-center">
        <img
          src={formImage}
          className="max-w-full object-contain rounded-full"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="soilTexture" className="px-1 text-lg font-mono">
            Soil Texture
          </label>
          <select
            id="soilTexture"
            name="soilTexture"
            value={values.soilTexture}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`py-4 px-2  bg-white placeholder:text-[#c8c9cc] font-bold border-2 rounded-xl ${
              values.soilTexture === "" ? "text-[#c8c9cc]" : ""
            }`}
          >
            <option
              value=""
              label="Select Soil Texture"
              className="text-[#c8c9cc]"
            />
            <option value="Soft" label="Soft" className="text-black" />
            <option value="Hard" label="Hard" className="text-black" />
            <option value="Airy" label="Airy" className="text-black" />
          </select>
          {errors.soilTexture && touched.soilTexture && (
            <div className="text-red-500">{errors.soilTexture}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="soilPH" className="px-1 text-lg font-mono">
            Soil Ph
          </label>
          <input
            type="number"
            name="soilPH"
            placeholder="Enter the soilPh"
            value={values.soilPH}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`focus:outline-none placeholder:text-[#c8c9cc] font-bold border-2 py-4 px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-2xl ${
              values.soilPH === 0 ? "text-[#c8c9cc]" : "text-black"
            }`}
          />

          {errors.soilPH && touched.soilPH && (
            <div className="text-red-500">{errors.soilPH}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="px-1 text-lg font-mono">Address</label>
          <AddressInputField />
        </div>
      </div>
    </motion.div>
  );
};

export default Step1;
