import { useState } from "react";
import FarmForm from "./FarmForm";
import CropChoice from "../Components/CropChoice";

const FarmManager = () => {
  const [step, setStep] = useState("form");
  const farmSubmission = () => {
    setStep("Crop-Choice");
  };
  // const handleCropChoice = () => {
  //   setStep("Report");
  // };
  return (
    <div className="mt-10 flex justify-center ">
      {step === "form" && <FarmForm farmSubmission={farmSubmission} />}
      {step === "Crop-Choice" && <CropChoice />}
    </div>
  );
};

export default FarmManager;
