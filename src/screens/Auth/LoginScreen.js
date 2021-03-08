import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={(e) => loginHandler(e)}>
        <h1>Login here</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
