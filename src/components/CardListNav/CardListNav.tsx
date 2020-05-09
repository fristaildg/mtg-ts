import React from 'react'
import './CardListNav.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './types'
import { setPage } from '../../store/cardList/actions'

const CardListNav: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.CardListReducer.currentPage)
  const hasMore = useSelector((state: RootState) => state.CardListReducer.hasMore)  
  const dispatch = useDispatch()  

  const handlePageClick = (direction: string) => {
    if (direction === 'next') dispatch(setPage(currentPage + 1))
    if (direction === 'prev') dispatch(setPage(currentPage - 1))
  }

  return (
    <div className="card-list-nav">
      {currentPage > 1 && (
        <button onClick={() => {
          handlePageClick('prev')
        }}>
          previus page
        </button>
      )}
      {hasMore && (
        <button onClick={() => {
          handlePageClick('next')
        }}>
          next page
        </button>
      )}
    </div>
  )
}

export default CardListNav
  