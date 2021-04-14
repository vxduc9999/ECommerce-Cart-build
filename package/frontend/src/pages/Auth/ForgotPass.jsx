import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { getForgotPassword } from "../../redux/actions/authActions";

const ForgotPass= (props) =>{
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  let history = useHistory();
  const sendHandler = (e) => {
    history.push('/import-code');
    e.preventDefault();
    dispatch(getForgotPassword(email));
  };

    return (
        <div class="container" id="container">
        <div class="form-container ">
            <form onSubmit={(e) => sendHandler(e)} class="forgot-container form">
                <h1 class="title">Forgot Password</h1>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button  className="button" type="submit">Send</button>
            </form>
        </div>
    </div>
    );
}

export default ForgotPass;