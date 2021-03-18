import React from 'react';
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/Homepage/home.page";
import { PATH } from "../constants/PATH"




function HomeRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.HOME}
                component={() => (
                    <HomePage />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default HomeRoute;