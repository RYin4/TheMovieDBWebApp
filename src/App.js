import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch();
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=c261880f23d34ae50288c921b209df51&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults);
        const results = searchResults.results;
        console.log(results[0])

        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          // console.log(movie.poster_path);
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this;
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
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
        }}onChange={this.searchChangeHandler.bind(this)}/> 
        {this.state.rows}
      </div>
    );
  }
}

export default App;
