import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CardListReducer from './cardList/reducers'
import DeckListReducer from './deckList/reducers'
import UserReducer from './user/reducers'
import SymbologyReducer from './symbology/reducers'
import { pendingReducer } from "./asyncActionCreator";

const rootReducer = combineReducers({
  PendingState: pendingReducer,
  CardListReducer,
  DeckListReducer,
  UserReducer,
  SymbologyReducer
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