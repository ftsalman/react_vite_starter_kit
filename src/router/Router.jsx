import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LoginPage } from "../pages/LoginPage";
import { DashboardLayout } from "../layout/DashboardLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { EnquiryPage } from "../pages/EnquiryPage";
import { CourseCategoriesPage } from "../pages/CourseCategoriesPage";
import { CoursePage } from "../pages/CoursePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },

  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "register",
        element: <div></div>,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/enquiry",
        element: <EnquiryPage />,
      },

      {
        path: "master", 
        children: [
          {
            path: "coursecategories", 
            element: <CourseCategoriesPage />,
          },
          {
            path:"course",
            element:<CoursePage/>
          }
        ],
      },
    ],
  },
]);
