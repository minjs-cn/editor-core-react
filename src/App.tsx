import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import { mainRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './stores';

import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {mainRoutes.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact || false} />
          ))}
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
