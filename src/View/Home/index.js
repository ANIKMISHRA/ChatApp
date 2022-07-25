import React from 'react';

// css file import from node modules
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 *This componet will show the simple view page after login
 * @returns node
 */
const Home = () => (
  <div className="fixed-top bg-dark" style={{ width: '100%', height: '100%', marginTop: '100px' }}>
    <div className="App ">
      <h1 className="text-info" style={{ paddingTop: '330px', fontSize: '150px' }}>Welcome To Chat App</h1>
    </div>
  </div>
);
export default Home;
