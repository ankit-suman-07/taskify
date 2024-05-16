import React, { useState } from 'react';
import Home from './pages/home/Home';
import Authentication from './pages/auth-page/Authentication';

const App = () => {
  const [user, setUser] = useState(false);



  return (
    <div>
      {
        user
          ? <Home />
          : <Authentication />
      }
    </div>
  )
}

export default App