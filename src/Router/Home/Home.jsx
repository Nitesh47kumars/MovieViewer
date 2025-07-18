import React from 'react';
import './Home.css'
import './HomeMedia.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='home-container'>
        <img src='/bg_image.jpg' alt='png'/>
        <div className='home-overlay' />
        <div className='home-content'>
          <div className='main-content'>
            <h1>Watch Your Favourite<br/> Movies & Web Series</h1>
            <button onClick={()=>navigate('/movies')}>Watch Now!</button>
          </div>
          <div className='main-img'>
            <img src='/front.png' alt='image'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
