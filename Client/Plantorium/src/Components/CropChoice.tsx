import { useAppDispatch, useAppSelector } from "../store/Hook";
import generateReportThunk from "../store/thunks/reportThunk";

const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-around items-center gap-20">
      {cropChoices.map((crop) => {
        return (
          <div>
            <button
              onClick={() => {
                dispatch(generateReportThunk({ crop }));
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
