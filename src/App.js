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
