import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Components

import Navbar from "../components/Navbar/Navbar";
import Backdrop from "../components/Backdrop/Backdrop";

import Header from "../layouts/Header/Header.layout"

import HomeRoute from "./home.route"
import ProductRoute from "./product.route"
import CartRoute from "./cart.route"
import ViewProductRoute from "./viewProduct.route";
import LoginScreen from './login.route';
import RegisterScreen from './register.route';
import VertifyActiceScreen from '../pages/Auth/VertifyActiceScreen';

function Routes() {

    const [sideToggle, setSideToggle] = useState(false);
    return (
        <Router>
            <Header/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <main className="app">
                <LoginScreen/>
                <RegisterScreen/>
                <HomeRoute />
                <ProductRoute />
                <CartRoute />
                <ViewProductRoute/>
                {/* <VertifyActiceScreen exact path="/verify-email/:activation_token"/> */}
            </main>
        </Router>
    );
}

export default Routes;
