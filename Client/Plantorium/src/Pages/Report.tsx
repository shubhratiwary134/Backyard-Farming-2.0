import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getReportThunk } from "../store/thunks/reportThunk";
import { useUser } from "@clerk/clerk-react";
import LoadingScreen from "../Components/LoadingScreen";
import { marked } from "marked";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
const Report = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { reportText, reportStatus } = useAppSelector((state) => state.report);
  useEffect(() => {
    const userId = user?.id;
    if (userId && !reportText) {
      dispatch(getReportThunk(userId));
    }
  }, [dispatch, user?.id, reportText]);

  const reportContent = () => {
    const html = marked.parse(reportText);
    const handleExport = async () => {
      const doc = new jsPDF();

      const htmlText = await marked(reportText);

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlText;
      tempDiv.style.width = "180mm";
      tempDiv.style.padding = "10px";
      tempDiv.style.fontSize = "14px";
      tempDiv.style.fontFamily = "Arial, sans-serif";
      document.body.appendChild(tempDiv);

      // Convert HTML to canvas and add it to the PDF
      const canvas = await html2canvas(tempDiv);
      const imgData = canvas.toDataURL("image/png");

      doc.addImage(imgData, "PNG", 10, 10, 180, 250);
      doc.save("report.pdf");

      // Remove tempDiv after conversion
      document.body.removeChild(tempDiv);
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
            <div className=" mt-5 flex justify-between items-center">
              <div className="ml-5 w-3/4  text-8xl font-serif ">Report</div>
              <button
                className="mr-10 bg-slate-600 text-white px-10 py-2 rounded-full"
                onClick={handleExport}
              >
                Export As PDF
              </button>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className="bg-[#f7fff7]  mx-20  px-10 py-20  rounded-lg shadow-black border-2 border-black"
            ></div>
          </div>
        );
      case "notYetCreated":
        return (
          <div className="w-full h-screen flex justify-center items-center text-3xl text-gray-500">
            Report not found. Kindly create the farm first.
          </div>
        );
      default:
        return null;
    }
  };
  return <div>{reportContent()}</div>;
};

export default Report;
