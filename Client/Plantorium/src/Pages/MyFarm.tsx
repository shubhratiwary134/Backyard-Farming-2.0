import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { myFarm } from "../store/thunks/plantoriumThunk";
import { useUser } from "@clerk/clerk-react";
import { useAppDispatch, useAppSelector } from "../store/Hook";

const MyFarm: React.FC = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { averageRainfall, waterSupply, soilType } = useAppSelector(
    (state) => state.plantorium.plantorium
  );
  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      dispatch(myFarm(userId));
      console.log(averageRainfall, waterSupply, soilType);
    }
  }, [user, dispatch, averageRainfall, waterSupply, soilType]);
  // will be using 2 useEffects one for the getting the data on the Mount , rest when the spline scene loads
  return (
    <Spline scene="https://prod.spline.design/FeRzpsDxlT20lDyK/scene.splinecode" />
  );
};

export default MyFarm;
