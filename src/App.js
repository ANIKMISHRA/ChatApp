import React, { useMemo, useState } from 'react';
// Package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './View/Navbar';
import Home from './View/Home';
import Login from './View/Login';
import UserContext from './Context/Auth';
import SignUp from './View/SignUp';
import ChatPanel from './View/Dashboard';

// Styles
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // userData state store login user's detail
  const [userData, setUserData] = useState('');

  // useMemo hook stop the rerendring of again
  const userAuthData = useMemo(() => ({
    userData, setUserData,
  }));
  return (
    <div className="App">

      {/* UserContext.provider using as a wrapper to access
      the props value of this in childrens components . */}
      <UserContext.Provider value={userAuthData}>
        <Router>
          <Navbar />
          <Routes>
            {/* Route path for the components */}
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={userData === '' ? (<Login />) : (<Home />)} />
            <Route exact path="/chat" element={userData === '' ? (<Login />) : (<ChatPanel />)} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
};
export default App;
