import { useAppSelector } from "../store/Hook";

const Report = () => {
  const { reportText } = useAppSelector((state) => state.report);
  return <div>{reportText}</div>;
};

export default Report;
