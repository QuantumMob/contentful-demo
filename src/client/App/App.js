import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from '../Home/Home';

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Container>
);

export default App;
