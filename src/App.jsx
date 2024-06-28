import React from 'react';
import '/App.css';
import { FaGooglePlay } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <div className="title">Qride</div>
      <div className="download-section">
        <a href="https://play.google.com/store" className="download-button">
          Descargue aquí <FaGooglePlay />
        </a>
      </div>
    </div>
  );
}

export default App;
