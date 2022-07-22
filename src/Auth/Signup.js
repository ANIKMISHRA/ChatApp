import React, {useState} from 'react';
import axios from 'axios';

/**
 * 
 * @returns 
 */
const SignUp = () => {

    /**
     * State
     */

    const [user, setUser] = useState({
        fullname:'',
        email:'',
        password:''
    });

    /**
     * on submit event submitSignupForm will be execute and post the user data in json's users object.
     * @param {object} event 
     */

    const submitSignupForm = async(event) => {
        event.preventDefault();
        await axios.post('http://localhost:8000/users',user).then(() => {
            alert('Registration Successfully Done');
        });
    };

    /**
     * on change event inputHandler function will handle the state.
     * @param {object} event 
     */

    const inputHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    return (
        <div>
            <h1 className='mt-5'>USER SIGNUP</h1>

            {/* User SignUp Form */}

            <form className='container mt-5 bg-light' action='' onSubmit={submitSignupForm} style={{width:'500px',fontSize:'21px',textAlign:'left'}}>

                {/* User Full Name */}

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" name='fullname' className="form-control" id="exampleInputfullname" 
                        value={user.fullname} onChange={inputHandler}
                    />
                </div>

                {/* User Email Address */}

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" 
                        value={user.email}  onChange={inputHandler}
                    />
                </div>

                {/* Password */}

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1"
                        value={user.password} onChange={inputHandler}
                    />
                </div>

                {/* SignUp Button */}
                <button type="submit" className="btn btn-info mt-3 mx-5">SignUp</button>
            </form>
        </div>
    );

};
export default SignUp;