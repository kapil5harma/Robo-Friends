import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  };

  onSearchChange = event => {
    // console.log('event: ', event);
    // console.log('event.target.value: ', event.target.value);
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    // console.log('filteredRobots: ', filteredRobots);
    // let filteredRobots = null;
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
