import React, { useEffect, useState } from "react";
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
import { getOrder, removeFromOrder } from "../../redux/actions/orderAction";
import OrderItem from "../../components/OrderItem/OrderItem";
OrderScreen.propTypes = {};
function OrderScreen() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const { orderItem } = order;
  console.log("🚀 ---------------------------------------------------------");
  console.log("🚀 ~ file: order.page.jsx ~ line 25 ~ orderItem", orderItem);
  console.log("🚀 ---------------------------------------------------------");
  useEffect(() => {
    dispatch(getOrder(1));
  }, [dispatch]);

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
      <div className="OrderScreen__navItem">
        <h2>ordering</h2>
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
              To confirm
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              To Receive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Received
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              cancelled
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="OrderScreen__tab">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {orderItem.map((x) => (
              <div className="OrderScreen__tab1">
                <div className="OrderScreen__tab1__info">
                  <div className="OrderScreen__tab1__info__left">
                    <p>
                      order: <span>{x.order_number}</span>
                    </p>
                    <p>Placed on 13 Dec 2020 01:29:22</p>
                  </div>

                  <div className="OrderScreen__tab1__info__right">
                    <p>
                      Total: <span>{x.total}</span>
                    </p>
                    <p>Delivered on 15 Dec 2020</p>
                  </div>
                </div>

                <div>
                  {x.details.map((item) => (
                    <OrderItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </TabPane>
          <TabPane tabId="2">
            {orderItem.map((x) =>
              x.status === 1 ? (
                <div className="OrderScreen__tab1">
                  <div className="OrderScreen__tab1__info">
                    <div className="OrderScreen__tab1__info__left">
                      <p>
                        order: <span>{x.order_number}</span>
                      </p>
                      <p>Placed on 13 Dec 2020 01:29:22</p>
                    </div>

                    <div className="OrderScreen__tab1__info__right">
                      <p>
                        Total: <span>{x.total}</span>
                      </p>
                      <p>Delivered on 15 Dec 2020</p>
                    </div>
                  </div>

                  <div>
                    {x.details.map((item) => (
                      <OrderItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </TabPane>
          <TabPane tabId="3">
            {orderItem.map((x) =>
              x.status === 2 ? (
                <div className="OrderScreen__tab1">
                  <div className="OrderScreen__tab1__info">
                    <div className="OrderScreen__tab1__info__left">
                      <p>
                        order: <span>{x.order_number}</span>
                      </p>
                      <p>Placed on 13 Dec 2020 01:29:22</p>
                    </div>

                    <div className="OrderScreen__tab1__info__right">
                      <p>
                        Total: <span>{x.total}</span>
                      </p>
                      <p>Delivered on 15 Dec 2020</p>
                    </div>
                  </div>

                  <div>
                    {x.details.map((item) => (
                      <OrderItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </TabPane>
          <TabPane tabId="4">
            {orderItem.map((x) =>
              x.status === 3 ? (
                <div className="OrderScreen__tab1">
                  <div className="OrderScreen__tab1__info">
                    <div className="OrderScreen__tab1__info__left">
                      <p>
                        order: <span>{x.order_number}</span>
                      </p>
                      <p>Placed on 13 Dec 2020 01:29:22</p>
                    </div>

                    <div className="OrderScreen__tab1__info__right">
                      <p>
                        Total: <span>{x.total}</span>
                      </p>
                      <p>Delivered on 15 Dec 2020</p>
                    </div>
                  </div>

                  <div>
                    {x.details.map((item) => (
                      <OrderItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </TabPane>
          <TabPane tabId="5">
            {orderItem.map((x) =>
              x.status === 4 ? (
                <div className="OrderScreen__tab1">
                  <div className="OrderScreen__tab1__info">
                    <div className="OrderScreen__tab1__info__left">
                      <p>
                        order: <span>{x.order_number}</span>
                      </p>
                      <p>Placed on 13 Dec 2020 01:29:22</p>
                    </div>

                    <div className="OrderScreen__tab1__info__right">
                      <p>
                        Total: <span>{x.total}</span>
                      </p>
                      <p>Delivered on 15 Dec 2020</p>
                    </div>
                  </div>

                  <div>
                    {x.details.map((item) => (
                      <OrderItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default OrderScreen;
