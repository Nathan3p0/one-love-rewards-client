import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RewardsDisplay from '../../routes/RewardsDisplay/RewardsDisplay'

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/rewards'} component={RewardsDisplay} />
        </Switch>
      </>
    </div>
  );
}

export default App;
