import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log("This is my initializer")

  //   const movies = [{
  //     id: 0, 
  //     poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  //     title: "Avengers: Infinity War",
  //     overview: "As the avengers and their"
  //   },
  //   {
  //     id: 1, 
  //     poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  //     title: "The Avengers",
  //     overview: "This is my second overview"
  //   }
  // ]



  //   let movieRows = [];
  //   movies.forEach((movie) => {
  //     console.log(movie.title)
  //     const movieRow = <MovieRow movie={movie} />
  //     movieRows.push(movieRow)
  //   })

  //   this.state = {rows: movieRows}
  // 

  this.performSearch();

  }

  performSearch() {
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=c261880f23d34ae50288c921b209df51"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults);
        const results = searchResults.results;
        console.log(results[0])


        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = 
          console.log(movie.title);
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }



  render() {
    return (
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src="theMovieDBIcon.png"></img>
              </td>
              <td width="8"/>
              <td>
                <h3>The Movie Database Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter search" style={{
          fontSize:24,
          display: 'block',
          width: "100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 15
        }}/> 

        {this.state.rows}


        
  
       
      </div>
    );
  }
}

export default App;
