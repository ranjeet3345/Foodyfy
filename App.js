//1) const heading=React.createElement("h1",{id:"heading"},"Hello from Reatcjs!!!");
// console.log(heading);// this is object

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading) // object to(html browser understand)



//2)
//  <div class="parent">
//     <div class="child">
//         <h1>this is h1 tags</h1>
//         <h2>this is h2 tags</h2>
//     </div>
// </div> 


import React from "react";
import ReactDOM from "react-dom/client"; // <-- Correct entry point for createRoot

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is Namaste React 🚀"),
    React.createElement("h2", {}, "this is Akshay tags"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

