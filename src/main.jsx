import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import CartProvider from "./provider/CartProvider";
import route from "./routes/route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={route}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
