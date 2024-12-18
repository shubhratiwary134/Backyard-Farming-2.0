import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { setHasChecked } from "../store/slices/userSlice";
const CheckAndAddUserInTheDB = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const hasChecked = useAppSelector((state) => state.user.hasChecked);
  useEffect(() => {
    if (user && !hasChecked) {
      dispatch(setHasChecked(true));
      const userId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
      console.log(userId, email, hasChecked);
      //dispatch here
    }
  }, [user, dispatch, hasChecked]);
  return null;
};

export default CheckAndAddUserInTheDB;
