import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";

import { getStatus } from "../store/thunks/userThunk";

const HasFarmCheck = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const hasFarm = useAppSelector((state) => state.user.hasFarm);

  useEffect(() => {
    if (user && !hasFarm) {
      const userId = user.id;
      dispatch(getStatus(userId));
    }
  }, [user, hasFarm, dispatch]);
  return null;
};

export default HasFarmCheck;
