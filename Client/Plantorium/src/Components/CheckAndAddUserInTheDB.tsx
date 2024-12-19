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
      const clerkUserId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
      const name = `${user.firstName} ${user.lastName}`.trim();
      console.log(clerkUserId, email, hasChecked, name);
      //dispatch here
    }
  }, [user, dispatch, hasChecked]);
  return null;
};

export default CheckAndAddUserInTheDB;
