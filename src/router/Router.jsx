import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MainLayout } from "../layout/MainLayout";
import { ProductsPage } from "../pages/ProductsPage";

export const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
      <MainLayout/>
    ),
    children:[
      {
        index:true,
        element: <HomePage/>
      },
      {
        path:"products",
        element:(
          <ProductsPage/>
        )
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
