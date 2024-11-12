import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import Login from "./pages/protected/Login";
import Dashboard from "./pages/protected/dashboard";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import Private from "./pages/protected/private";
import { PersistGate } from "redux-persist/integration/react";
import Register from "./pages/user/Register";
import Layout from "../components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contatti",
        element: <Contatti />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/private",
        element: <Private />,
        children: [{ path: "dashboard", element: <Dashboard /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
