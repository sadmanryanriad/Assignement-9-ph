import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import Cart from "../components/Pages/Cart/Cart";
import ServiceDetail from "../components/ServiceDetail/serviceDetail";
import Prices from "../components/Pages/Prices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=>fetch('/data.json')
        },
        {
          path: '/services/:id',
          element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
          loader: ()=>fetch('/data.json')
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/prices',
          element: <Prices></Prices>
        }
      ]
    },
  ]);

export default router;