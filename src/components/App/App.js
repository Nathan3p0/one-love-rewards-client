import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RewardsDisplay from '../../routes/RewardsDisplay/RewardsDisplay'
import RestaurantDashboard from '../../routes/RestaurantDashboard/RestaurantDashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/rewards'} component={RewardsDisplay} />
          <Route path={'/dashboard'} component={RestaurantDashboard} />
        </Switch>
      </>
    </div>
  );
}

export default App;
