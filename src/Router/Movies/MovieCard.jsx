import React from 'react'
import './Movies.css'
import { NavLink } from 'react-router-dom';

const MovieCard = ({curr}) => {
    const {imdbID,Poster,Title,Type,Year} = curr;

  return (
        <li className="movie-card">
            <div className='movie-img'>
                <img src={Poster} alt={Title} />
            </div>
            <div className='movie-details'>
                <div>
                    <h1>{Title}</h1>
                    <p>Year: {Year}</p>
                </div>
            <div className='watch-btn'>
                <NavLink to={`/movies/${imdbID}`}>
                    <button>Watch Now</button>
                </NavLink>
            </div>
            </div>
        </li>
    )
}

export default MovieCard
