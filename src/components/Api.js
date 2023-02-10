import axios from 'axios';

// const API_KEY = '32160285-f1ddcc5bb333b538ce7462252';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPictures = async (query, page) => {
    const response = await axios.post('/materials', query, page);
    return response.data
}
// export const getPictures = async (query, page) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const PICTURES =
//     'q=${query}&page = ${page}&key=32160285-f1ddcc5bb333b538ce7462252&image_type=photo&orientation=horizontal&per_page=12';
//   const response = await axios.get(`${BASE_URL}/?${PICTURES}`);
//   return response.data;
// };


