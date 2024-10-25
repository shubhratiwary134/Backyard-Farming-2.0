import { useFormik } from "formik";

const FarmForm = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      averageRainfall: 0,
      soilType: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="averageRainfall"
          placeholder="enter the Average Rainfall"
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FarmForm;
