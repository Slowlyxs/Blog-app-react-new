// PrivateRoute.tsx
import { useAuth } from "../pages/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { type ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
