import React from 'react';
import { useNavigate } from 'react-router-dom';
import img_404 from '../../assets/images/404-error.jpg';
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate();

  const handleTakeMeHome = () => {
    navigate('/');
  };

  return (
    <div className="wrapper-notfound">
      <main>
        <img className="image" src={img_404} alt="404 error" />

        <button className="btn-yellow" onClick={handleTakeMeHome}>
          Take me home
        </button>
      </main>
    </div>
  );
};

export default NotFound;
