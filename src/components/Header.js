import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li> <Link to="/contact" >Contact Us</Link></li>
                    <li><Link to="/about" >Cart</Link></li>
                    
                    
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