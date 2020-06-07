import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from './contexts/auth0-context'
import history from './lib/history'

const store = configureStore()

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : `${window.location.pathname}dashboard`)
}

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirect_uri={window.location.origin}
      // @ts-ignore: Unreachable code error
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
