import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/chart/cart";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Galerie from "./components/Galerie/Galerie";
import Login from "./components/Login/LoginForm"
import RegistrationForm from "./components/Login/RegistrationForm"
import ForgotPass from "./components/Login/ForgotPass"
import Privateroute from "./components/Login/Privateroute"
const App = () => {
  return (
    <>
      <div className="content">
        <div className="content-inside">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/galerie" exact>
                  <Galerie />
                </Route>
                <Route path="/kosik" exact>
                  <Cart />
                </Route>
                <Route path="/produkty" exact>
                  <Products />
                </Route>
                <Route path="/prihlasit-se" exact>
                  <Login />
                </Route>
                <Route path="/registrace" exact>
                  <RegistrationForm />
                </Route>
                <Route path="/zmena-hesla" exact>
                  <ForgotPass />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default App;
