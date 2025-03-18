import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import CheckAndAddUserInTheDB from "./Components/CheckAndAddUserInTheDB";
import BannerImage from "./Components/Hero";
import bgImageForHero from "./Assests/BG_for_hero.jpg";
import ChatButton from "./Components/ChatButton";
import AuthWatcher from "./Components/AuthWatcher";

function App() {
  return (
    <div className="bg-[#f7fff7]">
      <div
        style={{
          backgroundImage: `url(${bgImageForHero})`,
        }}
        className="h-screen w-full bg-no-repeat bg-center bg-cover 2xl:bg-[length:100%_auto]"
      >
        <Navbar />
        <BannerImage />
      </div>
      <AuthWatcher />
      <SignedIn>
        <CheckAndAddUserInTheDB />
        <HomePage />
        <ChatButton />
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </div>
  );
}

export default App;
