/* Header
  * -- Logo
  * -- Nav Items
* Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      -img
      -name of res,star rating,cuisine,deliry tie
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/  


import React from "react";
import ReactDOM from "react-dom/client";




const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard={
    backgroundColor:"#f0f0f0",
}


const resObj={
    id: "368499",
    name: "Kwality Walls Ice Cream and More",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/45b38685-66c5-467d-96a2-a1ea1eea94a7_368499.JPG",
    locality: "Old Palam Road",
    areaName: "Uttam Nagar",
    costForTwo: "₹300 for two",
    cuisines: [
    "Desserts",
    "Ice Cream",
    "Ice Cream Cakes"
    ],
    avgRating: 4.6,
    veg: true,
    parentId: "582",
    avgRatingString: "4.6",
    totalRatingsString: "92",
    sla: {
    deliveryTime: 30,
    lastMileTravel: 4.9,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "4.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-05-16 23:57:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }


const RestaurantCard=(props)=>{
    const {resData}=props
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
            <img 
            className="res-logo" 
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/3122e8f6-e485-4f7e-8ffb-bbcd2e3dbb6a_543141.jpg" />
            
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.sla.slaString}</h4>
        </div>
    )
};


const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
                
               
                


                
                                

            </div>

        </div>
    )
};

const Applayout=()=>{
    return (<div className="app">
        <Header/>
        <Body/>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);



