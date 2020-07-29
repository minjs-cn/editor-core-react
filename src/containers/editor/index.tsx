import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { editorRoutes } from 'src/routes';

const Editor: React.FC = () => {
  return (
    <div>
      <h1>editor</h1>
      <Switch>
        {editorRoutes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
};

export default Editor;
