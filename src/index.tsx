import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PersonalProfile from "./pages/PersonalProfile/PersonalProfile";
import "primeicons/primeicons.css";
// import "primereact/resources/themes/saga-purple/theme.css";
import "primereact/resources/themes/vela-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";
import CardWithoutHeader from "./pages/PersonalProfile/CardWithoutHeader";
import CardTransferred from "./pages/PersonalProfile/CardTransferred";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/personal-profile",
    element: <PersonalProfile />,
  },
  {
    path: "/personal-profile-second",
    element: <CardWithoutHeader />,
  },
  {
    path: "/personal-profile-third",
    element: <CardTransferred />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
