import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router";
import LoadingScreen from "./LoadingScreen";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  if (loading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/Sign-In" />;
  }
  return children;
};

export default ProtectedRoute;
