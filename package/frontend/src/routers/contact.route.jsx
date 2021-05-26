import React from 'react';
import { Route, Switch } from "react-router-dom"
import ContactPage from "../pages/ContactUs/contact.page";
import { PATH } from "../constants/PATH"

function ContacttRoute(props) {
    return (
        <Switch>
            <Route
                exact path={PATH.CONTACT}
                component={() => (
                    <ContactPage />
                )}
            />
        </Switch>
    );
}

export default ContacttRoute;