import { Formik } from "formik";
import {
  plantoriumValidationSchemaStep1,
  plantoriumValidationSchemaStep2,
  plantoriumValidationSchemaStep3,
} from "../Schema/FarmSchema";
import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { FarmFormValues } from "../Types/FarmFormTypes";
import { LinearProgress } from "@mui/material";
import { useAppDispatch } from "../store/Hook";
import { createAFarm } from "../store/thunks/plantoriumThunk";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import farmHeadingPhoto from "../Assests/formHeading2.jpg";
import { GiFarmTractor } from "react-icons/gi";

const FarmForm = ({ farmSubmission }) => {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const initialValues: FarmFormValues = {
    averageRainfall: 0,
    soilType: "",
    soilColor: "",
    soilTexture: "",
    soilPH: 0,
    waterSupply: "",
    landArea: 0,
    pastCrops: [], // multiple select option here
    cropDiseases: [], // multiple select option here
    affectedCrops: [],
    Address: "",
    Photos: [],
  };
  const handleNextStep = async (e, validateForm) => {
    e.preventDefault();
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setStep((prev) => Math.min(prev + 1, 3)); // Move to the next step
    }
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    const newStep = Math.max(step - 1, 1);
    setStep(newStep);
  };
  const handleValidation = (step) => {
    switch (step) {
      case 1:
        return plantoriumValidationSchemaStep1;
      case 2:
        return plantoriumValidationSchemaStep2;
      case 3:
        return plantoriumValidationSchemaStep3;
    }
  };
  return (
    <>
      <div className="w-3/4  my-10  bg-white  px-10 py-5  flex  flex-col  items-center shadow-2xl rounded-2xl">
        <div className="w-full mb-5 flex flex-col gap-10">
          <div className="flex justify-between items-end">
            <div className="text-5xl font-heading mt-5">
              Create A Backyard Farm
            </div>
            <img
              src={farmHeadingPhoto}
              className="object-contain max-w-full  h-16 rounded-full"
            />
          </div>
          <LinearProgress
            variant="determinate"
            value={step == 1 ? 0 : (step - 1) * 33}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "black",
              },
              backgroundColor: "#c1c1c4",
            }}
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={handleValidation(step)}
          onSubmit={async (values) => {
            if (user) {
              const dataWithUserId = {
                ...values,
                userId: user.id,
              };
              dispatch(createAFarm(dataWithUserId));
              farmSubmission();
            }
          }}
        >
          {({ validateForm, isValid, dirty, handleSubmit }) => (
            <form
              className="mt-10 flex flex-col gap-20 w-full  rounded-3xl"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              <div className="w-full flex justify-between ">
                <button
                  onClick={handlePreviousStep}
                  className="rounded-lg border-[#c1c1c4] border-2 p-3"
                >
                  <FaAngleLeft />
                </button>
                {step < 3 ? (
                  <button
                    onClick={(e) => handleNextStep(e, validateForm)}
                    disabled={!(isValid && dirty)}
                    className="rounded-lg border-[#c1c1c4] border-2 p-3"
                  >
                    <FaAngleRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-lg border-black border-2 p-3"
                  >
                    <GiFarmTractor size={32} />
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Toaster />
    </>
  );
};

export default FarmForm;
