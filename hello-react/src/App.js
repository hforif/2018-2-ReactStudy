import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    
  }
 
  componentWillMount(){
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
      
          },
        
          {
            title: "Full Metal Jacket",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
          },
          {
            title:"Transformer",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          }
        ]
             })  
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index)=> {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })    
   return movies 
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}            
      </div>
    )
  }
}

export default App;
