import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './Auth/Login';
import UserContext from './context/UserContext';
import SignUp from './Auth/Signup';
import ChatPanel from './components/app/Chatpanel';


function App() {

    /**
     * State
     */
    const [userData, setUserData] = useState('');
    //console.log('userData',userData);
    return (
        <div className='App'>
            {/* 
                UserContext.provider using as a wrapper to access the props value of this in childrens components .
            */}
            <UserContext.Provider value={{ userData, setUserData }}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route exact path='/home' element={userData === '' ? (<Login />) :(<Home />)} />
                        <Route exact path='/chat' element={userData === '' ? (<Login />) :(<ChatPanel />)} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </Router>
            </UserContext.Provider>
        </div>
    );
}
export default App;