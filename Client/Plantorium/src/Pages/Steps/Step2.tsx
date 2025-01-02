import { FieldArray, useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";

const Step2 = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<FarmFormValues>();
  return (
    <div className="flex flex-col gap-10">
      <FieldArray name="pastCrops">
        {({ push, remove }) => (
          <div className="flex flex-col gap-4">
            <h3>Past Crops</h3>
            {values.pastCrops.map((crop, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="text"
                  name={`pastCrops[${index}]`}
                  placeholder="Enter crop name"
                  value={values.pastCrops[index]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border p-2 rounded"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove{" "}
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push("")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
      <FieldArray name="cropDiseases">
        {({ push, remove }) => (
          <div className="flex flex-col gap-4">
            <h3>Crop Diseases</h3>
            {values.cropDiseases.map((disease, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="text"
                  name={`cropDiseases[${index}]`}
                  placeholder="Enter disease name"
                  value={values.cropDiseases[index]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border p-2 rounded"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push("")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
      <FieldArray name="affectedCrops">
        {({ push, remove }) => (
          <div className="flex flex-col gap-4">
            <h3>Affected Crops</h3>
            {values.affectedCrops.map((crop, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="text"
                  name={`affectedCrops[${index}]`}
                  placeholder="Enter affected crop name"
                  value={values.affectedCrops[index]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border p-2 rounded"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push("")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
      <select
        id="waterSupply"
        name="waterSupply"
        value={values.waterSupply}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" label="Select Water Supply" />
        <option value="Channel" label="Channel" />
        <option value="Tube Well" label="Tube Well" />
        <option value="Other" label="Other" />
      </select>
      {errors.waterSupply && touched.waterSupply && (
        <div className="text-red-500">{errors.waterSupply}</div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="landArea" className="px-1 text-lg font-mono ">
          Land-Area
        </label>
        <input
          type="number"
          name="landArea"
          placeholder="Enter the landArea"
          value={values.landArea}
          onChange={handleChange}
          onBlur={handleBlur}
          className="focus:outline-none border-2 py-4 px-2 text-[#c8c9cc] font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-2xl"
        />
        {errors.landArea && touched.landArea && (
          <div className="text-red-500">{errors.landArea}</div>
        )}
      </div>
    </div>
  );
};

export default Step2;
