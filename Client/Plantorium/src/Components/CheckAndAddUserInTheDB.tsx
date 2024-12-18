import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";

const CheckAndAddUserInTheDB = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { haschecked } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user && !hasChecked) {
      hasChecked = true;
      const userId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
      //dispatch here
    }
  }, [user, dispatch, hasChecked]);
  return null;
};

export default CheckAndAddUserInTheDB;
