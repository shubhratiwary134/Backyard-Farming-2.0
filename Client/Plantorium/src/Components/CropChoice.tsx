import { useUser } from "@clerk/clerk-react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { generateReportThunk } from "../store/thunks/reportThunk";
import { useNavigate } from "react-router";
const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const userId = user?.id;
  return (
    <div className="flex justify-around items-center gap-20">
      {cropChoices.map((crop) => {
        return (
          <div>
            <button
              onClick={async () => {
                if (userId) {
                  const result = await dispatch(
                    generateReportThunk({ userId, crop })
                  );
                  // waiting for the result of the dispatch to navigate
                  if (generateReportThunk.fulfilled.match(result)) {
                    navigate("/report"); // Navigates only after report is successfully generated
                  }
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
