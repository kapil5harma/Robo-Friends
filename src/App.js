import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
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
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
