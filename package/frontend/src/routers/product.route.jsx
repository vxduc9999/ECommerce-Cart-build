import React from 'react';
import { Route, Switch } from "react-router-dom"
import ProductScreen from "../pages/Productpage/product.page";
import { PATH } from "../constants/PATH"




function ProductRoute(props) {

    return (
        <Switch>
            <Route
                exact path={PATH.PRODUCT}
                component={(props) => (
                    <ProductScreen {
                        ...props
                    } />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default ProductRoute;