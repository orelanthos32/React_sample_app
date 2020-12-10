import HelloWorld from './Components/HelloWorldFunc'
import HelloWorldClass from './Components/HelloWorldClass'
//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/ContactUs'
import ApiProg from './Views/Apiprog'
function App() {
  return (
      <div>

        <Router>
          <Header/>
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/ApiProg/3">
                <ApiProg/>
              </Route>
            </Switch>
          </div>
        </Router>

      </div>

  );
  //footer removed between the last DIV
}

export default App;
