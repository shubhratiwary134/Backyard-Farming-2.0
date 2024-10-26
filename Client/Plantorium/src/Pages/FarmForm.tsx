import { useFormik } from "formik";

const FarmForm = () => {
  const { values, handleChange, handleSubmit } = useFormik({
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
    onSubmit: (values) => console.log(values),
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="ml-10 mt-10 flex flex-col gap-10 w-1/4"
      >
        <input
          type="number"
          name="averageRainfall"
          placeholder="Enter The Average Rainfall"
          value={values.averageRainfall}
          onChange={handleChange}
        />
        <select
          id="soilType"
          name="soilType"
          value={values.soilType}
          onChange={handleChange}
        >
          <option value="" label="Select soil type" />
          <option value="Humus" label="Humus" />
          <option value="Loamy" label="Loamy" />
          <option value="Sandy" label="Sandy" />
          <option value="Alluvial" label="Alluvial" />
        </select>
        <select
          id="soilColor"
          name="soilColor"
          value={values.soilColor}
          onChange={handleChange}
        >
          <option value="" label="Select soil Color" />
          <option value="Black" label="Black" />
          <option value="Brownish" label="Brownish" />
        </select>
        <select
          id="soilTexture"
          name="soilTexture"
          value={values.soilTexture}
          onChange={handleChange}
        >
          <option value="" label="Select Soil Texture" />
          <option value="Soft" label="Soft" />
          <option value="Hard" label="Hard" />
          <option value="Airy" label="Airy" />
        </select>
        <input
          type="number"
          name="soilPh"
          placeholder="Enter the soilPh"
          value={values.soilPh}
          onChange={handleChange}
        />
        <select
          id="waterSupply"
          name="waterSupply"
          value={values.waterSupply}
          onChange={handleChange}
        >
          <option value="" label="Select Water Supply" />
          <option value="Channel" label="Channel" />
          <option value="Tube Well" label="Tube Well" />
          <option value="Other" label="Other" />
        </select>
        <input
          type="number"
          name="landArea"
          placeholder="Enter the landArea"
          value={values.landArea}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FarmForm;
