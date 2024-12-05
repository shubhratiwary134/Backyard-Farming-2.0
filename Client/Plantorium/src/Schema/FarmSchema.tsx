import * as Yup from "yup";

export const plantoriumValidationSchemaStep1 = Yup.object().shape({
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
});
export const plantoriumValidationSchemaStep2 = Yup.object().shape({
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
export const plantoriumValidationSchemaStep3 = Yup.object().shape({
  Photos: Yup.array()
    .of(
      Yup.mixed()
        .test("fileType", "Unsupported file format", (value) => {
          if (!value) return true; // Skip validation if no file is selected
          return ["image/jpeg", "image/png"].includes(value.type);
        })
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true; // Skip validation if no file is selected
          return value.size <= 5 * 1024 * 1024;
        })
    )
    .max(5, "You can upload a maximum of 5 files") // Limit to 3 files
    .nullable(),
});
