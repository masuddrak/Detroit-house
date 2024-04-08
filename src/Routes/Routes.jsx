import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import HouseCardDetails from "../components/HouseCardDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../components/Login";
import Registation from "../components/Registation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateUserProfile from "../components/UpdateUserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch("/hous.json")
        },
        {
          path:"/updateProfile",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/updateUserProfile",
          element:<PrivateRoute><UpdateUserProfile></UpdateUserProfile></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/registration",
          element:<Registation></Registation>
        },
        {
          path:"/houseDetails/:id",
          element:<PrivateRoute><HouseCardDetails></HouseCardDetails></PrivateRoute>,
          loader:()=>fetch("/hous.json")
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);
  export default router