import React from 'react';
import { Route, Switch } from "react-router-dom"
import LoginScreen from "../pages/Auth/LoginScreen";
import { PATH } from "../constants/PATH"




function HomeRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.LOGIN}
                component={() => (
                    <LoginScreen />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default HomeRoute;