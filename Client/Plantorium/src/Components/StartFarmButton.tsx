import { useNavigate } from "react-router";

const StartFarmButton = ({ className, text }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={className} onClick={() => navigate("/CreateFarm")}>
        {text}
      </button>
    </div>
  );
};

export default StartFarmButton;
