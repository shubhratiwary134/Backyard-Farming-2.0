import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectedRoute;
