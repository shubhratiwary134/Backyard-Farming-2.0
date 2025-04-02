import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import { persistor, store } from "./store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute.tsx";
import FarmManager from "./Pages/FarmManager.tsx";
import Plans from "./Pages/Plans.tsx";
import Report from "./Pages/Report.tsx";
import { PersistGate } from "redux-persist/integration/react";
import Chat from "./Pages/Chat.tsx";
import MyFarm from "./Pages/MyFarm.tsx";
import { CaseStudy } from "./Pages/CaseStudy.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable Key");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/plans" element={<Plans />}></Route>
              <Route path = "/caseStudy" element= { <CaseStudy/>} > </Route>
              <Route
                path="/CreateFarm"
                element={
                  <ProtectedRoute>
                    <FarmManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/myFarm"
                element={
                  <ProtectedRoute>
                    <MyFarm/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/report"
                element={
                  <ProtectedRoute>
                    <Report />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ClerkProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

//
