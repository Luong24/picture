import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Router } from 'react-router';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Picture from './pages/Picture';


export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/picture' exact Component={Picture} />
      </Switch>
    </Router>
  )
}
