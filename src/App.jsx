import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {


  const [ red, setRed] = useState({});
  

  const [data,setData] = useState (true);

   
 
  useEffect(() =>{

    navigator.geolocation.getCurrentPosition(success,);
    function success(pos) {
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=2cd3b390e5024e82793139b25c3639c7`)
      .then(res => setData(res.data))
      res.data.height = res.data.height/740.85
    }
    
  
    
  },[]);



  console.log(data)

  return (
    <div className="App" >

     <h5>Wheather App</h5>

    <img className='img' src={`http://openweathermap.org/img/wn/${data.weather?. [0].icon}.png`} alt="" />
    
      <div>{red ? " 24°C"  : "16°F"} </div>
    
    <h1>{data.name},{data.sys?.country}</h1>
    
    <div><b className='violet'>Wind speed:   </b>{data.wind?.speed}  m/s</div>
    <br />
    <div><b className='violet'>Clouds:    </b>{data.clouds?.all}%</div>
    <br />
    <div><b className='violet'> Weather:</b> {data.weather?.[0].description}</div>
      <br />
    <div><b className='violet'>Pressure: </b> {data.main?.pressure} mb</div>  
      <br /><br /><br />

    <button onClick={() => setRed(!red)}>Degrees °F/°C </button> 


    </div>
  )
}

export default App
