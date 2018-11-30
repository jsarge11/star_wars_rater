import React, { Component } from 'react';
import logo1 from './assets/starwars.png'
import logo2 from './assets/movierater.png'
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    films: []
  }
  componentDidMount() {
    Axios.get('https://swapi.co/api/films').then((res) => {
      this.setState({ films: res.data.results })
    })
  }
  render() {
    let films = this.state.films.map(item => {
      return (
        <div key={item.title}>
          {item.title}
        </div>
      )
    })
    return (
      <div className="App">
        <img src={logo1} alt="star wars text"/>
          <br/>
        <img src={logo2} alt="move rater text"/>

        {films}
      </div>
    );
  }
}

export default App;
