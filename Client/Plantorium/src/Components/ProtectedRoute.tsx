import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth(); //added the isLoaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  // Show a loading indicator or fallback component while checking auth status
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
