import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Greeting from "../screens/Greeting";
import ProjectForm from "../screens/ProjectForm";
import ProjectList from "../screens/ProjectList";
import React from "react";

const routes = createBrowserRouter([
  {
    element: <Greeting />,
    path: "/",
  },
  {
    element: <ProjectForm />,
    path: "/projectForm",
  },
  {
    element: <ProjectList />,
    path: "/projectList",
  },
]);

export default function DefinitionRoute() {
  return <RouterProvider router={routes} />;
}
