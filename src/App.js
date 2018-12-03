import React, { Component } from 'react';
import logo1 from './assets/starwars.png'
import logo2 from './assets/movierater.png'
import { DragDropContext, Droppable} from 'react-beautiful-dnd'
import './App.css';
import Axios from 'axios';
import Movie from './components/Movie';

class App extends Component {
  state = {
    films: []
  }
  componentDidMount() {
    console.log('mounted');
    Axios.get('https://swapi.co/api/films').then((res) => {
      this.setState({ films: res.data.results })
    })
  }
  onDragEnd = result => {
    const  {destination, source} = result;
    let { films } = this.state;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    let tempFilm = films[source.index]
    let newFilmArr = films.slice();
    newFilmArr.splice(source.index, 1);
    newFilmArr.splice(destination.index, 0, tempFilm);
    this.setState({ films: newFilmArr });

  }
  render() {
    let films = this.state.films.map((item, index) => {
      return (
        <div key={item.episode_id} id="movie-list-wrapper">
          <Movie item={item} index={index} />
        </div>
      )
    })
    return (
      <div className="App">
        <img src={logo1} alt="star wars text"/>
          <br/>
        <img src={logo2} alt="move rater text"/>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable-1">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {provided.placeholder}
                {films}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
