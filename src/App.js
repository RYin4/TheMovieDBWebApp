import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [{
      id: 0, 
      poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      overview: "As the avengers and their"
    },
    {
      id: 1, 
      poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "The Avengers",
      overview: "This is my second overview"
    }
  ]



    let movieRows = [];
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="150" src={movie.poster_src}></img>

            </td>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
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
