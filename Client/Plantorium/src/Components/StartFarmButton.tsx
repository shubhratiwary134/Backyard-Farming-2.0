import { useNavigate } from "react-router";

const StartFarmButton = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={className} onClick={() => navigate("/CreateFarm")}>
        Start Farm
      </button>
    </div>
  );
};

export default StartFarmButton;
