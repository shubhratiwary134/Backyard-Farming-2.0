import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../store/Hook";

const CheckAndAddUserInTheDB = () => {
  const hasChecked = useRef(false);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const retryCount = useRef(0);
  const Max_Retries = 5; //Maximum times we call the Api in case of error
  useEffect(() => {
    if (user && !hasChecked.current) {
      hasChecked.current = true;
      const userId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
      //dispatch here
    }
  }, [user]);
  return null;
};

export default CheckAndAddUserInTheDB;
