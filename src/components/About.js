import User from "./User"
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props){
        super(props);
       // console.log("Parent constructor");
        

    }



    async componentDidMount(){
       
    }

    render(){
        //console.log("Parent render")
       return (
        <div>
            <h1>About</h1>
            <h2>This is about page</h2>
            {/* <User name={"Ranjeet yadav (function)"} /> */}
            <UserClass name={"Ranjeet yadav (class)"} location={"Delhi"}/>
            
        </div>
    ) ;
    }
}

export default About;

















// class About extends Component{

//     constructor(props){
//         super(props);
//        // console.log("Parent constructor");
//     }

//     componentDidMount(){
//        // console.log("Parent component did mount called ")
//     }

//     render(){
//         //console.log("Parent render")
//        return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about page</h2>
//             {/* <User name={"Ranjeet yadav (function)"} /> */}
//             <UserClass name={"Ranjeet yadav (class)"} location={"Delhi"}/>
//             <UserClass name={"Elon musk (class)"} location={"us"}/>
//         </div>
//     ) ;
//     }
// }


/**
 * parent constructor
 * parent render
 * -firstchildcontructor
 * -firstchildrenedr
 * -secondchildcontructor
 * -second child render
 * 
 * 
 * <dom manipulation happens - in single batch>
 * 
 * firstdidmount
 * seconddidmount
 * parentdidmount
 * 
 * 
 * 
 */


// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about page</h2>
//             {/* <User name={"Ranjeet yadav (function)"} /> */}
//             <UserClass name={"Ranjeet yadav (class)"} location={"Delhi"}/>
//         </div>
//     )
// }

