import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
    ],
  },
]);

export default route;
