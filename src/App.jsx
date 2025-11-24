import React, { useEffect, useState } from "react";
import { SplashPage } from "./pages/SplashPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import './App.css'
export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return <>{isLoading ? <SplashPage /> : <RouterProvider  router={router}/>}</>;
};
