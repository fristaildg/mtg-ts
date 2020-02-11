import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CardListReducer from './cardList/reducers'
import DeckListReducer from './deckList/reducers'

const rootReducer = combineReducers({
  CardListReducer,
  DeckListReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  )

  return store
}