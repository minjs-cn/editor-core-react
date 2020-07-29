import React from 'react';
import { workRoutes } from 'src/routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Work: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>work</h1>
      <Switch>
        {workRoutes.map((route) => (
          <Route key={route.path} path={path + route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
};

export default Work;
