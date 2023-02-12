import axios from 'axios';

// З відео Репети

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPictures = async (query, page) => {
  const API_KEY = '32160285-f1ddcc5bb333b538ce7462252';
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};


// Приклад з домашки по JS 

// export async function fetchPictures(name, page) {
//   const params = new URLSearchParams({
//     key: '32160285-f1ddcc5bb333b538ce7462252',
//     q: name,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 40,
//     page,
//   });

//   try {
//     const response = await axios({
//       method: 'get',
//       url: `https://pixabay.com/api/?${params}`,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }



