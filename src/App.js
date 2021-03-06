import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import CopyRight from './components/CopyRight/CopyRight';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import CartCustomerInfo from './pages/Cart/CartCustomerInfo'
import CartShippingMethod from './pages/Cart/CartShippingMethod'
import CartPaymentMethod from './pages/Cart/CartPaymentMethod'
import ProductList from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/customer-info">
            <CartCustomerInfo />
          </Route>
          <Route path="/shipping-method">
            <CartShippingMethod />
          </Route>
          <Route path="/payment-method">
            <CartPaymentMethod />
          </Route>
          <Route path="/p/:slug">
            <ProductDetail />
          </Route>
          <Route path="/:category/:slug">
            <ProductList />
          </Route>
          <Route path="/:category">
            <ProductList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Subscribe />
        <Footer />
        <CopyRight />
      </div>
    </Router>
  );
}

export default App;
