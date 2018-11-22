import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Movie.css';


class Movie extends Component {

    static propTypes={
        title: Proptypes.string,
        poster: Proptypes.string
    }
    render() {
        return ( 
        <div>
            < MoviePoster poster={this.props.poster}/>
            <h1> {this.props.title} </h1>
        </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}/>
        );
    }
}
export default Movie;