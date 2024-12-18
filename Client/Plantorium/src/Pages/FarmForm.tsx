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
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { createAFarm } from "../store/thunks/plantoriumThunk";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const FarmForm = () => {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.plantorium);
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
      <div className="px-40 py-5 flex  flex-col justify-center items-center">
        <div className="w-full mb-10 flex flex-col gap-20">
          <div className="text-5xl">Create A Backyard Farm</div>
          <LinearProgress variant="determinate" value={step * 33} />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={handleValidation(step)}
          onSubmit={(values) => {
            if (user) {
              const dataWithUserId = {
                ...values,
                userId: user.id,
              };
              dispatch(createAFarm(dataWithUserId));
              toast.success("Form submitted successfully!", {
                position: "top-center",
                duration: 1000,
              });
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }
          }}
        >
          {({ validateForm, isValid, dirty, handleSubmit }) => (
            <form
              className=" flex flex-col gap-10 w-full  rounded-3xl"
              onSubmit={handleSubmit}
            >
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
                {step < 3 ? (
                  <button
                    onClick={(e) => handleNextStep(e, validateForm)}
                    disabled={!(isValid && dirty)}
                    className="rounded-lg border-black border-2 p-3"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-lg border-black border-2 p-3"
                  >
                    submit
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
