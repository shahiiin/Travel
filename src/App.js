import { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from './api'



const App = () => {

  const [places, setPlaces] = useState([])
  const [childClick, setChildClick] = useState(null)
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });

    });
  }, []);

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(coordinates)
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
        console.log(data, 'aa')
      })
  }, [bounds, coordinates])

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List 
          places={places} 
          childClick={childClick}
          isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={places}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
