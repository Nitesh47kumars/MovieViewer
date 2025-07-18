import React from 'react';
import {useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  if (error.status) {
    return (
      <div className="error-page">
        <div className="error-box">
          <h1 className="error-code">
            {error.status}: {error.statusText}
          </h1>
          <p className="error-message">{error.data || "Something went wrong."}</p>
          <button onClick={()=>navigate(-1)} className="error-home-link">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="error-page">
      <div className="error-box">
        <h1 className="error-code">Something went wrong</h1>
        <p className="error-message">An unexpected error occurred.</p>
      </div>
    </div>
  );
  
};

export default ErrorPage;
