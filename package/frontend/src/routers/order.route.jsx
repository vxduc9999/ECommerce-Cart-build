import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderScreen from "../pages/Orderpage/order.page";
import { PATH } from "../constants/PATH";

function OrderRoute() {
  return (
    <Switch>
      <Route exact path={PATH.ORDER} component={() => <OrderScreen />} />
    </Switch>
  );
}

export default OrderRoute;
