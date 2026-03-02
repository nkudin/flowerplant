import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Create from "./views/Create";
import Update from "./views/Update";
import DefaultPage from "./views/DefaultPage";
import Guides from "./views/Guides";
import About from "./views/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },
      {
        path: "/guides",
        element: <Guides/>
      },
      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/update/:id",
        element: <Update />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
],
{
  basename: "/flowerplant"
}
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}