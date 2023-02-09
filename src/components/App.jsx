import {Component } from 'react'
import Searchbar from './Searchbar/Searchbar'


export class App extends Component {
  state = {
    query: '',
  };

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