import { useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";

const Step2 = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<FarmFormValues>();
  return (
    <div className="flex flex-col gap-10">
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
    </div>
  );
};

export default Step2;
