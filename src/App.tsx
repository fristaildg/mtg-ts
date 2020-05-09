import React, { useEffect } from 'react'
import './App.scss'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import RegisterPage from './components/RegisterPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getLoggedUser } from './store/user/actions'
import LoadingOverlay from './components/LoadingOverlay'
import MatchBoard from './components/MatchBoard'

const App: React.FC = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getLoggedUser())
  }, [dispatch])

  return (
    <div className="App">
      <LoadingOverlay />
      <Router>
        <Switch>
          <Route path='/match' component={MatchBoard} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/register' component={RegisterPage}/>
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
