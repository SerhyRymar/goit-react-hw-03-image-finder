import {Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import * as API from './Api'


export class App extends Component {
  state = {
    page: 1,
    query: '',
    item: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      items: [],
    });
    e.target.reset();
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
        <Searchbar onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}