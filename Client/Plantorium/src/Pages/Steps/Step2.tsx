import { FieldArray, useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";
import { MdOutlineDeleteForever } from "react-icons/md";
import formImage from "../../Assests/FormFarmStep2.jpg";
const Step2 = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<FarmFormValues>();
  return (
    <div className="flex gap-10">
      <div className="w-1/3 h-full flex items-center">
        <img
          src={formImage}
          className="max-w-full object-cover h-full rounded-3xl"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-5">
        <FieldArray name="pastCrops">
          {({ push, remove }) => (
            <div className="flex flex-col gap-4">
              <label htmlFor="pastCrops" className="px-1 text-lg font-mono">
                Past Crops
              </label>
              {values.pastCrops.map((crop, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <input
                    type="text"
                    name={`pastCrops[${index}]`}
                    placeholder="Enter crop name"
                    value={values.pastCrops[index]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="focus:outline-none border-2 p-4  placeholder:text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none   rounded-3xl "
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="w-16 flex justify-center"
                  >
                    <MdOutlineDeleteForever size={32} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => push("")}
                className="w-1/3 border-2 border-black font-mono px-4 py-2 rounded-lg"
              >
                Add Crop
              </button>
              {errors.pastCrops &&
                touched.pastCrops &&
                typeof errors.pastCrops === "string" && (
                  <div className="text-red-500">{errors.pastCrops}</div>
                )}
            </div>
          )}
        </FieldArray>

        <div className="flex flex-col gap-1">
          <label htmlFor="waterSupply" className="px-1 text-lg font-mono">
            Water Supply
          </label>
          <select
            id="waterSupply"
            name="waterSupply"
            value={values.waterSupply}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`py-4 px-2 bg-white placeholder:text-[#c8c9cc] font-bold border-2 rounded-xl ${
              values.waterSupply === "" ? "text-[#c8c9cc]" : ""
            }`}
          >
            <option
              value=""
              label="Select Water Supply"
              className="text-[#c8c9cc]"
            />
            <option value="Channel" label="Channel" className="text-black" />
            <option
              value="Tube Well"
              label="Tube Well"
              className="text-black"
            />
            <option value="Other" label="Other" className="text-black" />
          </select>
          {errors.waterSupply && touched.waterSupply && (
            <div className="text-red-500">{errors.waterSupply}</div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="landArea" className="px-1 text-lg font-mono ">
            Land-Area (square meters)
          </label>
          <input
            type="number"
            name="landArea"
            placeholder="Enter the landArea"
            value={values.landArea}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`focus:outline-none border-2 py-4 px-2 placeholder:text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-2xl ${
              values.landArea === 0 ? "text-[#c8c9cc]" : "text-black"
            }`}
          />
          {errors.landArea && touched.landArea && (
            <div className="text-red-500">{errors.landArea}</div>
          )}
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-5">
        <FieldArray name="affectedCrops">
          {({ push, remove }) => (
            <div className="flex flex-col gap-4">
              <label htmlFor="affectedCrops" className="px-1 text-lg font-mono">
                Affected Crops
              </label>
              {values.affectedCrops.map((crop, index) => (
                <div key={index} className=" flex items-center gap-4">
                  <input
                    type="text"
                    name={`affectedCrops[${index}]`}
                    placeholder="Enter affected crop name"
                    value={values.affectedCrops[index]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="focus:outline-none border-2 p-4 placeholder:text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none   rounded-3xl  "
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="w-16 flex justify-center "
                  >
                    <MdOutlineDeleteForever size={32} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => push("")}
                className="w-1/3 border-2 border-black font-mono px-4 py-2 rounded-lg"
              >
                Add Crop
              </button>
              {errors.affectedCrops &&
                touched.affectedCrops &&
                typeof errors.affectedCrops === "string" && (
                  <div className="text-red-500">{errors.affectedCrops}</div>
                )}
            </div>
          )}
        </FieldArray>
        <FieldArray name="cropDiseases">
          {({ push, remove }) => (
            <div className="flex flex-col gap-4">
              <label htmlFor="cropDiseases" className="px-1 text-lg font-mono">
                Crop Diseases
              </label>
              {values.cropDiseases.map((disease, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <input
                    type="text"
                    name={`cropDiseases[${index}]`}
                    placeholder="Enter disease name"
                    value={values.cropDiseases[index]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="focus:outline-none border-2 p-4  placeholder:text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none   rounded-3xl "
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="w-16 flex justify-center"
                  >
                    <MdOutlineDeleteForever size={32} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => push("")}
                className="w-1/2 border-2 border-black font-mono px-4 py-2 rounded-lg"
              >
                Add Disease
              </button>
              {errors.cropDiseases &&
                touched.cropDiseases &&
                typeof errors.cropDiseases === "string" && (
                  <div className="text-red-500">{errors.cropDiseases}</div>
                )}
            </div>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default Step2;
