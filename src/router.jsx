import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";

const Event = lazy(() => import("./Components/Events"));
const EventDetails = lazy(() => import("./Components/EventDetails"));
const NotFound = lazy(() => import("./Components/NotFound"));
const AddEvent = lazy(() => import("./Components/AddEvent")); // Ajout de l'import

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
    path: "/add-event",
    element: <AddEvent /> // Utilisation correcte
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;