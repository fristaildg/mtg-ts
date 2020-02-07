import React from 'react';
import './App.scss';
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
