import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import CheckAndAddUserInTheDB from "./Components/CheckAndAddUserInTheDB";

function App() {
  return (
    <div className="bg-[#FFF6E5]">
      <Navbar />
      <SignedIn>
        <CheckAndAddUserInTheDB />
        <HomePage />
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </div>
  );
}

export default App;
