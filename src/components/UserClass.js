import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummylocation",
                avatar_url:""
            }
        }
       // console.log(this.props.name+"child constructor called!!");
    }

   async componentDidMount(){
       const data=await fetch("https://api.github.com/users/Ranjeet3345");
       const json=await data.json();

       console.log(json);

       this.setState({
        userInfo:json
       });
    }
   
    componentDidUpdate(){
        console.log("componenet did update called !!");
    }

    componentWillUnmount(){
        console.log("component will unmount ");
    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        
        <img src={avatar_url}/>
        //console.log(this.props.name+"child render is called!");
        return (
        <div className="user-card" >
            

            
            
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:Ranjeet@gmail.com</h4>

        </div>
    );
    }



    
/****
*
* ---- MOUNTING ----
*
* Constructor (dummy)
* Render (dummy)
*     <HTML Dummy>
* Component Did MOUNT
*     <API Call>
*     <this.setState> → State variable is updated
*
* ---- UPDATE
*
*     render(API data)
*     <HTML (new API data)>
*     componentDid Update
*
*
*
*/



}
export default UserClass;

// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         console.log(props);
//         this.state={
//             count:0,
//             count1:1
//         }
//         console.log(this.props.name+"child constructor called!!");
//     }

//     componentDidMount(){
//         console.log(this.props.name+"child component did mount called");
//     }


//     render(){
//         const {name,location}=this.props;
//         const {count,count1}=this.state;

//         console.log(this.props.name+"child render is called!")
//         return (
//         <div className="user-card" >
//             <h1>Count: {count} </h1>

//             <button onClick={()=>{
//                // never update state variable directly

//                 this.setState({
//                     count:this.state.count+1,
//                 });

//             }} > Inc.Count

//             </button>
            
//             <h2>Name:{name}</h2>
//             <h3>Location:{location}</h3>
//             <h4>Contact:Ranjeet@gmail.com</h4>

//         </div>
//     );
//     }
// }
