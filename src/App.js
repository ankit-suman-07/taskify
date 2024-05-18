import React, { useState } from 'react';
import "./App.css";
import Home from './pages/home/Home';
import Authentication from './pages/auth-page/Authentication';
import { AuthProvider } from './context/authContext';
import SignIn from './pages/auth-page/sign-in/SignIn';
import SignUp from './pages/auth-page/sign-up/SignUp';
const App = () => {
  const [user, setUser] = useState(false);



  return (
    <div>
      {/* <Authentication /> */}
      <Home />
    </div>

    // <div className='App' >
    //   {
    //     user
    //       ? <Home />
    //       : <Authentication />
    //   }
    // </div>
  )
}

export default App