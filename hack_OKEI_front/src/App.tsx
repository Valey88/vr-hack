import { useState } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routers/routersTree";
import "./App.css";

function App() {
  const router = createRouter({ routeTree });
  return <RouterProvider router={router} />;
}

export default App;
