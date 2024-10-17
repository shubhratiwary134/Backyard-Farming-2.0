import React from "react";
import { useNavigate } from "react-router";

const StartFarmButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/CreateFarm")}>Start Farm</button>
    </div>
  );
};

export default StartFarmButton;
