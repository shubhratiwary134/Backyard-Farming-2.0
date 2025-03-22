import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getReportThunk } from "../store/thunks/reportThunk";
import { useUser } from "@clerk/clerk-react";
import LoadingScreen from "../Components/LoadingScreen";
import { marked } from "marked";
import { jsPDF } from "jspdf";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

const Report = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { reportText, reportStatus } = useAppSelector((state) => state.report);
  const navigate = useNavigate();
  useEffect(() => {
    const userId = user?.id;
    if (userId && !reportText) {
      dispatch(getReportThunk(userId));
    }
  }, [dispatch, user?.id, reportText]);

  const reportContent = () => {
    const html = marked.parse(reportText);
    const handleExport = () => {
      const doc = new jsPDF();
      const marginLeft = 10;
      const marginTop = 10;
      const maxWidth = 180; // Text width limit
      const lineHeight = 10;
      const maxHeight = 280; // Avoids cutting off bottom text

      let y = marginTop;
      const lines = doc.splitTextToSize(reportText, maxWidth);

      lines.forEach((line) => {
        if (y + lineHeight > maxHeight) {
          doc.addPage(); // Add a new page
          y = marginTop; // Reset y position for new page
        }
        doc.text(line, marginLeft, y);
        y += lineHeight;
      });

      doc.save("report.pdf");
    };
    switch (reportStatus) {
      case "loading":
        return <LoadingScreen />;
      case "error":
        return (
          <div className="w-full h-screen flex  text-3xl justify-center items-center text-gray-500">
            Error Creating the Report
          </div>
        );
      case "generated":
        return (
          <div className="bg-[#e1e4e1]  flex flex-col gap-20">
            <div className="px-20 mt-5 flex justify-between items-center">
              <button onClick={() => navigate("/")}>
                <FaHome size={64} />
              </button>
              <div className="ml-5   text-8xl font-serif ">Report</div>
              <button
                className="mr-10 bg-slate-600 text-white px-10 py-2 rounded-full"
                onClick={handleExport}
              >
                Export As PDF
              </button>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className="bg-[#f7fff7] mb-10 mx-20  p-10 rounded-lg shadow-black border-2 border-black"
            ></div>
          </div>
        );
      case "notYetCreated":
        return (
          <div className="w-full h-screen flex flex-col gap-10 justify-center items-center text-3xl text-gray-500">
            Report not found. Kindly create the farm first.
            <button onClick={() => navigate("/")}>
              <FaHome size={64} />
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return <div>{reportContent()}</div>;
};

export default Report;
