import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

// Styles

import "./App.css";

export const App = () => <RouterProvider router={router} />;
