import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getImportCode } from '../../redux/actions/authActions';

const ImportCode= (props) =>{
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  let history = useHistory();
  const sendHandler = (e) => {
    history.push('/changepassword');
    e.preventDefault();
    dispatch(getImportCode(code));
  };

    return (
        <div class="container" id="container">
        <div class="form-container ">
            <form onSubmit={(e) => sendHandler(e)} class="forgot-container form">
                <h1 class="title">Enter Code</h1>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.target.value)} />
                </div>
                <button  className="button" type="submit">Send</button>
            </form>
        </div>
    </div>
    );
}

export default ImportCode;