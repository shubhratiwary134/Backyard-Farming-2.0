import { Formik } from "formik";
import plantoriumValidationSchema from "../Schema/FarmSchema";
import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { FarmFormValues } from "../Types/FarmFormTypes";

const FarmForm = () => {
  const [step, setStep] = useState(1);
  const initialValues: FarmFormValues = {
    averageRainfall: 0,
    soilType: "",
    soilColor: "",
    soilTexture: "",
    soilPh: 0,
    waterSupply: "",
    landArea: 0,
    pastCrops: [], // multiple select option here
    cropDiseases: [], // multiple select option here
    affectedCrops: [],
    Photos: [],
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    const newStep = Math.min(step + 1, 3);
    setStep(newStep);
  };
  const handlePreviousStep = (e) => {
    e.preventDefault();
    const newStep = Math.max(step - 1, 1);
    setStep(newStep);
  };
  return (
    <>
      <div className="px-40 py-5 flex  flex-col justify-center items-center">
        <div className="w-full mb-10">
          <div className="text-5xl">Create A Backyard Farm</div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={plantoriumValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <form className=" flex flex-col gap-10 w-full  rounded-3xl">
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            <div className="w-full flex gap-20">
              <button
                onClick={handlePreviousStep}
                className="rounded-lg border-black border-2 p-3"
              >
                previous
              </button>
              <button
                onClick={handleNextStep}
                className="rounded-lg border-black border-2 p-3"
              >
                Next
              </button>
            </div>
          </form>
        </Formik>
      </div>
    </>
  );
};

export default FarmForm;
