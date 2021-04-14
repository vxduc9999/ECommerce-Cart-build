import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { getVerifyEmail } from "../../redux/actions/authActions";

const VertifyActiceScreen = (props) => {
  const history=useHistory();
  const dispatch = useDispatch();

  const HandleSubmit = async (e) => {
    history.push("/login")
    e.preventDefault();
    
    dispatch(getVerifyEmail('ndkhang0512@gmail.com'));
  };
  return (
    <div className="container" id="container">
        <form onSubmit={(e) => HandleSubmit(e)}>
          
        <button className="button" name="status" type="submit">Sign In</button>
        </form>
    </div>
  );
};

export default VertifyActiceScreen;
