import React from 'react';
import { Route, Switch } from "react-router-dom"
import RegisterScreen from "../pages/Auth/RegisterScreen";
import { PATH } from "../constants/PATH"




function HomeRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.REGISTER}
                component={() => (
                    <RegisterScreen />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default HomeRoute;