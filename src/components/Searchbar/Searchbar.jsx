import { Component } from 'react';
import PropTypes from 'prop-types';

// import axios from 'axios';

// const API_KEY = '32160285-f1ddcc5bb333b538ce7462252';

// export const getPictures = async (query, page) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const PICTURES =
//     'q=${query}&page = ${page}&key=32160285-f1ddcc5bb333b538ce7462252&image_type=photo&orientation=horizontal&per_page=12';
//   const response = await axios.get(`${BASE_URL}/?${PICTURES}`);
//   return response.data;
// };


export class Searchbar extends Component {

    state = {
        query: '', 
  };

    render() {
      
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;