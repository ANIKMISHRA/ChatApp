import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';


/**
 * 
 * @returns 
 */
const Login = () => {

    const navigate = useNavigate();
    
    /**
     * setUserData storing the datails of login user
     */

    const { setUserData } = useContext(UserContext);

    /**
     * state
     */

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    /**
     * on change event this function will handle the changes of input boxes. 
     * @param {Object} event 
     * setUser function is used to update the current state's value through below process.
     */

    const inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    /**
     * on submit event submitLoginForm () will be execute and set user state data in setUserData.
     * @param {object} event 
     */

    const submitLoginForm = async (event) => {
        event.preventDefault();
        axios.get('http://localhost:8000/users').then(res => {
           const userList = res.data;
           //console.log('userLIst',userList)
           let method = userList.find(o => o.email === user.email && o.password === user.password);
           //console.log('method',method);
           setUserData(method);
           setUser({...user,email:'',password:''})
           navigate('/home');
        });
        


    };
    return (
        <div>
            <h1 className='mt-5'>USER LOGIN</h1>

            {/* User Login Form */}

            <form className='container mt-5 bg-light' action='' onSubmit={submitLoginForm} style={{ width: '500px', fontSize: '21px', textAlign: 'left' }}>

                {/* User Email */}

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1"
                        value={user.email} onChange={inputHandler}
                    />
                </div>

                {/* User Password */}

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1"
                        value={user.password} onChange={inputHandler}
                    />
                </div>

                {/*Login Button  */}

                <button type="submit" className="btn btn-info mt-3 mx-5">Login</button>
            </form>
        </div>
    );
};
export default Login;