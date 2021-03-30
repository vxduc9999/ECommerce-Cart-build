import React from 'react';
import { Route, Switch } from "react-router-dom"
import PhonePage from "../pages/Phone/phone.page";
import { PATH } from "../constants/PATH"




function PhoneRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.PHONE}
                component={() => (
                    <PhonePage />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default PhoneRoute;