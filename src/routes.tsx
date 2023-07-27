import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import ProductList from "./pages/ProductList";
import Detail from "./pages/Detail";
import About from "./pages/About";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Admin/></div>,
  },
  {
    path:"/about",
    element:< About/ >
  }
  ,
  {
    path: "/admin",
    element: (
      <div>
        <Admin />
        <Outlet />
      </div>
    ),
    children:[
        {
            index:true,
            element:<Navigate to={"product"}/>
        },
        {
            path: "product",
            element:<ProductList/>
        },
        {
            path: "product/:id",
            element: <Detail/>
        }
    ]
  },
]);
