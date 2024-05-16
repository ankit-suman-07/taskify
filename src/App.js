import React, { useState } from 'react';
import "./App.css";
import Home from './pages/home/Home';
import Authentication from './pages/auth-page/Authentication';

const App = () => {
  const [user, setUser] = useState(false);



  return (
    <div className='App' >
      {
        user
          ? <Home />
          : <Authentication />
      }
    </div>
  )
}

export default App