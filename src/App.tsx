// App.tsx
import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";
import { AuthProvider } from "./pages/context/AuthContext";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <AuthProvider>
      {routes}
    </AuthProvider>;
}
