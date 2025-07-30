import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer  from "./Shimmer";
import {Link} from "react-router-dom"






const Body=()=>{
    //Local State Variable-Super Powerful Variable
    const [ListOfRestaurant,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
       fetchData();//second render
    },[]);


    

    const fetchData = async () => {
        let url =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6317296&lng=76.99166749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      const data = await fetch( url);

    const json = await data.json();

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

     setListOfRestaurant(restaurants);       // Master list
     setFilteredRestaurant(restaurants);     // Displayed list
    };

    
    //conditional rendering

   

    // whenever state variable update, react trigger a reconcilation cycle(re-render )
    console.log("Body render")


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

    

    return !ListOfRestaurant?.length ? <Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search" >
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        // Imp: otherwise you wont be able to write in search box
                        setSearchText(e.target.value);
                    }}
                    
                    />
                    <button 
                     onClick={()=>{
                        console.log(searchText);
                        const filteredList = ListOfRestaurant.filter((res) =>
                           res.info.name.toLowerCase().includes(searchText.toLowerCase())
                         );
                        setFilteredRestaurant(filteredList);
                     }}
                    >Search</button>

                </div>
              

                <button className="filter-btn"  onClick={()=>{
                   const filteredList=ListOfRestaurant.filter((res)=>res.info.avgRating>4.5);
                   //console.log(filteredList);
                    setListOfRestaurant(filteredList);
                }} >Top Rated restaurant</button>
            </div>
               <div className="res-container">
                {
                filteredRestaurant.map((restaurant)=>(
                <Link
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}
                     > 
                     <RestaurantCard resData={restaurant}
                     /> 
                </Link>
                ))}                      

            </div>
    
           </div>
        
    );
};

export default Body;