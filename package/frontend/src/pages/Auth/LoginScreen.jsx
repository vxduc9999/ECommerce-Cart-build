import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import "./auth.style.css"

// Actions
import { getLogin } from "../../redux/actions/authActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let history = useHistory();
  const loginHandler = (e) => {
    e.preventDefault();
    history.goBack();
    dispatch(getLogin(email, password));
  };

  return (
    <div id="container">

      <div class="form-container ">
        <form onSubmit={(e) => loginHandler(e)} class="sign-in-container form">
          <h1 class="title">Sign in</h1>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <a href="#">Forgot your password?</a>
          <button className="button" type="submit">Sign In</button>
          <p class="social-text">Or login using other social platforms</p>
          <div class="social-container">
            <a href="https://www.facebook.com/" class="social" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" class="social" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://ads.google.com/" class="social" target="_blank">
              <i class="fab fa-google"></i>
            </a>
            <a href="https://instagram.com/" class="social" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>

    </div>

  );
};

export default LoginScreen;
