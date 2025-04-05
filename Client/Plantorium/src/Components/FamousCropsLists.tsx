import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getFamousCrops } from "../store/thunks/cropThunk";
import image1 from "../Assests/YellowTheme.jpg";

interface CropInterface {
  name: string;
  description: string;
}

const FamousCropsLists = () => {
  const dispatch = useAppDispatch();
  const { allFamousCrops } = useAppSelector((state) => state.crops);
  useEffect(() => {
    dispatch(getFamousCrops());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-4 gap-20">
      {allFamousCrops.map((crop: CropInterface, id) => {
        return (
          <div
            key={id}
            className="w-60 h-80 flex flex-col border-2 gap-5 border-gray-200 rounded-lg"
          >
            <img src={image1} className="w-full h-1/2" />
            <div className="text-xl mr-5 ml-2">{crop.name}</div>
            <div className="text-md mr-5 ml-2 text-neutral-900">
              {crop.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FamousCropsLists;
