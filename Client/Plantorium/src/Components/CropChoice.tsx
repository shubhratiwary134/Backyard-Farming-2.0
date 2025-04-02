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
    <div className="h-screen bg-[#355e3b] text-white flex flex-col items-center justify-center  gap-20">
      <div className="text-6xl p-10">Select Crop Type </div>
      <div className=" flex  justify-around items-center gap-40 ">
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
                className="border-2 hover:bg-white hover:text-xl hover:text-black duration-200 hover:py-5 hover:px-20 border-white px-10 py-2"
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
