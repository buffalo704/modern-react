import axios from 'axios';

export const searchImages = async (term:string) => {
  const response = await axios.get('http://localhost:8080/search/photos', {
    headers: {
      Authorization: 'Client-ID'
    },
    params: {
      query: term
    }
  });
  return response.data.results;
}
