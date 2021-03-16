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
    <div>
      {counter.error}
      <form onSubmit={HandleSubmit}>
        <h1>Register here</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={handleChangeInput}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={handleChangeInput}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChangeInput}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
