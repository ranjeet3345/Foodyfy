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

const RestaurantCard=()=>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/3122e8f6-e485-4f7e-8ffb-bbcd2e3dbb6a_543141.jpg" />
            <h3>Bikanerwala</h3>
            <h4>Sweet,North India,</h4>
            <h4>3.4 star</h4>
            <h4>40-50 min</h4>
        </div>
    )
};


const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

                
                
                                

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



