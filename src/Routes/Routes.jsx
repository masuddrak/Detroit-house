import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import HouseCardDetails from "../components/HouseCardDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../components/Login";
import Registation from "../components/Registation";

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
          element:<UpdateProfile></UpdateProfile>
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
          element:<HouseCardDetails></HouseCardDetails>,
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