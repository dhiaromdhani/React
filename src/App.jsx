import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <Suspense fallback={<div className="text-center mt-5">Chargement...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
