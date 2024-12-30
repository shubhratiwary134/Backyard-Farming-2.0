import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import { store } from "./store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute.tsx";
import MyFarms from "./Pages/MyFarms.tsx";
import FarmManager from "./Pages/FarmManager.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable Key");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/CreateFarm"
              element={
                <ProtectedRoute>
                  <FarmManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myFarms"
              element={
                <ProtectedRoute>
                  <MyFarms />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ClerkProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

//
