export type FarmFormValues = {
  averageRainfall: number;
  soilType: string;
  soilColor: string;
  soilTexture: string;
  soilPh: number;
  waterSupply: string;
  landArea: number;
  pastCrops: string[];
  cropDiseases: string[];
  affectedCrops: string[];
  Photos: File[];
};
