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


//3).. import React from "react";
// import ReactDOM from "react-dom/client"; // <-- Correct entry point for createRoot

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "this is Namaste React 🚀"),
//     React.createElement("h2", {}, "this is Akshay tags"),
//   ])
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//4)JSX
//res: React.createElement => Object => render=>HtmlElement

// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading=React.createElement("h1",{id:"heading"},"Namaste by React Element!!");
// console.log(heading);

// const jsxheading=<h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>

// // JSX=>Bable transpile it to React.createElment=>React Element-JS OBject =>HTMLElement(render)
// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);


//5) Component 1)Functional react component 2)Class Based Component

import React from "react";
import ReactDOM from "react-dom/client";



//React Element
const heading=(
    <h1 className="head" tabIndex="5">
         Namaste REact using JSX For multiple lines!!
    </h1>
);

const Title=()=>(
    <h1 className="head" tabIndex="5">
         Namaste REact using JSX For multiple lines!!
    </h1>
);

// React functional Component
// const HeadingComponent=()=>{
//     return (<h1 className="heading">Namaste React Functional component</h1>);
// }

const HeadingComponent=()=>(
    <div id="container">
        <p>Element inside component below: </p>
         {heading}
        {100+300}
        <p>Component inside component below 3 lines: </p>
         <Title/> 
         <Title></Title> 
         {Title()}
        {/* component com position */}
    <h1 className="heading">Namaste React Functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);



