import React from 'react';
import './MovieDetail.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './DetailMedia.css'

const MovieDetail = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  if (!movie) return <Loading/>;

  const {
    Title,
    Poster,
    Plot,
    Genre,
    Director,
    Actors,
    Year,
    Runtime,
    imdbRating,
  } = movie;

  return (
    <div className="movie-detail">
      <div className="backdrop">
        <img src={Poster} alt={Title} className="poster-bg" />
        <div className="overlay" />
      </div>

      <div className="movie-content">
        <div className="poster-main">
          <img src={Poster} alt={Title} />
        </div>

        <div className="details">
          <h1>{Title} <span>({Year})</span></h1>
          <p className="tagline">{Genre} • {Runtime} • ⭐ {imdbRating}</p>
          <p className="plot">{Plot}</p>
          <p><strong>Director:</strong> {Director}</p>
          <p><strong>Cast:</strong> {Actors}</p>
          <button  onClick={()=>navigate(-1)} >GO Back</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
