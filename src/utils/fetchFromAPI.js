import axios from "axios";

const API_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    url:API_URL,
    params:{
        maxResults:"50"
    },
    headers:{
        'X-RapidAPI-Key':"1c4ead202emshc1b3af6dabf55b8p1c9da2jsn48e66365984d",
        'X-RapidAPI-Host':
        'youtube-v31.p.rapidapi.com' 
    }
};
export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${API_URL}/${url}`,options);
    return data;
};