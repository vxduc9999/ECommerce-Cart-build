import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { getChangePassword } from "../../redux/actions/authActions";

const ChangePassword= () =>{
  const [password, setPass] = useState("");
  console.log(`🚀 => file: ChangePassword.jsx => line 10 => password`, password)
  const [confimPassword, setConfimPass] = useState("");
  console.log(`🚀 => file: ChangePassword.jsx => line 11 => confimPassword`, confimPassword)

  const dispatch = useDispatch();

  let history = useHistory();
  const sendHandler = (e) => {
    
  console.log(`🚀 => file: ChangePassword.jsx => line 23 => e`, e)
    e.preventDefault();
    dispatch(getChangePassword(password,confimPassword));
    history.push('/');
  };

    return (
        <div class="container" id="container">
        <div class="form-container ">
            <form onSubmit={(e) => sendHandler(e)} class="forgot-container form">
                <h1 class="title">Change Password</h1>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPass(e.target.value)} />
                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="password"
              placeholder="Confim Password"
              value={confimPassword}
              onChange={(e) => setConfimPass(e.target.value)} />
                </div>
                <button className="button" type="submit">Reset</button>
            </form>
        </div>
    </div>
    );
}

export default ChangePassword;