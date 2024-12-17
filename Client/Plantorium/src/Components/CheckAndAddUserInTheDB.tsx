import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

const CheckAndAddUserInTheDB = () => {
  const hasChecked = useRef(false);
  const { user } = useUser();
  useEffect(() => {
    if (user && !hasChecked.current) {
      hasChecked.current = true;
      const userId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
    }
  }, [user]);
  return null;
};

export default CheckAndAddUserInTheDB;
