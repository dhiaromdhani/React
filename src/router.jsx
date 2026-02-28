import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";

const Events = lazy(() => import("./Components/Events"));
const EventDetails = lazy(() => import("./Components/EventDetails"));
const NotFound = lazy(() => import("./Components/NotFound"));
const AddEvent = lazy(() => import("./Components/AddEvent"));
const UpdateEvent = lazy(() => import("./Components/UpdateEvent"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Events /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:id", element: <EventDetails /> },
      { path: "/add-event", element: <AddEvent /> },
      { path: "/update-event/:id", element: <UpdateEvent /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
