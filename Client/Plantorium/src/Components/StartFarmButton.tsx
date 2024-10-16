import React from "react";
import { useNavigate } from "react-router";

const StartFarmButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/Farm")}>Start Farm</button>
    </div>
  );
};

export default StartFarmButton;
