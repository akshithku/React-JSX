import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  return (
    <div className='app'>
      <h1>Kalvium Gallary</h1>
      <div className='img'>
        {imageData().map((abd)=>{
          return <img src={abd.img} alt=""/>
        })}
      </div>
    </div>
  )
}

 export default App;
