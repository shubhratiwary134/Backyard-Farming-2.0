import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { myFarms } from "../store/thunks/plantoriumThunk";
import { useUser } from "@clerk/clerk-react";

const MyFarms = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { plantoriums } = useAppSelector((state) => state.plantorium);
  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      dispatch(myFarms(userId));
    }
  }, [user, dispatch]);
  return (
    <div>
      {plantoriums.map((plantorium) => (
        <div key={plantorium.userId}>{plantorium.landArea}</div>
      ))}
    </div>
  );
};

export default MyFarms;
