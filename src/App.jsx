// Styles

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";

export const App = () => <RouterProvider router={router} />;
