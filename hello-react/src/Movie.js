import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  static propTypes = {
  	title: propTypes.string.isRequired,
  	poster: propTypes.string.isRequired
  }

  render() {
    return (
      <div>
          <MoviePoster poster={this.props.poster}/>
          <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  
  static propTypes = {
  	poster: propTypes.string.isRequired
  }
  render() {
    return (
      	<img src={this.props.poster} />	
    );
  }
}

export default Movie;
