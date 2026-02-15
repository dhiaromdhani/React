import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavigationBar from "../Components/Navbar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}
