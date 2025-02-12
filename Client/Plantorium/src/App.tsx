import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import CheckAndAddUserInTheDB from "./Components/CheckAndAddUserInTheDB";
import BannerImage from "./Components/BannerImage";
import bgImageForHero from "./Assests/Bg-blur-for-hero.png";
function App() {
  return (
    <div className="bg-[#FFF6E5]">
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
