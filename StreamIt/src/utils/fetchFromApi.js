const axios = require('axios');
const Base_url='https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: Base_url,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': "ee01382211mshad06df5bbd1290dp111325jsn654c04de6d80",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi=async (url)=>{
    try {
        const {data} = await axios.request(`${Base_url}/${url}`,options);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        return [];
    }
}
