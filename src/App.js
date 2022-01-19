
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    axios.get("http://api.openbrewerydb.org/breweries?by_city=" + city)
      .then(res => {
        console.log(res);
        setBreweries(res.data);
      })
      .catch(err => console.log(err))
  }, [city])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // fetch("http://api.openbrewerydb.org/breweries?by_city="+city)
    //   //parse through as real info
    //   .then(res => res.json())
    //   //takes info into console
    //   .then(res => {
    //     console.log(res);
    //     setBreweries(res);
    //   })
    //   //
    //   .catch(err => console.log(err))

    // axios.get("http://api.openbrewerydb.org/breweries?by_city=" + city)
    //   .then(res => {
    //     console.log(res.data);
    //     setBreweries(res);
    //   })
    //   .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Search for beer</h1>
      <form onSubmit={onSubmitHandler}>
        <select onChange={(event) => setCity(event.target.value)}>
          <option value="cleveland">Cleveland</option>
          <option value="chicago">Chicago</option>
          <option value="nashville">Nashville</option>
          <option value="canton">Canton</option>
        </select>

      </form>


      <ul>
        {
          breweries.map((brewery, i) => {
            return <li key={i}><a href={brewery.website_url}>{brewery.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

