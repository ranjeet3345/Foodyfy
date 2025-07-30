import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Make sure resInfo is loaded before destructuring
  const restaurant = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  

  console.log(restaurant);

  if (!restaurant) {
    return <div>No restaurant data found</div>;
  }

  const { name, cuisines, costForTwo } = restaurant;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwo}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
          <li key={item.card.info.id}>{item.card.info.name}-Rs{item.card.info.price/100}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default RestaurantMenu;
