
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "../layouts/Header/Header.layout";
import Footer from "../layouts/Footer/Footer.layout";

import HomeRoute from "./home.route";
import ProductRoute from "./product.route";
import CartRoute from "./cart.route";
import ViewProductRoute from "./viewProduct.route";
import LoginScreen from './login.route';
import RegisterScreen from './register.route';
import OrderRoute from "./order.route";
import VertifyActice from "./vertifyActive.route";
import ForgotRoute from "./forgot.route"
import ChangepassRoute from "./changepass.route";
import ImportCodeRoute from "./entercode.route";
import BlogRoute from "./blog.route";
import ContacttRoute from "./contact.route";

function Routes() {
  //const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <VertifyActice/>
      <Header />
        <LoginScreen />
        <RegisterScreen />
        <HomeRoute />
        <ProductRoute />
        <CartRoute />
        <OrderRoute />
        <ViewProductRoute />
        <ForgotRoute/>
        <ChangepassRoute/>
        <ImportCodeRoute/>
        <BlogRoute/>
        <ContacttRoute/>
      <Footer/>
    </Router>
    );
}

export default Routes;
