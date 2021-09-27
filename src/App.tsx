import React from 'react';
import myPhoto from './images/MainPhoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Lol kek cheburek</h1>
        <header className="App-header">
        <img src={myPhoto} className="Main-photo" alt="photo" />
          <p>
              That's my site.
          </p>
      </header>
    </div>
  );
}

export default App;
