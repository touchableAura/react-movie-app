import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css' 
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');



  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=65539b08`
    
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson)

    if(responseJson.Search) 
    {
      setMovies(responseJson.Search)
    } 
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  }

  const addFavouriteMovie = (movie) => 
  {
    const newFavouriteList = [movie, ...favourites];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='container-fluid movie-app d-flex flex-column justify-content-start' style={{ height: '100vh' }}>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
        />
      </div>
      <div>
      <MovieListHeading heading='Favourites' />
      </div>
      <div className='row'>
        <MovieList 
          movies={favourites} 
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
