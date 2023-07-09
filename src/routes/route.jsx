import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCartPage from "../pages/MycartPage/MycartPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Register from "../pages/Register/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "allProducts",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "myCartPage",
        element: <MyCartPage></MyCartPage>,
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
    ],
  },
]);

export default route;
