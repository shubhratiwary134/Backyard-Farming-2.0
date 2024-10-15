import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getFamousCrops } from "../store/thunks/cropThunk";

const FamousCropsLists = () => {
  const dispatch = useAppDispatch();
  const { allFamousCrops } = useAppSelector((state) => state.crops);
  useEffect(() => {
    dispatch(getFamousCrops());
  }, [dispatch]);
  return (
    <div>
      {allFamousCrops.map((crop) => {
        return (
          <div>
            <div>{crop.name}</div>
            <div>{crop.additionalTips}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FamousCropsLists;
