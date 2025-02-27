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

  const reportContent = () => {
    switch (reportStatus) {
      case "loading":
        return <LoadingScreen />;
      case "error":
        return <div>Error creating the Report</div>;
      case "generated":
        return <div>{reportText}</div>;
      case "notGenerated":
        return <div>No report available yet. Please create a report.</div>;
    }
  };
  return <div>{reportContent()}</div>;
};

export default Report;
