import axios from "axios";
import {useState, useEffect} from "react"

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: "http://localhost:5000/country",
    }
    axios.request(options)
    .then(function (response) {
        setData(response.data.data)
    })
    .catch(function (error) {
        console.error(error);
    })  
  }, [])

  console.log(data)

  return (
    <main className="App">
    <h1>How to Create a Backend Proxy Server for Your API Keys</h1>
     {data && data.map((result)=>(
      <section key ={result.id}>
        <h4>Name:{result.name}</h4>
        <p>Population:{result.population}</p>
        <p>Region:{result.region}</p>
        <p>Latitude:{result.latitude}</p>
        <p>Logtitude:{result.longitude}</p>
      </section>
    ))} 
    </main>
  )
}
export default App;
