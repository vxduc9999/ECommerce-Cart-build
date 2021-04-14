import React from 'react';
import { Route, Switch } from "react-router-dom"
import ImportCode from "../pages/Auth/ImportCode";
import { PATH } from "../constants/PATH"

function ImportCodeRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.ENTERCODE}
                component={() => (
                    <ImportCode />
                )}
            />
        </Switch>
    );
}

export default ImportCodeRoute;