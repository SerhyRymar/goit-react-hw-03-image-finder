import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {

    state = {
        query: '', 
  };

    render() {
      
    return (
      <header className={css.searchbar}>
        <form className={css.search_form}>
          <button type="submit" className={css.search_form_button}>
            <span className={css.search_form_label}>
              Search
            </span>
          </button>

          <input
            className={css.search_form_input}
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