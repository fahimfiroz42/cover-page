import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import Home from "../PAges/Home";

const Router =  createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children:[{
        path: "/",
        element:<Home/>
      }]
    },

  ]);

export default Router;