import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import store from "state/store";
import history from "./state/history";
import App from "./App";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes/routes";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();