import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title : "해리포터",
    poster : "https://jjhsscholar.files.wordpress.com/2017/07/kakaotalk_20170802_233656442.jpg"
  },
  {
    title : "반지의 제왕",
    poster : "http://extmovie.maxmovie.com/xe/files/attach/images/1113733/958/264/003/63d6fc64785724e3e508c95fba8c8b0e.jpg"
  },
  {
    title : "호빗",
    poster : "http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1221/IE001784617_STD.jpg"
  },
  {
    title : "왕좌의 게임",
    poster : "http://www.joongboo.com/news/photo/201609/1105385_1014162_2531.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}  
      </div>
    );
  }
}

export default App;
