import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import CheckAndAddUserInTheDB from "./Components/CheckAndAddUserInTheDB";
import BannerImage from "./Components/BannerImage";
import bgImageForHero from "./Assests/BG_for_hero.jpg";
function App() {
  return (
    <div className="bg-[#F8E6C8]">
      <div
        style={{
          backgroundImage: `url(${bgImageForHero})`,
          backgroundSize: "100% auto",
        }}
        className="h-screen w-full bg-no-repeat bg-center"
      >
        <Navbar />
        <BannerImage />
      </div>
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
