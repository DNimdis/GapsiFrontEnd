import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing, Dashboard } from "../pages";

function Index() {
  let element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/Dashboard", element: <Dashboard /> },    
  ]);

  return element;
}

export default Index;
