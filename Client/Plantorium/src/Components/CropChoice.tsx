import { useUser } from "@clerk/clerk-react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { generateReportThunk } from "../store/thunks/reportThunk";
import { useNavigate } from "react-router";
import LoadingScreen from "./LoadingScreen";
const CropChoice = () => {
  const { cropChoices } = useAppSelector((state) => state.plantorium);
  const { reportStatus } = useAppSelector((state) => state.report);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const userId = user?.id;
  if (reportStatus === "loading") {
    return <LoadingScreen />;
  }
  return (
    <div>
      <div className="h-screen flex justify-around items-center gap-20">
        {cropChoices.map((crop) => {
          return (
            <div>
              <button
                onClick={async () => {
                  if (userId) {
                    const result = await dispatch(
                      generateReportThunk({ userId, crop })
                    );
                    if (generateReportThunk.fulfilled.match(result)) {
                      navigate("/report");
                    }
                  }
                }}
                className="border-2 px-10 py-2"
              >
                {crop}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CropChoice;
