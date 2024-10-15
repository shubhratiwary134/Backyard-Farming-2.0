import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <HomePage />
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </>
  );
}

export default App;
