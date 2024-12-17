import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

const CheckAndAddUserInTheDB = () => {
  const hasChecked = useRef(false);
  const { user } = useUser();
  useEffect(() => {
    if (user && !hasChecked.current) {
      hasChecked.current = true;
    }
  }, [user]);
  return <div>CheckAndAddUserInTheDB</div>;
};

export default CheckAndAddUserInTheDB;
