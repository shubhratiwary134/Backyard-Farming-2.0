import { useFormik } from "formik";
import plantoriumValidationSchema from "../Schema/FarmSchema";

const FarmForm = () => {
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        averageRainfall: 0,
        soilType: "",
        soilColor: "",
        soilTexture: "",
        soilPh: 0,
        waterSupply: "",
        landArea: 0,
        pastCrops: [], // multiple select option here
        cropDiseases: [], // multiple select option here
        affectedCrops: [], // multiple select option here
      },
      validationSchema: plantoriumValidationSchema,
      onSubmit: (values) => console.log(values),
    });
  return (
    <>
      <div className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="ml-10 mt-10 flex flex-col gap-10 w-5/6 border-2 border-black p-10 rounded-3xl"
        >
          <input
            type="number"
            name="averageRainfall"
            placeholder="Enter The Average Rainfall"
            value={values.averageRainfall}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.averageRainfall && touched.averageRainfall && (
            <div className="text-red-500">{errors.averageRainfall}</div>
          )}
          <select
            id="soilType"
            name="soilType"
            value={values.soilType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" label="Select soil type" />
            <option value="Humus" label="Humus" />
            <option value="Loamy" label="Loamy" />
            <option value="Sandy" label="Sandy" />
            <option value="Alluvial" label="Alluvial" />
          </select>
          {errors.soilType && touched.soilType && (
            <div className="text-red-500">{errors.soilType}</div>
          )}
          <select
            id="soilColor"
            name="soilColor"
            value={values.soilColor}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" label="Select soil Color" />
            <option value="Black" label="Black" />
            <option value="Brownish" label="Brownish" />
          </select>
          {errors.soilColor && touched.soilColor && (
            <div className="text-red-500">{errors.soilColor}</div>
          )}
          <select
            id="soilTexture"
            name="soilTexture"
            value={values.soilTexture}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" label="Select Soil Texture" />
            <option value="Soft" label="Soft" />
            <option value="Hard" label="Hard" />
            <option value="Airy" label="Airy" />
          </select>
          {errors.soilTexture && touched.soilTexture && (
            <div className="text-red-500">{errors.soilTexture}</div>
          )}
          <input
            type="number"
            name="soilPh"
            placeholder="Enter the soilPh"
            value={values.soilPh}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.soilPh && touched.soilPh && (
            <div className="text-red-500">{errors.soilPh}</div>
          )}
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
          <input
            type="number"
            name="landArea"
            placeholder="Enter the landArea"
            value={values.landArea}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.landArea && touched.landArea && (
            <div className="text-red-500">{errors.landArea}</div>
          )}
          <button
            type="submit"
            className="w-60 px-10 rounded-lg py-2 border-black border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmForm;
