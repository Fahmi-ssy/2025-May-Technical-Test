import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/pages/MainLayout"; // Adjust the import path as needed

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // You can also add `children` here if needed:
    // children: [
    //   { path: "home", element: <HomePage /> },
    //   { path: "about", element: <AboutPage /> },
    // ]
  },
]);
