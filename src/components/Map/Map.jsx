import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import EditLocation from '@material-ui/icons/EditLocation';
import useStyles from './style'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';





const Map = ({ setCoordinates, coordinates, setBounds, places,setChildClick }) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2hhaGluc2hhaGkiLCJhIjoiY2w1YjZuaTZqMDRtaDNjbzJqdjQ4MW16MCJ9.g9YsVFRAZ1MUF77faFpS4Q'
  });
  const classes = useStyles()
  const isDescktop = useMediaQuery('min-width:600px')


  return (

    <div className={classes.mapContainer}>

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '105vh',
          width: '100vw'
        }}
        defaultCenter={coordinates}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClick(child)}
        center={coordinates}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature
          />
          {places?.map((place, index) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.location)}
              lng={Number(place.location)}
              key={index}
            >
              {isDescktop ? (
                <EditLocation color='primary' fontSize='large' />
              ) : <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                />
                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
              </Paper>
              }
            </div>
          ))}
        </Layer>
      </Map>

    </div>
  )
}

export default Map