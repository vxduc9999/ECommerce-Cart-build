import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import { isValid, isEmail, isLength, isMatch } from "../../utils/validation";
import axios from "../../redux/configAxios";

// Actions
import { getRegister } from "../../redux/actions/authActions";

const RegisterScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const test = useSelector((state) => state.getRegister);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(getRegister(email, password, confirmPassword));
  };

  const [user, setUser] = useState("");
  const { email, password, confirmPassword, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  let counter = useSelector((state) => state.register);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isValid(password))
      return setUser({
        ...user,
        err: "Invalid Password",
        success: "",
      });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, confirmPassword))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    await dispatch(getRegister(email, password));
    console.log(counter);
    setUser({ ...user, err: counter.error, success: counter.message });
  };

  return (
    <div id="container">
      <div class="form-container1 ">
        {counter.error}
        <form onSubmit={HandleSubmit} class="sign-up-container form">
          <h1 class="title">Sign Up</h1>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChangeInput} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChangeInput} />
          </div>
          <div class="input-field">
            <i class="fas fa-check-circle"></i>
            <input type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChangeInput} />
          </div>
          <button className="button" type="submit">Sign Up</button>
          <p class="social-text">Or sign up with social platforms</p>
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

export default RegisterScreen;
