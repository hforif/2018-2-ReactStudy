//import React, { Component } from 'react';
import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';
/*
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
      	<img src={this.props.poster} alt="MoviePoster"/>	
    );
  }
}
*/
function Movie({title, poster, genres, synopsis}){
	return(
		<div className="Movie">
		  <div className="Movie_columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie_columns">
        <h1>{title}</h1>
        <div className="Movie_genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Movie_synopsis">
          {synopsis}
        </p>
      </div>
    </div>
	);
}

function MovieGenre({genre}){
	return(
	  <span className="Movie_genres"> {genre} </span>
	);
}

function MoviePoster({poster, alt}){
	return(
	  <img src={poster} alt={alt} title={alt} className="Movie_poster"/>	
	);
}

MoviePoster.propTypes ={
	poster: propTypes.string.isRequired,
  alt : propTypes.string.isRequired
}

Movie.propTypes ={
	title: propTypes.string.isRequired,
	poster: propTypes.string.isRequired,
	genres: propTypes.array.isRequired,
	synopsis: propTypes.string.isRequired
}

MovieGenre.propTypes ={
	genre: propTypes.string.isRequired
}

export default Movie;
