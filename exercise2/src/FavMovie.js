import React, { Component } from 'react';

class App extends Component {
  getUserMovieMap() { 
    const userMovieMap = [];
    for ( const movie of Object.values(this.props.movies)) {
      const userMovies = this.props.profiles.filter(
        profile => profile.favoriteMovieID === String(movie.id)).map(p => this.props.users[p.userID].name);
      
      const movieName = movie.name;
      userMovieMap.push({movieName, userMovies})
    }
    return userMovieMap;
  }
  
  render() {
    
    return (
      <div> 
      {
        this.getUserMovieMap().map((movie) => ( 
      	<div key={movie.movieName}>
      	<h2>{movie.movieName}</h2>
		{
          movie.userMovies.length > 0? 
          	<div>
              <p>Liked By:</p>
              <ul>
              {movie.userMovies.map(userName => <li key={userName}>{userName}</li>)}
              </ul>
			</div>:
			<p>None of the current users liked this movie</p>
        }
      	</div>
      ))}
  	  </div>
    );
  }
}

export default App;