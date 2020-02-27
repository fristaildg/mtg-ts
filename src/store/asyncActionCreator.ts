import { AsyncActionStatus } from "../lib/apiCall.types"

interface ActionType {
  type: string
  payload: any
}

interface PendingState {
  [key: string]: ActionType
}

const getActionName = (actionType: string) => {
  return actionType
  .split('_')
  .slice(0, -1)
  .join('_')
}

export const asyncActionCreator = (actionType: string, status: AsyncActionStatus, payload?: any) => {
  return {
    type: `${actionType}_${status}`,
    payload
  }
}

export const pendingReducer = (state = {}, action: ActionType) => {
  const { type } = action
  const actionName = getActionName(type)

  if (!actionName) {
    return {
      ...state
    }
  }

  if (type.endsWith('_PENDING')) {
    return {
      ...state,
      [actionName]: {
        isLoading: true
      }
    }
  }

  if (type.endsWith('_SUCCESS') || type.endsWith('_REJECTED')) {
    return {
      ...state,
      [actionName]: {
        isLoading: false
      }
    }
  }

  if (type.endsWith('_CLEAR')) {
    let newState: PendingState = {...state}

    delete newState[actionName]
    return newState
  }

  return {
    ...state
  }
}