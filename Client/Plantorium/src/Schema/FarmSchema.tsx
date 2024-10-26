import * as Yup from "yup";

export const plantoriumValidationSchema = Yup.object().shape({
  averageRainfall: Yup.number()
    .min(0, "Average rainfall cannot be negative")
    .required("Average Rainfall is required"),
  soilType: Yup.string()
    .oneOf(["Humus", "Loamy", "Sandy", "Alluvial"], "Invalid soil type")
    .required("Soil type is required"),
  soilColor: Yup.string()
    .oneOf(["Black", "Brownish"], "Invalid soil color")
    .required("Soil color is required"),
  soilTexture: Yup.string()
    .oneOf(["Soft", "Hard", "Airy"], "Invalid soil texture")
    .required("Soil texture is required"),
  soilPh: Yup.number()
    .min(0, "pH cannot be negative")
    .max(14, "pH cannot exceed 14")
    .required("Soil pH is required"),
  pastCrops: Yup.array()
    .of(Yup.string().required("Crop name is required"))
    .nullable(),
  cropDiseases: Yup.array()
    .of(Yup.string().required("Disease name is required"))
    .nullable(),
  affectedCrops: Yup.array()
    .of(Yup.string().required("Affected crop name is required"))
    .nullable(),
  waterSupply: Yup.string()
    .oneOf(["Channel", "Tube Well", "Other"], "Invalid water supply type")
    .required("Water supply is required"),

  landArea: Yup.number()
    .min(0, "Land area cannot be negative")
    .required("Land area is required"),
});

export default plantoriumValidationSchema;
