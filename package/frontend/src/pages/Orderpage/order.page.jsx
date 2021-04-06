import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./order.style.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromOrder } from "../../redux/actions/orderAction";
import OrderItem from "../../components/OrderItem/OrderItem";
OrderScreen.propTypes = {};
function OrderScreen() {
  // const dispatch = useDispatch();
  // const order = useSelector((state) => state.order);
  // const { orderIt } = order;
  // const removeHandler = (id) => {
  //   dispatch(removeFromOrder(id));
  // };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="OrderScreen">
      <h2>ordering</h2>

      <div className="OrderScreen__navItem">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              {" "}
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              To Receive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Received
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="OrderScreen__tab">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="OrderScreen__tab1">
              <div className="OrderScreen__tab1__info">
                <div className="OrderScreen__tab1__info__left">
                  <p>
                    order: <span>151816518151651</span>
                  </p>
                  <p>Placed on 13 Dec 2020 01:29:22</p>
                </div>

                <div className="OrderScreen__tab1__info__right">
                  <p>
                    Total: <span>1515</span>
                  </p>
                  <p>Delivered on 15 Dec 2020</p>
                </div>
              </div>

              <div>
                <OrderItem />
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <h4>Tab 2 Contents</h4>
          </TabPane>
          <TabPane tabId="3">
            <h4>Tab 3 Contents</h4>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default OrderScreen;
