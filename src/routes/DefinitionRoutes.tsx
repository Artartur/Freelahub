import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Greeting from "../screens/Greeting";
import TeacherForm from "../screens/TeacherForm";
import TeacherList from "../screens/TeacherList";
import React from "react";

const routes = createBrowserRouter([
  {
    element: <Greeting />,
    path: "/",
  },
  {
    element: <TeacherForm />,
    path: "/teacherForm",
  },
  {
    element: <TeacherList />,
    path: "/teacherList",
  },
]);

export default function DefinitionRoute() {
  return <RouterProvider router={routes} />;
}
