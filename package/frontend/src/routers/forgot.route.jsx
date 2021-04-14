import React from 'react';
import { Route, Switch } from "react-router-dom"
import ForgotPass from "../pages/Auth/ForgotPass";
import { PATH } from "../constants/PATH"


function ForgotRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.FORGOTPASS}
                component={() => (
                    <ForgotPass />
                )}
            />
        </Switch>
    );
}

export default ForgotRoute;