import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import CheapCost from "./CheapCost";
import LoginForm from "./LoginForm";
import Solution from "./Solution";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrortext] = useState('');
  const getMoviesHandler = async () => {
    try{
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();
      const formatedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });
      setMovies(formatedMovies);
    } catch(error) {
      setErrortext("Something went wrong: " + error.toString())
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading&&<p>Loading...</p>}
        {<MoviesList movies={movies} />}
        {errorText&&<p>{errorText}</p>}
        <CheapCost />
        <LoginForm />
        <Solution />
      </section>
    </React.Fragment>
  );
}

export default App;
