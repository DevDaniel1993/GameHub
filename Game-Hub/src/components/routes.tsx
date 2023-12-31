import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";
import ViewScreenshot from "./ViewScreenshot";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
      { path: ":slug/screenshot/:id", element: <ViewScreenshot /> },
    ],
  },
]);

export default route;
