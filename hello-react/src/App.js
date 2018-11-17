import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"


  },

  {
    title: "Full Metal Jacket",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
            {movies.map((movie, index)=> {
              return <Movie title={movie.title} poster={movie.poster} key={index}/>
            })}            
      </div>
    );
  }
}

export default App;
