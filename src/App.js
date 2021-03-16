import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/chart/cart";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Galerie from "./components/Galerie/Galerie";

const App = () => {
  return (
    <>
      <div className="content">
        <div className="content-inside">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/galerie" exact component={Galerie} />

                <Route path="/košík" exact component={Cart} />

                <Route path="/produkty" exact component={Products} />
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
