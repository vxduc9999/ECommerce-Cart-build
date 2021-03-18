import React from 'react';
import { Route, Switch } from "react-router-dom"
import CartPage from "../pages/Cartpage/cart.page";
import { PATH } from "../constants/PATH"


function CartRoute() {
    return (
        <Switch>
            <Route
                exact path={PATH.CART}
                component={() => (
                    <CartPage />
                    // <Suspense fallback={<Loading />}>
                    //     <Login />
                    // </Suspense>
                )}
            />
        </Switch>
    );
}

export default CartRoute;