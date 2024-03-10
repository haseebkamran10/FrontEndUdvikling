import React from 'react';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Only render the Header component */}
    </div>
  );
}

export default App;
