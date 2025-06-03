
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/pages/MainLayout";
import DiaryList from "./src/pages/DiaryList";
import DetailDiary from "./src/pages/DetailDiary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DiaryList />,
      },
      {
        path: "/detail/:id",
        element: <DetailDiary />,
      },
    ],
  },
]);
