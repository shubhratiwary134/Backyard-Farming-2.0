import { useFormik } from "formik";
import plantoriumValidationSchema from "../Schema/FarmSchema";

const FarmForm = () => {
  const formik = useFormik({
    initialValues: {
      averageRainfall: "",
      soilType: "",
      soilColor: "",
      soilTexture: "",
      soilPH: "",
      pastCrops: [""],
      cropDiseases: [""],
      affectedCrops: [""],
      waterSupply: "",
      landArea: "",
    },
    validationSchema: plantoriumValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          {/* Average Rainfall */}
          <div className="mb-4">
            <label
              htmlFor="averageRainfall"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Average Rainfall (mm)
            </label>
            <input
              value={formik.values.averageRainfall}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="averageRainfall"
              placeholder="Enter average rainfall"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Soil Type */}
          <div className="mb-4">
            <label
              htmlFor="soilType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Soil Type
            </label>
            <input
              value={formik.values.soilType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="soilType"
              placeholder="Enter soil type"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Soil Color */}
          <div className="mb-4">
            <label
              htmlFor="soilColor"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Soil Color
            </label>
            <input
              value={formik.values.soilColor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="soilColor"
              placeholder="Enter soil color"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Soil Texture */}
          <div className="mb-4">
            <label
              htmlFor="soilTexture"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Soil Texture
            </label>
            <input
              value={formik.values.soilTexture}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="soilTexture"
              placeholder="Enter soil texture"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Soil pH */}
          <div className="mb-4">
            <label
              htmlFor="soilPH"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Soil pH
            </label>
            <input
              value={formik.values.soilPH}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="soilPH"
              placeholder="Enter soil pH"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Past Crops */}
          <div className="mb-4">
            <label
              htmlFor="pastCrops"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Past Crops
            </label>
            <input
              value={formik.values.pastCrops}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="pastCrops"
              placeholder="Enter past crops"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Crop Diseases */}
          <div className="mb-4">
            <label
              htmlFor="cropDiseases"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Crop Diseases
            </label>
            <input
              value={formik.values.cropDiseases}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="cropDiseases"
              placeholder="Enter crop diseases"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Affected Crops */}
          <div className="mb-4">
            <label
              htmlFor="affectedCrops"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Affected Crops
            </label>
            <input
              value={formik.values.affectedCrops}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="affectedCrops"
              placeholder="Enter affected crops"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Water Supply */}
          <div className="mb-4">
            <label
              htmlFor="waterSupply"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Water Supply
            </label>
            <input
              value={formik.values.waterSupply}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="waterSupply"
              placeholder="Enter water supply"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Land Area */}
          <div className="mb-4">
            <label
              htmlFor="landArea"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Land Area (in acres)
            </label>
            <input
              value={formik.values.landArea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="landArea"
              placeholder="Enter land area"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmForm;
