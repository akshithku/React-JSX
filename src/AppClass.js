import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

 class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
  return (
    <div className='app'>
      <h1>Kalvium Gallary</h1>
      <div className='img'>
        {this.imageData().map((abd)=>{
          return <img src={abd.img} alt=""/>
        })}
      </div>
    </div>
  )
}
  

}

  export default AppClass;

