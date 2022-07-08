import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import useStyles from './style'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';





const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2hhaGluc2hhaGkiLCJhIjoiY2w1YjZuaTZqMDRtaDNjbzJqdjQ4MW16MCJ9.g9YsVFRAZ1MUF77faFpS4Q'
  });
  const classes = useStyles()
  const isMobile = useMediaQuery('min-width:600px')


  return (

    <div className={classes.mapContainer}>

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            options={''}
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={''} />
        </Layer>
      </Map>

    </div>
  )
}

export default Map