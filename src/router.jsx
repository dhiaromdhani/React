import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";

const Event = lazy(() => import("./Components/Events"));
const EventDetails = lazy(() => import("./Components/EventDetails"));
const NotFound = lazy(() => import("./Components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Event /> },
      { path: "/event/:name", element: <EventDetails /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
