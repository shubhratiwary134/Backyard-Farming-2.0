import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useAppDispatch } from "../store/Hook";

import { persistor } from "../store/store";

const AuthWatcher = () => {
  const { isSignedIn } = useUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSignedIn) {
      persistor.purge(); // Clear persisted report & chat data
    }
  }, [isSignedIn, dispatch]);

  return null; // This component does not render anything
};

export default AuthWatcher;
