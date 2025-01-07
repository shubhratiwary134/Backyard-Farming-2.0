import { useState } from "react";
import FarmForm from "./FarmForm";
import CropChoice from "../Components/CropChoice";

const FarmManager = () => {
  const [step, setStep] = useState("form");
  const farmSubmission = () => {
    setStep("Crop-Choice");
  };
  return (
    <div className="bg-[#E7E7E9] h-screen flex justify-center">
      {step === "form" && <FarmForm farmSubmission={farmSubmission} />}
      {step === "Crop-Choice" && <CropChoice />}
    </div>
  );
};

export default FarmManager;
