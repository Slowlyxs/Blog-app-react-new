import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "@emotion/react/jsx-runtime";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}