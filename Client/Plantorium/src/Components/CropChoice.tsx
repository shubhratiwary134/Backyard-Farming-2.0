import { useUser } from "@clerk/clerk-react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import generateReportThunk from "../store/thunks/reportThunk";

const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const userId = user?.id;
  return (
    <div className="flex justify-around items-center gap-20">
      {cropChoices.map((crop) => {
        return (
          <div>
            <button
              onClick={() => {
                if (userId) {
                  dispatch(generateReportThunk({ userId, crop }));
                }
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
