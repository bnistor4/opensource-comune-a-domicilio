import React, {Component} from 'react';
import {Switch, Router} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";

import {APP_NAME, PRIVACY_POLICY_URL, VERSION} from "../constants";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./Home";

export default class App extends Component {

  render() {
    return (
        <div className="App">
          <ConnectedRouter history={this.props.history}>
            <Router history={this.props.history}>
              <div className="App">
                <Switch>
                  {/*<ScrollToTopRoute path="/info" component={About} />*/}
                  <ScrollToTopRoute path="/" component={Home} />
                </Switch>

                <footer className="App-footer">
                  <div className="container">
                    <p>{APP_NAME} è un’iniziativa gratuita e senza scopo di lucro | <a href={PRIVACY_POLICY_URL}>Privacy Policy</a> | v {VERSION}</p>
                  </div>
                </footer>
              </div>
            </Router>
          </ConnectedRouter>
        </div>
    )
  }
}