import { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from './api'



const App = () => {

  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords)
      setCoordinates({ lat:coords.latitude,lng: coords.longitude });
      
    });
  }, []);

  useEffect(() => {
    getPlacesData(coordinates)
      .then((data) => {
        setPlaces(data)
        console.log(data,'aa')
      })
  }, [bounds, coordinates])

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
