import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Shop } from "./Shop";
import { About } from "./About";
import { Contactus } from "./Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
    errorElement: <h1>Oops! Something went wrong.</h1>,
  },
  {
    path:'shop',
    exact:true,
    element:<Shop />,
  },
  {
    path:'about-us',
    exact:true,
    element:<About />
  },
  {
    path:'contact-us',
    exact:true,
    element:<Contactus />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>
);
