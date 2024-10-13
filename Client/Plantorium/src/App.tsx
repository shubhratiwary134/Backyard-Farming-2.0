import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import { useAppDispatch, useAppSelector } from "./store/Hook";
import { useEffect } from "react";
import { getFamousCrops } from "./store/thunks/cropThunk";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const { allFamousCrops } = useAppSelector((state: RootState) => state.crops);
  useEffect(() => {
    dispatch(getFamousCrops());
    console.log("calling function");
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <SignedIn>
        <HomePage />
        <div className="for famous crops">
          {allFamousCrops.length > 0 ? (
            allFamousCrops.map((crop) => {
              return <div>{crop.name}</div>;
            })
          ) : (
            <p>Loading famous crops...</p>
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </>
  );
}

export default App;
