import React from 'react'
import { useSelector } from 'react-redux'
import './LoadingOverlay.scss'
import { RootState } from './types'

const LoadingOverlay: React.FC = () => {
  const saveDeckStatus = useSelector((state: RootState) => state.PendingState.SAVE_DECK)
  const updateDeckStatus = useSelector((state: RootState) => state.PendingState.UPDATE_DECK)
  const deleteDeckStatus = useSelector((state: RootState) => state.PendingState.DELETE_DECK)
  // const fetchCardsStatus = useSelector((state: RootState) => state.PendingState.FETCH_CARDS)
  const fetchDeckStatus = useSelector((state: RootState) => state.PendingState.FETCH_DECK)

  const showOverlay = () => {
    const statusList = [
      saveDeckStatus,
      updateDeckStatus,
      deleteDeckStatus,
      // fetchCardsStatus,
      fetchDeckStatus
    ]

    return statusList.some(statusItem => statusItem && statusItem.isLoading)
  }

  if (showOverlay()) {
    return (
      <div className="loading-overlay">
        <h1>
          Loading...
        </h1>
      </div>
    )
  } else {
    return null
  }

}

export default LoadingOverlay
