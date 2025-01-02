import { useAppSelector } from "../store/Hook";

const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  return (
    <div className="flex justify-around items-center">
      {cropChoices.map((crop) => {
        return (
          <div>
            <button
              onClick={() => {
                // dispatch the generate report here
              }}
            >
              {crop}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CropChoice;
