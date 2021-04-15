
import {useDispatch} from "react-redux"
import { getVerifyEmail } from "../../redux/actions/authActions";

const VertifyActiceScreen = (props) => {
  const dispatch = useDispatch();
  dispatch(getVerifyEmail(props.match.params.activation_token));
  
  return (
    <div className="container" id="container">
        <h5>You have successfully registered for an account</h5>
    </div>
  );
};

export default VertifyActiceScreen;
