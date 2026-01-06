import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const userCredentials = useSelector((state) => state.user);

  if (!userCredentials?.token) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};
