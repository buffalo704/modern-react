import axios from 'axios';

export const searchImages = async (term:string) => {
  // https://api.unsplash.com/search/photos
  const response = await axios.get('http://localhost:8080/search/photos', {
    headers: {
      Authorization: 'Client-ID IjQNL8lERKQibY1zxzHugSJhgM3DfZWiGpzahAIpU_E'
    },
    params: {
      query: term
    }
  });
  return response.data.results;
}
