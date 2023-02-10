import {Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import * as API from './Api'


export class App extends Component {
  state = {
    query: [],
  };

  async getPictures(query, page) {
    const picture = await API.getPictures(query, page);
    console.log(picture);
}

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar
        />
      </div>
    );
  }
}