import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';
import axios from 'axios';
import UserContext from '../../context/UserContext';

/**
 * 
 * @returns 
 */
const ChatPanel = () => {
    
    const isLogin = useContext(UserContext);

    /**
     * state 1 - for getting comments list in array.
     */

    const [posts, setPosts] = useState([]);

    /**
     * state 2 - for posting user data in the form of object in json
     */

    const [user, setUser] = useState({
        comment: '',
        user_id: isLogin.userData.id
    });

    /**
     * this function wil handle the changes of comment box. 
     * @param {Object} event 
     * setUser function is used to update the current state's value through below process.
     */

    const handleInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

     /**
     * useEffect Hook tell the react what to do after render.
     */

      useEffect(() => {
        commentData();
    }, []);


    /**
     * commentData function to get listing of comments and after condition resolve store listing in state -2 (posts).
     */

     const commentData = () => {
        axios.get('http://localhost:8000/comments').then(res => {
            //console.warn('UserList', res);
            setPosts(res.data);

        });
    };

    /**
     * on submit form event  submitComment function will be execute and post user data.
     * @param {object} event 
     */
    const submitComment = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/comments', user).then(() => {
            commentData();
            setUser({...user,comment:''})
        });
    };

    
    // Return function.

    return (
        <div>
            <div id="app">

                <div className="container" style={{ marginTop: '80px', marginLeft: '320px' }}>

                    <div className="row" id="comment">
                        <div className="col-md-12 mx-auto">

                            <div className="card">
                                <div className="card-header text-center">
                                    <b><span>Leave Your Comment Here</span></b>
                                </div>
                                <div className="card-body chat-care">

                                    {/* 
                                     * calls a defined callbackfn on each element of an array and returns a new array that
                                        contains results

                                        @param - callbackfunction
                                     */}

                                    {posts.map(post => {
                                        return (
                                            <ul className="chat" key={post.id}>

                                                {/* Here using ternary operator */}

                                                {post.user_id === isLogin.userData.id ? (

                                                    // it's admin detail based on above condition.

                                                    <li className="admin clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header clearfix">
                                                                <small className="left text-muted">
                                                                    <span className="glyphicon glyphicon-time"></span>just now</small>
                                                                <strong className="right primary-font">Admin</strong>
                                                            </div>
                                                            <p>
                                                                {post.comment}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ) : (

                                                    // Your Oponent user detail.

                                                    <li className="agent clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header clearfix">
                                                                <strong className="primary-font">Rahul</strong>
                                                                <small className="right text-muted">
                                                                    <span className="glyphicon glyphicon-time">
                                                                    </span>just now</small>
                                                            </div>
                                                            <p>
                                                                {post.comment}
                                                            </p>
                                                        </div>
                                                    </li>

                                                )}
                                            </ul>
                                        );
                                    }
                                    )}
                                </div>
                                <div className="card-footer">
                                    <div className="input-group">

                                        {/*User Comment Form  */}

                                        <form onSubmit={submitComment} className="form-horizontal post-comment-form" method="post"
                                            action="http://localhost/world-of-cultures/public/clientmeet/comment/10"
                                            encType="multipart/form-data">

                                            {/*User Comment Inputbox  */}

                                            <input id="btn-input" onChange={handleInput} type="text" value={user.comment} name="comment"
                                                className="form-control input-sm" placeholder="Type your message here..." />

                                            {/* Comment send button */}

                                            <span className="input-group-btn">
                                                <button type="submit" className="btn btn-primary post-comment-btn"
                                                    id="btn-chat">Send</button>
                                            </span>

                                            {/*Getting User's User id from localstorage  */}

                                            <span className='mt-3'>
                                                <p>User_id{user.user_id}</p>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChatPanel;