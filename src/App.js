import Provider from "./Provider";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import StyleRender from "./components/StyleRender";
import Message from "./components/Message";
import GlobalStyle from "./styles/Global";
import React from 'react';

const App = () => {


  return (

      <Provider>

          <GlobalStyle />

          <Router>

              <nav className="navbar justify-content-center navbar-expand-sm navbar-light bg-light">

                  <ul className="navbar-nav">

                      <li className="nav-item" title="Tables"><Link to="/message" >Message</Link></li>

                      <li className="nav-item" title="Jouer"><Link to="/rendu">Rendu</Link></li>

                  </ul>

              </nav>

              <Switch>

                  <Route exact path="/" component={Message} />

                  <Route exact path="/message" component={Message} />

                  <Route exact path="/rendu" component={StyleRender} />

                  <Route path="*"> <p>Aucune correspondance !</p> </Route>

              </Switch>

          </Router>

      </Provider>

  );
}

export default App;
