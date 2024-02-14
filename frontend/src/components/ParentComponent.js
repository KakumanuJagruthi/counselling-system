import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Child1 from './Child1';
import Child2 from './Child2';

const ParentComponent = ({ match }) => (
  <div>
    <h2>Parent Component</h2>
    <nav>
      <ul>
        <li>
          <Link to={`${match.url}/child1`}>Child 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/child2`}>Child 2</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path={`${match.path}/child1`} component={Child1} />
      <Route path={`${match.path}/child2`} component={Child2} />
    </Switch>
  </div>
);

export default ParentComponent;
