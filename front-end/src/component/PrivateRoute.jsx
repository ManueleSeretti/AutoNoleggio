import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = useSelector(state => state.login.token);
  const isAuthenticated = token !== null && token !== "";

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
