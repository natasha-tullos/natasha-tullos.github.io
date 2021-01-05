import React from 'react';

import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="errorContainer">
      <h1>404</h1>
      <h3>Sorry, the page you are looking for cannot be found.</h3>
      <a href="/" className="button b-pink">Return Home</a>
    </div>
  )
}

export default NotFoundPage;