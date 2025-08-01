
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const styleCard={
    backgroundColor:"#f0f0f0",
}







const Applayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
        
    </div>
    )
};



const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      children:[
          {
         path:"/",
          element:<Body />,
          },
         {
         path:"/about",
         element:<About />,
         },
        {
         path:"/contact",
          element:<Contact />,
         },
         {
         path:"/restaurants/:resId",
          element:<RestaurantMenu />,
         }
    ],
      errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);



