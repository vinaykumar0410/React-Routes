import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
