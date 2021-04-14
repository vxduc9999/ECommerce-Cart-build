import React from 'react';
import { Route, Switch } from "react-router-dom"
import VertifyActiceScreen from "../pages/Auth/VertifyActiceScreen";
import { PATH } from "../constants/PATH"




function VertifyActice() {
    return (
        <Switch>
            <Route
                exact path={PATH.VERIFY}
                component={(props) => (
                    <VertifyActiceScreen {
                        ...props
                    } />
                )}
            />
        </Switch>
    );
}

export default VertifyActice;