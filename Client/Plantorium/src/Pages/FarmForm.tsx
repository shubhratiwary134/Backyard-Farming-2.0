import { useFormik } from "formik";
import plantoriumValidationSchema from "../Schema/FarmSchema";

const FarmForm = () => {
  const formik = useFormik({
    initialValues: {
      averageRainfall: "", // Average rainfall as a number
      soilType: "", // Soil type as a string
      soilColor: "", // Soil color as a string
      soilTexture: "", // Soil texture as a string
      soilPH: "", // Soil pH as a number
      pastCrops: [""], // Past crops as an array of strings
      cropDiseases: [""], // Crop diseases as an array of strings
      affectedCrops: [""], // Affected crops as an array of strings
      waterSupply: "", // Water supply as a string
      landArea: "", // Land area as a number
    },
    validationSchema: plantoriumValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  return (
    <>
      <form autoComplete="off" className="flex flex-col">
        <label htmlFor="AverageRainfall">Average Rainfall</label>
        <input
          value={formik.values.averageRainfall}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Soil Type</label>
        <input
          value={formik.values.soilType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Soil COlor</label>
        <input
          value={formik.values.soilColor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">soil texture</label>
        <input
          value={formik.values.soilTexture}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">soil ph</label>
        <input
          value={formik.values.soilPH}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Past crops</label>
        <input
          value={formik.values.pastCrops}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Crop Diseases</label>
        <input
          value={formik.values.cropDiseases}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Affected Crops</label>
        <input
          value={formik.values.affectedCrops}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Water Supply</label>
        <input
          value={formik.values.waterSupply}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <label htmlFor="AverageRainfall">Land Area</label>
        <input
          value={formik.values.landArea}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="enter average rainfall"
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FarmForm;
