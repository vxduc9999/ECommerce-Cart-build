import React from 'react';
import { Route, Switch } from "react-router-dom"
import { PATH } from "../constants/PATH"




function ViewProductRoute(props) {
    return (
        <Switch>
            <Route
                exact path={`${PATH.VIEWPRODUCT}/:id`}
                component={() => (
                    <h2>Nguyễn jkdhsdjkhksj</h2>
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default ViewProductRoute;