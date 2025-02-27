import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getReportThunk } from "../store/thunks/reportThunk";
import { useUser } from "@clerk/clerk-react";
import LoadingScreen from "../Components/LoadingScreen";

const Report = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { reportText, reportStatus } = useAppSelector((state) => state.report);
  useEffect(() => {
    const userId = user?.id;
    if (userId && reportStatus === "notGenerated") {
      dispatch(getReportThunk(userId));
    }
  }, [dispatch, user?.id, reportStatus]);
  return (
    <div>
      {reportStatus == "generated" ? (
        <div>{reportText}</div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Report;
