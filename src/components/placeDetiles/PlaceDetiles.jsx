import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';

const PlaceDetiles = ({ place }) => {
  const classes = useStyles();
  // if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
 

  return (

    <h1>{place.name}</h1>
  );
}
export default PlaceDetiles