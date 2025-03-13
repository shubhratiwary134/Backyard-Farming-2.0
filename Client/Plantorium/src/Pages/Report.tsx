import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getReportThunk } from "../store/thunks/reportThunk";
import { useUser } from "@clerk/clerk-react";
import LoadingScreen from "../Components/LoadingScreen";
import { marked } from "marked";

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
    const html = marked.parse(reportText);
    switch (reportStatus) {
      case "loading":
        return <LoadingScreen />;
      case "error":
        return <div>Error creating the Report</div>;
      case "generated":
        return (
          <div className="bg-[#b6cfb7]">
            <div className="w-full flex justify-center text-8xl font-serif ">
              Report
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className="bg-[#f7fff7]  mx-20 my-10 px-10 py-20  rounded-lg shadow-black border-2 border-black"
            ></div>
          </div>
        );
      case "notGenerated":
        return <div>No report available yet. Please create a report.</div>;
      default:
        return null;
    }
  };
  return <div>{reportContent()}</div>;
};

export default Report;
