import { useAppSelector } from "../store/Hook";

const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  return (
    <div className="flex justify-around items-center">
      {cropChoices.map((crop) => {
        return <div>{crop}</div>;
      })}
    </div>
  );
};

export default CropChoice;
