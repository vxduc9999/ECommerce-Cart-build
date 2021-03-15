import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterSceen from "./screens/Auth/RegisterScreen";
import VertifyActiceScreen from "./screens/Auth/VertifyActiceScreen";

// components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/detail/:slug" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterSceen} />
          <Route
            exact
            path="/verify-email/:activation_token"
            component={VertifyActiceScreen}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
