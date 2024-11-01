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
    <div className="grid grid-cols-3 gap-20">
      {allFamousCrops.map((crop) => {
        return (
          <div className="w-96 border-2 p-10 border-black">
            <div>{crop.name}</div>
            <div>{crop.additionalTips}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FamousCropsLists;
