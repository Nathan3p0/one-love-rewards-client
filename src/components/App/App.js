import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RewardsDisplay from '../../routes/RewardsDisplay/RewardsDisplay'
import RestaurantDashboard from '../../routes/RestaurantDashboard/RestaurantDashboard'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Switch>
          <PublicOnlyRoute exact path={'/'} component={LandingPage} />
          <PublicOnlyRoute path={'/rewards/:id'} component={RewardsDisplay} />
          <PrivateRoute path={'/dashboard'} component={RestaurantDashboard} />
        </Switch>
      </>
    </div>
  );
}

export default App;
