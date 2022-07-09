import axios from "axios";


const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (location) => {
  try {
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: location.lat,
        bl_longitude: location.lng,
        tr_longitude: location.lng,
        tr_latitude: location.lat,
      },
      headers: {
        'X-RapidAPI-Key': '079e150c67mshe04008bbadb9cb8p1429bajsnb83adbde9277',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    return data
  }
  catch (error) {
    console.log(error)
  }
}