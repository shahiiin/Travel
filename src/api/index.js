import axios from "axios";


const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
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