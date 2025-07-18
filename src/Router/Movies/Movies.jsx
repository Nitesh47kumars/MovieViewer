import React from 'react'
import {useLoaderData, useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard';
import './Movies.css'
import './MoviesMedia.css'

const Movies = () => {
  const movies = useLoaderData();
  return (
    <>
    {movies && (
        <ul className='movies-container'>
          {movies.map((curr)=>{
            return <MovieCard key={curr.imdbID} curr={curr}/>
          })}
        </ul>
    )}
    </>
  )
}

export default Movies
