import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getReportThunk } from "../store/thunks/reportThunk";
import { useUser } from "@clerk/clerk-react";

const Report = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { reportText } = useAppSelector((state) => state.report);
  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      dispatch(getReportThunk(userId));
    }
  });
  return <div>{reportText}</div>;
};

export default Report;
