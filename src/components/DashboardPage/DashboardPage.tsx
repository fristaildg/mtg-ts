import React from 'react'
import Stage from '../Stage'
import LeftMenu from '../LeftMenu'
import DeckBuilderPage from '../DeckBuilderPage'
import { Switch, Route } from 'react-router-dom'

import './DashboardPage.scss'

const Dashboard = () => (
  <h2>Dashboard</h2>
)

const DashboardPage: React.FC = () => (
  <Stage className="dashboard-page">
    <LeftMenu />
    <main>
      <Switch>
        <Route path='/dashboard/build-deck' component={DeckBuilderPage} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </main>
  </Stage>
)

export default DashboardPage
