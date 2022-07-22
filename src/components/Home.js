import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='fixed-top bg-dark' style={{ width: '100%', height: '100%',marginTop:'100px' }}>
            <div className='App '>
                <h1 className='text-info' style={{ paddingTop: '330px',fontSize:'150px'}}>Welcome To Chat App</h1>
            </div>
        </div>
    );
};
export default Home;