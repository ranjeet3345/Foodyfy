import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import setListOfRestaurant from "../utils/mockData"
import resList from "../utils/mockData";





const Body=()=>{
    //Local State Variable-Super Powerful Variable
    const [ListOfRestaurant,setListOfRestaurant]=useState(resList);



    // Normal JS Variable
    // let setListOfRestaurant=[
    //     {
    //         info: {
    //         id: "438436",
    //         name: "Burger King",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/7d8a94ee-0d0b-4e02-8880-337f21dd67d4_438436.jpg",
    //         locality: "Shivaji Marg",
    //         areaName: "Najafgarh",
    //         costForTwo: "₹350 for two",
    //         cuisines: [
    //         "Burgers",
    //         "American"
    //         ],
    //         avgRating: 3.2,
    //         parentId: "166",
    //         avgRatingString: "3.2",
    //         totalRatingsString: "4.7K+",
            
    //         }
    //     },
    //     {
    //         info: {
    //         id: "818557",
    //         name: "Theobroma",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/903c1c6c-ca38-4b0e-95e9-8cde53948c5d_818557.jpg",
    //         locality: "ROSHANPURA",
    //         areaName: "NAJAFGARH",
    //         costForTwo: "₹300 for two",
    //         cuisines: [
    //         "Bakery",
    //         "Desserts",
    //         "Beverages"
    //         ],
    //         avgRating: 4.4,
    //         parentId: "1040",
    //         avgRatingString: "4.4",
    //         totalRatingsString: "272",
    //         sla: {
    //         deliveryTime: 32,
    //         lastMileTravel: 4.2,
            
            
         
    //         }
    //     }
    // },
    
           
    // ];

    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"  onClick={()=>{
                    filteredList=ListOfRestaurant.filter((res)=>res.info.avgRating>4.5);
                    setListOfRestaurant(filteredList);
                }} >Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {
                ListOfRestaurant.map((restaurant)=>( <RestaurantCard key={restaurant.info.id} resData={restaurant}/> 
                ))}                      

            </div>
    
           </div>
        
    );
};

export default Body;