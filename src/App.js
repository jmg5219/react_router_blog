import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Importing my components
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';

import './App.css';
function App() {
  return (
    <div className="App">


      <Router>
        <nav>
          <Link to='/' className="link">Home</Link>
          <Link to='/blog' className="link">Blog</Link>
          <Link to='/about' className="link">About</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about">
            <About />

          </Route>
          
          <Route path="*">
            <h2>PAGE NOT FOUND</h2>
            <Link to="/">Return to the Homepage</Link>
          </Route>

        </Switch>
      </Router>





    </div>
  );
}

export default App;
