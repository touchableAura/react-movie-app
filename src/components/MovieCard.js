import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard() {
  return (
  )
}

{props.movies.map((movie, index) => (
	<div className='image-container d-flex m-3'>
		<h2>{movie.Title}</h2>
		<h3>Released in {movie.Year}</h3>
		
		<img src={movie.Poster} alt='movie'></img>
		<div
			onClick={() => props.handleFavouritesClick(movie)}
			className='overlay d-flex align-items-center justify-content-center'
		>
			<FavouriteComponent />
		</div>
	</div>
))}


	

export default MovieCard;



const Card = (props) => {
	const CardInfo = props.cardInfo;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex m-3'>
                    <h2>{movie.Title}</h2>
                    <h3>Released in {movie.Year}</h3>
                    
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;