import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header=()=>{

    const [btnNameReact,setBtnNameReact]=useState("login");

    console.log("headerrender!!")
    
    // if no dependency array=>useEffect is called on every render
    // if dependency array is empty=[]=> useEffect is called on initial render(just once)
    //if dependency array is [btnNameReact] => called everytime btnReactName updated

    useEffect(()=>{
        console.log("header useEffect called!!")
    },[])

    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                        btnNameReact=="login"?setBtnNameReact("Logout"):setBtnNameReact("login");
                    }}
                    
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;