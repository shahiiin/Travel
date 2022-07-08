import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetiles from '../placeDetiles/PlaceDetiles.jsx';

import useStyles from './style.js';



const List = () => {

  const [type, setType] = useState('restorant');
  const [rating, setRating] = useState()
  const places = [
    { name: 'Cool place' },
    { name: 'Best Bear' },
    { name: 'Good steak' },
    { name: 'Cool place' },
    { name: 'Best Bear' },
    { name: 'Good steak' },
    { name: 'Cool place' },
    { name: 'Best Bear' },
    { name: 'Good steak' }
  ]

  const classes = useStyles();


  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid key={i} item xs={12}>
            <PlaceDetiles place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List