import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import Cart from "../components/Pages/Cart/Cart";
import ServiceDetail from "../components/ServiceDetail/serviceDetail";
import Prices from "../components/Pages/Prices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/Pages/ErrorPage";
import PrivateRouteCart from "../PrivateRoute/PrivateRouteCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRouteCart><Cart></Cart></PrivateRouteCart>,
          loader: ()=> fetch('/data.json')
        },
        {
          path: '/prices',
          element: <PrivateRouteCart><Prices></Prices></PrivateRouteCart>
        }
      ]
    },
  ]);

export default router;