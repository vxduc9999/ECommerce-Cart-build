import React from 'react';
import { Route, Switch } from "react-router-dom"
import ChangePassword from "../pages/Auth/ChangePassword";
import { PATH } from "../constants/PATH"

function ChangepassRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.CHANGEPASS}
                component={() => (
                    <ChangePassword />
                )}
            />
        </Switch>
    );
}

export default ChangepassRoute;