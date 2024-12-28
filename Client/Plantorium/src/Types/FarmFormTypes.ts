export type FarmFormValues = {
  averageRainfall: number;
  soilType: string;
  soilColor: string;
  soilTexture: string;
  soilPH: number;
  waterSupply: string;
  landArea: number;
  pastCrops: string[];
  cropDiseases: string[];
  affectedCrops: string[];
  Address: string;
  Photos: File[];
};
export type FormValueForThunk = FarmFormValues & {
  userId: string;
};
