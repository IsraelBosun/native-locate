import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
// const API_KEY="AIzaSyAPHv9c94_dp0SWnL9RyS8iw_B5w1EbINQ"
const API_KEY=process.env.EXPO_PUBLIC_GOOGLE_API


const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
    "/nearbysearch/json?"+
    "&location="+lat+","+lng+"&radius=1500&type="+type
    +"&key="+process.env.EXPO_PUBLIC_GOOGLE_API)


    const searchByText=(searchText)=>axios.get(BASE_URL+
        "/textsearch/json?query="+searchText+
  "&key="+process.env.EXPO_PUBLIC_GOOGLE_API)

export default{
    nearByPlace,
    searchByText
}