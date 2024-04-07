import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import HouseCardDetails from "../components/HouseCardDetails";

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